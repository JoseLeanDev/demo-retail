import { useState, useEffect, useMemo } from 'react'
import {
  XMarkIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ChartBarIcon,
  TruckIcon,
  CalculatorIcon,
} from '@heroicons/react/24/outline'

const formatGTQ = (value) => {
  if (!value && value !== 0) return 'Q 0'
  return 'Q ' + Math.round(value).toLocaleString('es-GT')
}

const formatNum = (value) => {
  if (!value && value !== 0) return '0'
  return value.toLocaleString('es-GT')
}

// ============================================
// CÁLCULOS DE REORDENAMIENTO
// ============================================
function calcularReordenamiento(producto) {
  const demandaDiaria = producto.ventaPromedioMensual / 30
  const leadTime = producto.diasEntrega
  const stockSeguridad = Math.round(demandaDiaria * leadTime * 0.5)
  const puntoReorden = Math.round(demandaDiaria * leadTime + stockSeguridad)
  const stockMaximo = producto.stockMax || Math.round(puntoReorden * 1.5)
  const cantidadRecomendada = Math.max(0, puntoReorden - producto.stock)
  const valorCompra = cantidadRecomendada * producto.costoUnitario
  const diasHastaReorden = producto.stock > puntoReorden
    ? Math.round((producto.stock - puntoReorden) / demandaDiaria)
    : 0

  return {
    demandaDiaria,
    leadTime,
    stockSeguridad,
    puntoReorden,
    stockMaximo,
    cantidadRecomendada,
    valorCompra,
    diasHastaReorden,
  }
}

// ============================================
// GRÁFICA DE NIVEL DE INVENTARIO
// ============================================
function GraficaNivelInventario({ producto, calc }) {
  const dias = 60 // Mostrar 60 días de proyección
  const data = useMemo(() => {
    const demandaDiaria = calc.demandaDiaria
    const resultado = []
    let stock = producto.stock
    let diaReorden = null
    let diaStockout = null

    for (let d = 0; d <= dias; d++) {
      // Reducir stock por demanda diaria
      if (d > 0) stock = Math.max(0, stock - demandaDiaria)

      // Detectar día de reorden
      if (diaReorden === null && stock <= calc.puntoReorden) {
        diaReorden = d
      }

      // Detectar día de stockout
      if (diaStockout === null && stock <= 0) {
        diaStockout = d
      }

      resultado.push({ dia: d, stock: Math.round(stock) })
    }

    return { puntos: resultado, diaReorden, diaStockout }
  }, [producto.stock, calc.demandaDiaria, calc.puntoReorden])

  const maxStock = Math.max(producto.stock, calc.stockMaximo, calc.puntoReorden * 1.2)
  const width = 500
  const height = 220
  const padding = { top: 20, right: 20, bottom: 40, left: 50 }
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  const xScale = (d) => padding.left + (d / dias) * chartW
  const yScale = (s) => padding.top + chartH - (s / maxStock) * chartH

  // Línea de stock proyectado
  const linePath = data.puntos.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${xScale(p.dia)} ${yScale(p.stock)}`
  ).join(' ')

  // Área bajo la curva
  const areaPath = `${linePath} L ${xScale(dias)} ${yScale(0)} L ${xScale(0)} ${yScale(0)} Z`

  // Líneas de referencia
  const yStockSeg = yScale(calc.stockSeguridad)
  const yPuntoReorden = yScale(calc.puntoReorden)
  const yStockActual = yScale(producto.stock)

  // Detectar si las líneas de referencia están muy cerca para evitar superposición de etiquetas
  const minLabelGap = 28
  const linesClose = Math.abs(yPuntoReorden - yStockSeg) < minLabelGap

  // Determinar posición vertical de etiquetas para que no se encimen
  let segLabelY = yStockSeg
  let reordenLabelY = yPuntoReorden
  if (linesClose) {
    if (yStockSeg <= yPuntoReorden) {
      segLabelY = yStockSeg - 6
      reordenLabelY = yPuntoReorden + 6
    } else {
      segLabelY = yStockSeg + 6
      reordenLabelY = yPuntoReorden - 6
    }
  }

  return (
    <div className="bg-[var(--bg-secondary)] rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold flex items-center gap-1.5">
          <ChartBarIcon className="w-4 h-4 text-[var(--accent-blue)]" />
          Proyección de Nivel de Inventario — 60 días
        </h4>
        <span className="text-[10px] text-[var(--text-muted)]">
          Demanda: {calc.demandaDiaria.toFixed(1)} und/día
        </span>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ maxHeight: 260 }}>
        {/* Grid horizontal */}
        {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
          <g key={tick}>
            <line
              x1={padding.left}
              y1={padding.top + chartH * tick}
              x2={width - padding.right}
              y2={padding.top + chartH * tick}
              stroke="var(--border-default)"
              strokeDasharray="3,3"
              strokeWidth={0.5}
            />
            <text
              x={padding.left - 8}
              y={padding.top + chartH * tick + 3}
              textAnchor="end"
              fontSize={9}
              fill="var(--text-muted)"
            >
              {formatNum(Math.round(maxStock * (1 - tick)))}
            </text>
          </g>
        ))}

        {/* Eje X */}
        {[0, 15, 30, 45, 60].map((d) => (
          <g key={d}>
            <line
              x1={xScale(d)}
              y1={padding.top}
              x2={xScale(d)}
              y2={height - padding.bottom}
              stroke="var(--border-default)"
              strokeDasharray="2,2"
              strokeWidth={0.5}
            />
            <text
              x={xScale(d)}
              y={height - padding.bottom + 14}
              textAnchor="middle"
              fontSize={9}
              fill="var(--text-muted)"
            >
              Día {d}
            </text>
          </g>
        ))}

        {/* Área de stock proyectado */}
        <path d={areaPath} fill="rgba(59,130,246,0.08)" />

        {/* Línea de stock proyectado */}
        <path d={linePath} fill="none" stroke="#3b82f6" strokeWidth={2} />

        {/* Línea de stock de seguridad */}
        <line
          x1={padding.left}
          y1={yStockSeg}
          x2={width - padding.right}
          y2={yStockSeg}
          stroke="#ef4444"
          strokeDasharray="6,3"
          strokeWidth={1.5}
        />
        {/* Fondo más opaco para mejor legibilidad */}
        <rect
          x={width - padding.right - 118}
          y={segLabelY - 11}
          width={118}
          height={20}
          rx={4}
          fill="rgba(239,68,68,0.18)"
          stroke="#ef4444"
          strokeWidth={0.8}
        />
        <text
          x={width - padding.right - 6}
          y={segLabelY + 4}
          textAnchor="end"
          fontSize={10}
          fontWeight={600}
          fill="#dc2626"
        >
          Stock Seg: {formatNum(calc.stockSeguridad)}
        </text>

        {/* Línea de punto de reorden */}
        <line
          x1={padding.left}
          y1={yPuntoReorden}
          x2={width - padding.right}
          y2={yPuntoReorden}
          stroke="#f59e0b"
          strokeDasharray="6,3"
          strokeWidth={1.5}
        />
        {/* Fondo más opaco para mejor legibilidad */}
        <rect
          x={padding.left + 4}
          y={reordenLabelY - 11}
          width={120}
          height={20}
          rx={4}
          fill="rgba(245,158,11,0.22)"
          stroke="#f59e0b"
          strokeWidth={0.8}
        />
        <text
          x={padding.left + 10}
          y={reordenLabelY + 4}
          fontSize={10}
          fontWeight={600}
          fill="#b45309"
        >
          Punto Reorden: {formatNum(calc.puntoReorden)}
        </text>

        {/* Línea de stock actual */}
        <line
          x1={xScale(0)}
          y1={yStockActual}
          x2={xScale(0) + 8}
          y2={yStockActual}
          stroke="#10b981"
          strokeWidth={3}
        />
        <circle cx={xScale(0)} cy={yStockActual} r={4} fill="#10b981" />
        <text
          x={xScale(0) + 12}
          y={yStockActual + 3}
          fontSize={10}
          fontWeight={600}
          fill="#059669"
        >
          Actual: {formatNum(producto.stock)}
        </text>

        {/* Indicador de día de reorden */}
        {data.diaReorden !== null && data.diaReorden > 0 && (
          <g>
            <line
              x1={xScale(data.diaReorden)}
              y1={padding.top}
              x2={xScale(data.diaReorden)}
              y2={height - padding.bottom}
              stroke="#f59e0b"
              strokeDasharray="3,3"
              strokeWidth={1}
            />
            <circle cx={xScale(data.diaReorden)} cy={yScale(calc.puntoReorden)} r={5} fill="#f59e0b" />
            <text
              x={xScale(data.diaReorden)}
              y={padding.top - 4}
              textAnchor="middle"
              fontSize={9}
              fontWeight={600}
              fill="#f59e0b"
            >
              Reorden Día {data.diaReorden}
            </text>
          </g>
        )}

        {/* Indicador de stockout */}
        {data.diaStockout !== null && data.diaStockout > 0 && (
          <g>
            <line
              x1={xScale(data.diaStockout)}
              y1={padding.top}
              x2={xScale(data.diaStockout)}
              y2={height - padding.bottom}
              stroke="#ef4444"
              strokeDasharray="3,3"
              strokeWidth={1}
            />
            <text
              x={xScale(data.diaStockout)}
              y={padding.top - 4}
              textAnchor="middle"
              fontSize={9}
              fontWeight={600}
              fill="#ef4444"
            >
              Stockout Día {data.diaStockout}
            </text>
          </g>
        )}
      </svg>

      {/* Leyenda */}
      <div className="flex flex-wrap gap-3 mt-2 justify-center">
        <div className="flex items-center gap-1">
          <div className="w-3 h-0.5 bg-[#3b82f6]" />
          <span className="text-[10px] text-[var(--text-muted)]">Proyección</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-0.5 bg-[#f59e0b] border-dashed" style={{ borderTop: '2px dashed #f59e0b' }} />
          <span className="text-[10px] text-[var(--text-muted)]">Punto Reorden</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-0.5 bg-[#ef4444] border-dashed" style={{ borderTop: '2px dashed #ef4444' }} />
          <span className="text-[10px] text-[var(--text-muted)]">Stock Seguridad</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#10b981]" />
          <span className="text-[10px] text-[var(--text-muted)]">Stock Actual</span>
        </div>
      </div>
    </div>
  )
}

// ============================================
// GRÁFICA DE CONSUMO HISTÓRICO VS PROYECTADO
// ============================================
function GraficaConsumoHistorico({ producto }) {
  // Generar historial de 6 meses basado en ventaPromedioMensual
  const historial = useMemo(() => {
    const base = producto.ventaPromedioMensual
    const factors = producto.tendencia === 'up' ? [0.85, 0.90, 0.95, 1.0, 1.08, 1.15] :
                    producto.tendencia === 'down' ? [1.15, 1.08, 1.0, 0.95, 0.90, 0.85] :
                    [0.95, 1.02, 0.98, 1.05, 1.02, 0.98]
    return factors.map((f, i) => ({
      mes: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'][i],
      ventas: Math.round(base * f),
    }))
  }, [producto.ventaPromedioMensual, producto.tendencia])

  const maxVal = Math.max(...historial.map(h => h.ventas)) * 1.2
  const width = 300
  const height = 140
  const padding = { top: 10, right: 10, bottom: 30, left: 40 }
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  const barWidth = chartW / historial.length * 0.6
  const barGap = chartW / historial.length

  return (
    <div className="bg-[var(--bg-secondary)] rounded-lg p-4">
      <h4 className="text-sm font-semibold mb-3 flex items-center gap-1.5">
        <ChartBarIcon className="w-4 h-4 text-[var(--accent-green)]" />
        Consumo Histórico (6 meses)
      </h4>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ maxHeight: 160 }}>
        {/* Eje Y */}
        {[0, 0.5, 1].map((tick) => (
          <g key={tick}>
            <line
              x1={padding.left}
              y1={padding.top + chartH * tick}
              x2={width - padding.right}
              y2={padding.top + chartH * tick}
              stroke="var(--border-default)"
              strokeDasharray="2,2"
              strokeWidth={0.5}
            />
            <text
              x={padding.left - 5}
              y={padding.top + chartH * tick + 3}
              textAnchor="end"
              fontSize={8}
              fill="var(--text-muted)"
            >
              {formatNum(Math.round(maxVal * (1 - tick)))}
            </text>
          </g>
        ))}

        {/* Barras */}
        {historial.map((h, i) => {
          const barH = (h.ventas / maxVal) * chartH
          const x = padding.left + i * barGap + (barGap - barWidth) / 2
          const y = padding.top + chartH - barH
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barH}
                rx={2}
                fill="#3b82f6"
                opacity={0.8}
              />
              <text
                x={x + barWidth / 2}
                y={y - 4}
                textAnchor="middle"
                fontSize={8}
                fill="var(--text-primary)"
              >
                {formatNum(h.ventas)}
              </text>
              <text
                x={x + barWidth / 2}
                y={height - padding.bottom + 12}
                textAnchor="middle"
                fontSize={8}
                fill="var(--text-muted)"
              >
                {h.mes}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// ============================================
// MODAL PRINCIPAL
// ============================================
export default function ModalReordenamiento({ producto, onClose }) {
  const [animado, setAnimado] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimado(true), 50)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!producto) return null

  const calc = calcularReordenamiento(producto)
  const estado = producto.stock <= calc.puntoReorden ? 'urgente' :
                 producto.stock <= calc.puntoReorden * 1.3 ? 'atencion' : 'ok'

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div 
        className={`bg-[var(--bg-primary)] rounded-xl border border-[var(--border-strong)] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transition-all duration-300 ${animado ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-[var(--border-default)] bg-[var(--bg-primary)] rounded-t-xl">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase font-medium text-[var(--text-muted)] px-2 py-0.5 rounded bg-[var(--bg-secondary)]">
                {producto.linea}
              </span>
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                estado === 'urgente' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                estado === 'atencion' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              }`}>
                {estado === 'urgente' ? '⚠ Reorden Requerido' :
                 estado === 'atencion' ? '◉ Próximo a Reorden' :
                 '✓ Stock Saludable'}
              </span>
            </div>
            <h2 className="text-lg font-bold">{producto.nombre}</h2>
            <p className="text-xs text-[var(--text-muted)]">
              {producto.proveedor} · Entrega: {producto.diasEntrega} días · Costo: Q {producto.costoUnitario}/und
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-[var(--text-muted)]" />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-5 space-y-5">
          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 bg-[var(--bg-secondary)] rounded-lg text-center">
              <p className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Stock Actual</p>
              <p className="text-xl font-bold font-mono">{formatNum(producto.stock)}</p>
              <p className="text-[10px] text-[var(--text-muted)]">und</p>
            </div>
            <div className="p-3 bg-[var(--bg-secondary)] rounded-lg text-center">
              <p className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Punto Reorden</p>
              <p className="text-xl font-bold font-mono text-[#f59e0b]">{formatNum(calc.puntoReorden)}</p>
              <p className="text-[10px] text-[var(--text-muted)]">und</p>
            </div>
            <div className="p-3 bg-[var(--bg-secondary)] rounded-lg text-center">
              <p className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Stock Seguridad</p>
              <p className="text-xl font-bold font-mono text-[#ef4444]">{formatNum(calc.stockSeguridad)}</p>
              <p className="text-[10px] text-[var(--text-muted)]">und</p>
            </div>
            <div className="p-3 bg-[var(--bg-secondary)] rounded-lg text-center">
              <p className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Cantidad a Ordenar</p>
              <p className={`text-xl font-bold font-mono ${calc.cantidadRecomendada > 0 ? 'text-[var(--accent-orange)]' : 'text-emerald-400'}`}>
                {calc.cantidadRecomendada > 0 ? `+${formatNum(calc.cantidadRecomendada)}` : 'Suficiente'}
              </p>
              <p className="text-[10px] text-[var(--text-muted)]">
                {calc.cantidadRecomendada > 0 ? formatGTQ(calc.valorCompra) : '—'}
              </p>
            </div>
          </div>

          {/* Gráfica principal de nivel de inventario */}
          <GraficaNivelInventario producto={producto} calc={calc} />

          {/* Grid inferior: consumo histórico + fórmulas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GraficaConsumoHistorico producto={producto} />

            {/* Panel de fórmulas */}
            <div className="bg-[var(--bg-secondary)] rounded-lg p-4">
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-1.5">
                <CalculatorIcon className="w-4 h-4 text-[var(--accent-orange)]" />
                Fórmula de Reordenamiento
              </h4>
              <div className="space-y-3">
                <div className="p-2.5 bg-[var(--bg-primary)] rounded border border-[var(--border-default)]">
                  <p className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Demanda Diaria</p>
                  <p className="text-sm font-mono">
                    {producto.ventaPromedioMensual} ÷ 30 = <span className="font-bold text-[var(--accent-blue)]">{calc.demandaDiaria.toFixed(1)} und/día</span>
                  </p>
                </div>
                <div className="p-2.5 bg-[var(--bg-primary)] rounded border border-[var(--border-default)]">
                  <p className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Stock de Seguridad</p>
                  <p className="text-sm font-mono">
                    {calc.demandaDiaria.toFixed(1)} × {calc.leadTime}d × 0.5 = <span className="font-bold text-[#ef4444]">{formatNum(calc.stockSeguridad)} und</span>
                  </p>
                </div>
                <div className="p-2.5 bg-[var(--bg-primary)] rounded border border-[var(--border-default)]">
                  <p className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Punto de Reorden</p>
                  <p className="text-sm font-mono">
                    ({calc.demandaDiaria.toFixed(1)} × {calc.leadTime}d) + {formatNum(calc.stockSeguridad)} = <span className="font-bold text-[#f59e0b]">{formatNum(calc.puntoReorden)} und</span>
                  </p>
                </div>

                {calc.diasHastaReorden > 0 && (
                  <div className="p-2.5 bg-amber-500/5 rounded border border-amber-500/20">
                    <p className="text-[10px] text-amber-600 uppercase mb-1">Próximo Reorden</p>
                    <p className="text-sm font-medium text-amber-700">
                      En <span className="font-bold">{calc.diasHastaReorden} días</span> se alcanzará el punto de reorden
                    </p>
                  </div>
                )}

                {calc.cantidadRecomendada > 0 && (
                  <div className="p-2.5 bg-red-500/5 rounded border border-red-500/20">
                    <p className="text-[10px] text-red-500 uppercase mb-1">Acción Requerida</p>
                    <p className="text-sm font-medium text-red-600">
                      Ordenar <span className="font-bold">{formatNum(calc.cantidadRecomendada)} und</span> ahora
                      <span className="block text-xs font-normal mt-0.5">Inversión estimada: {formatGTQ(calc.valorCompra)}</span>
                    </p>
                  </div>
                )}

                {calc.cantidadRecomendada === 0 && (
                  <div className="p-2.5 bg-emerald-500/5 rounded border border-emerald-500/20">
                    <p className="text-[10px] text-emerald-600 uppercase mb-1">Status</p>
                    <p className="text-sm font-medium text-emerald-700">
                      <CheckCircleIcon className="w-4 h-4 inline mr-1" />
                      Stock por encima del punto de reorden. No requiere acción.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-10 flex items-center justify-between p-4 border-t border-[var(--border-default)] bg-[var(--bg-secondary)] rounded-b-xl">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <InformationCircleIcon className="w-4 h-4" />
            <span>Los cálculos se basan en venta promedio mensual y lead time del proveedor.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--border-strong)] transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
