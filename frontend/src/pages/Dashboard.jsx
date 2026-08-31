import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useDashboard, useInsights, useWorkingCapital } from '../hooks/useCfoData'
import PageInsights from '../components/agents/PageInsights'
import RunwayCalculator from '../components/dashboard/RunwayCalculator'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, Legend, LineChart, Line
} from 'recharts'
import {
  BanknotesIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
  SparklesIcon,
  CpuChipIcon,
  ArrowPathIcon,
  WalletIcon,
  ReceiptRefundIcon,
  TagIcon,
  ShoppingCartIcon,
  CubeIcon,
  FireIcon,
  ArrowTrendingUpIcon as TrendIcon,
  ArchiveBoxIcon,
  TruckIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'
import { demoClientesConcentracion } from '../data/demoData'

const formatGTQ = (value) => {
  if (!value && value !== 0) return 'Q 0'
  return 'Q ' + value.toLocaleString('es-GT')
}

// ========== DATOS DEMO RETAIL ==========
const ventasPorCategoria = [
  { nombre: 'Alimentos', ventas: 2850000, presupuesto: 2700000, margen: 22, transacciones: 8450 },
  { nombre: 'Bebidas', ventas: 1620000, presupuesto: 1500000, margen: 35, transacciones: 4200 },
  { nombre: 'Limpieza', ventas: 980000, presupuesto: 900000, margen: 28, transacciones: 3100 },
  { nombre: 'Cuidado Personal', ventas: 720000, presupuesto: 700000, margen: 42, transacciones: 1850 },
  { nombre: 'Hogar', ventas: 580000, presupuesto: 600000, margen: 38, transacciones: 1200 },
  { nombre: 'Mascotas', ventas: 245000, presupuesto: 250000, margen: 32, transacciones: 680 },
]

const sucursales = [
  { nombre: 'Sucursal Centro', ventas: 3850000, meta: 3600000, transacciones: 5200, ticket: 740, clientesDia: 173 },
  { nombre: 'Sucursal Norte', ventas: 1620000, meta: 1500000, transacciones: 2100, ticket: 771, clientesDia: 70 },
  { nombre: 'Sucursal Sur', ventas: 1280000, meta: 1400000, transacciones: 1850, ticket: 692, clientesDia: 62 },
  { nombre: 'Sucursal Zona 10', ventas: 620000, meta: 650000, transacciones: 680, ticket: 912, clientesDia: 23 },
]

const cxcAging = [
  { rango: 'Al Corriente', monto: 1850000, color: '#10b981' },
  { rango: '1-30 días', monto: 420000, color: '#f59e0b' },
  { rango: '31-60 días', monto: 180000, color: '#f97316' },
  { rango: '60+ días', monto: 85000, color: '#ef4444' },
]

const cxpProximas = [
  { proveedor: 'Coca-Cola FEMSA', monto: 285000, vence: '2 días', tipo: 'Bebidas' },
  { proveedor: 'PepsiCo', monto: 145000, vence: '5 días', tipo: 'Snacks/Bebidas' },
  { proveedor: 'Unilever', monto: 95000, vence: '7 días', tipo: 'Limpieza' },
  { proveedor: 'P&G', monto: 68000, vence: '10 días', tipo: 'Cuidado Personal' },
]

const tendenciaVentas = [
  { mes: 'Ene', ventas: 4200000, presupuesto: 4000000, transacciones: 9800 },
  { mes: 'Feb', ventas: 3850000, presupuesto: 4000000, transacciones: 8900 },
  { mes: 'Mar', ventas: 4500000, presupuesto: 4200000, transacciones: 10200 },
  { mes: 'Abr', ventas: 5100000, presupuesto: 4500000, transacciones: 11500 },
  { mes: 'May', ventas: 4800000, presupuesto: 4600000, transacciones: 10800 },
  { mes: 'Jun', ventas: 5200000, presupuesto: 4800000, transacciones: 11800 },
  { mes: 'Jul', ventas: 5358000, presupuesto: 5000000, transacciones: 12400 },
]

const inventarioPorCategoria = [
  { categoria: 'Alimentos', stock: 1250, minimo: 800, rotacion: 8.5, valor: 1850000 },
  { categoria: 'Bebidas', stock: 890, minimo: 600, rotacion: 12.2, valor: 920000 },
  { categoria: 'Limpieza', stock: 650, minimo: 500, rotacion: 6.8, valor: 485000 },
  { categoria: 'Cuidado Personal', stock: 420, minimo: 400, rotacion: 5.2, valor: 310000 },
  { categoria: 'Hogar', stock: 380, minimo: 350, rotacion: 4.1, valor: 225000 },
  { categoria: 'Mascotas', stock: 180, minimo: 150, rotacion: 3.8, valor: 95000 },
]

const topProductos = [
  { nombre: 'Arroz 5lb', categoria: 'Alimentos', ventas: 28500, unidades: 9500, stock: 320, margen: 18 },
  { nombre: 'Coca-Cola 2L', categoria: 'Bebidas', ventas: 22400, unidades: 5600, stock: 180, margen: 32 },
  { nombre: 'Aceite 1L', categoria: 'Alimentos', ventas: 19800, unidades: 6600, stock: 210, margen: 15 },
  { nombre: 'Jabón en Barra', categoria: 'Limpieza', ventas: 16200, unidades: 5400, stock: 145, margen: 28 },
  { nombre: 'Shampoo 400ml', categoria: 'Cuidado Personal', ventas: 14800, unidades: 1850, stock: 85, margen: 45 },
]

const COLORS = ['#10b981', '#f59e0b', '#f97316', '#ef4444']
const COLORS_INVENTARIO = ['#001639', '#2563eb', '#7c3aed', '#db2777', '#ea580c', '#65a30d']

// ─── Análisis de concentración inline ───
function ConcentracionInline({ clientes }) {
  const analisis = useMemo(() => {
    if (!clientes.length) return null
    const sorted = [...clientes].sort((a, b) => b.ingresos - a.ingresos)
    const total = sorted.reduce((s, c) => s + c.ingresos, 0)
    const mayor = sorted[0]
    const top3 = sorted.slice(0, 3)
    const top3Pct = top3.reduce((s, c) => s + (c.ingresos / total) * 100, 0)
    const mayorPct = (mayor.ingresos / total) * 100
    const riesgo = mayorPct >= 30 || top3Pct >= 60 ? 'extremo' : mayorPct >= 20 || top3Pct >= 50 ? 'alto' : 'moderado'
    return { mayor, mayorPct, top3Pct, riesgo, lista: sorted.slice(0, 6) }
  }, [clientes])

  if (!analisis) return null
  const { mayor, mayorPct, top3Pct, riesgo, lista } = analisis
  const esRiesgo = riesgo === 'extremo' || riesgo === 'alto'

  return (
    <div className={`p-3 rounded-lg border-l-4 ${esRiesgo ? 'bg-red-50 border-l-red-500' : 'bg-amber-50 border-l-amber-500'}`}>
      <div className="flex items-center gap-2 mb-2">
        <ExclamationTriangleIcon className={`w-4 h-4 ${esRiesgo ? 'text-red-600' : 'text-amber-600'}`} />
        <span className={`text-xs font-bold uppercase ${esRiesgo ? 'text-red-700' : 'text-amber-700'}`}>
          {esRiesgo ? 'Riesgo Concentración' : 'Atención'}
        </span>
        <span className="ml-auto text-[10px] text-[var(--text-muted)]">Top 3 = {top3Pct.toFixed(1)}%</span>
      </div>
      <p className="text-xs text-[var(--text-secondary)] mb-2">
        <strong>{mayor.nombre}</strong> representa el <strong>{mayorPct.toFixed(1)}%</strong> de ingresos
      </p>
      <div className="space-y-1">
        {lista.map((c, i) => {
          const realPct = (c.ingresos / clientes.reduce((s, x) => s + x.ingresos, 0)) * 100
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[10px] text-[var(--text-muted)] w-4">{i + 1}</span>
              <span className="text-xs flex-1 truncate">{c.nombre}</span>
              <div className="w-20 h-1.5 bg-white rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${realPct >= 20 ? 'bg-red-400' : realPct >= 10 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                  style={{ width: `${Math.min(realPct, 100)}%` }} />
              </div>
              <span className={`text-xs font-medium w-10 text-right ${realPct >= 20 ? 'text-red-600' : ''}`}>{realPct.toFixed(1)}%</span>
            </div>
          )
        })}
      </div>
      <Link to="/ventas" className="text-[10px] text-[var(--accent-blue)] hover:underline mt-2 inline-block">
        Ver análisis completo →
      </Link>
    </div>
  )
}

export default function Dashboard() {
  const { data: dashboardData, isLoading } = useDashboard()
  const { data: insightsData } = useInsights('dashboard')
  const { data: wcData, isLoading: isLoadingWC } = useWorkingCapital()
  const [animated, setAnimated] = useState(false)
  const [animatedValues, setAnimatedValues] = useState({})

  const tesoreria = dashboardData?.data?.tesoreria || {}
  const cxc = dashboardData?.data?.cxc || {}
  const cxp = dashboardData?.data?.cxp || {}
  const operacion = dashboardData?.data?.operacion || {}
  const alertas = dashboardData?.data?.alertas || []
  const insights = insightsData?.insights || []

  const workingCapital = (cxc.total || 0) - (cxp.total || 0)
  const ccc = wcData?.data?.metricas_principales?.c2c || {}
  const cccValor = ccc.valor || 0
  const cccBenchmark = ccc.benchmark || 33

  const totalVentasMes = ventasPorCategoria.reduce((s, l) => s + l.ventas, 0)
  const totalPresupuesto = ventasPorCategoria.reduce((s, l) => s + l.presupuesto, 0)
  const cumplimientoVentas = Math.round((totalVentasMes / totalPresupuesto) * 100)
  const margenPromedio = Math.round(ventasPorCategoria.reduce((s, l) => s + l.margen * l.ventas, 0) / totalVentasMes)
  const totalTransacciones = ventasPorCategoria.reduce((s, l) => s + l.transacciones, 0)
  const ticketPromedio = Math.round(totalVentasMes / totalTransacciones)
  const totalCxC = cxc.total || 2535000
  const totalCxP = cxp.total || 1850000
  const totalVencido = cxcAging.slice(1).reduce((s, a) => s + a.monto, 0)
  const pctVencido = Math.round((totalVencido / totalCxC) * 100)

  // Alertas de inventario
  const stockBajo = inventarioPorCategoria.filter(i => i.stock <= i.minimo * 1.2)
  const valorInventarioTotal = inventarioPorCategoria.reduce((s, i) => s + i.valor, 0)
  const rotacionPromedio = (inventarioPorCategoria.reduce((s, i) => s + i.rotacion, 0) / inventarioPorCategoria.length).toFixed(1)

  const alertasRetail = alertas.length > 0
    ? alertas.slice(0, 5).map(a => ({
        tipo: a.nivel === 'critico' ? 'critico' : a.nivel === 'warning' ? 'warning' : 'info',
        mensaje: a.mensaje || a.titulo || 'Alerta',
      }))
    : [
        { tipo: 'critico', mensaje: `Stock bajo: ${stockBajo.length} categorías requieren reabastecimiento` },
        { tipo: 'warning', mensaje: 'Cartera 60+ días creció 15% (Q85K)' },
        { tipo: 'info', mensaje: 'Ventas Julio superan presupuesto en 7.2%' },
        { tipo: 'info', mensaje: `Ticket promedio: Q${ticketPromedio} (+5% vs mes anterior)` },
      ]

  useEffect(() => { setTimeout(() => setAnimated(true), 100) }, [])

  useEffect(() => {
    const ventasValue = operacion.ventas_mes || operacion.avg_ingresos_mes || totalVentasMes || 0
    if (ventasValue) {
      const duration = 800, steps = 16, increment = ventasValue / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= ventasValue) { current = ventasValue; clearInterval(timer) }
        setAnimatedValues(prev => ({ ...prev, ventas: Math.floor(current) }))
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [operacion.ventas_mes, operacion.avg_ingresos_mes])

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null
    return (
      <div className="bg-white p-2.5 rounded-lg shadow-lg border border-[var(--border-default)]">
        <p className="text-[11px] font-medium text-[var(--text-muted)] mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} className="text-xs font-semibold" style={{ color: p.color }}>
            {p.name}: {formatGTQ(p.value)}
          </p>
        ))}
      </div>
    )
  }

  const CustomTooltipUnits = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null
    return (
      <div className="bg-white p-2.5 rounded-lg shadow-lg border border-[var(--border-default)]">
        <p className="text-[11px] font-medium text-[var(--text-muted)] mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} className="text-xs font-semibold" style={{ color: p.color }}>
            {p.name}: {p.value?.toLocaleString('es-GT')} und
          </p>
        ))}
      </div>
    )
  }

  const getAlertaIcon = (tipo) => {
    if (tipo === 'critico') return <ExclamationTriangleIcon className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
    if (tipo === 'warning') return <ClockIcon className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
    return <CheckCircleIcon className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
  }

  return (
    <div className="space-y-5">
      {/* ═══ HEADER ═══ */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard Ejecutivo</h1>
          <p className="text-sm text-[var(--text-muted)] mt-0.5">Vista general del negocio retail · Julio 2026</p>
        </div>
        <div className="flex items-center gap-2">
          {alertasRetail.filter(a => a.tipo === 'critico').length > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 border border-red-100">
              <FireIcon className="w-3.5 h-3.5 text-red-600" />
              <span className="text-xs font-semibold text-red-700">{alertasRetail.filter(a => a.tipo === 'critico').length} crítico</span>
            </div>
          )}
          <Link to="/log-actividades" className="btn-secondary text-xs py-1.5 px-3">
            <CpuChipIcon className="w-3.5 h-3.5" /> Agentes
          </Link>
        </div>
      </div>

      {/* ═══ KPIs ROW ═══ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="kpi-card card-hover p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">Ventas del Mes</span>
            <div className="w-8 h-8 rounded-lg bg-[#001639]/5 flex items-center justify-center">
              <TrendIcon className="w-4 h-4 text-[#001639]" />
            </div>
          </div>
          <div className="text-xl font-bold tracking-tight">
            {isLoading ? '---' : formatGTQ(animatedValues.ventas || operacion.ventas_mes || operacion.avg_ingresos_mes || totalVentasMes)}
          </div>
          <div className="flex items-center gap-1.5 mt-1.5">
            {cumplimientoVentas >= 100
              ? <ArrowTrendingUpIcon className="w-3.5 h-3.5 text-emerald-500" />
              : <ArrowTrendingDownIcon className="w-3.5 h-3.5 text-amber-500" />}
            <span className={`text-xs font-semibold ${cumplimientoVentas >= 100 ? 'text-emerald-600' : 'text-amber-600'}`}>
              {cumplimientoVentas}% meta
            </span>
            <span className="text-[10px] text-[var(--text-muted)] ml-1">· Q{cumplimientoVentas >= 100 ? '+' : ''}{formatGTQ(Math.abs(totalVentasMes - totalPresupuesto)).replace('Q ', '')} vs presup.</span>
          </div>
        </div>

        <div className="kpi-card card-hover p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">Ticket Promedio</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
              <TagIcon className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          <div className="text-xl font-bold tracking-tight">Q {ticketPromedio.toLocaleString('es-GT')}</div>
          <div className="flex items-center gap-1.5 mt-1.5">
            <ArrowTrendingUpIcon className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-xs font-semibold text-emerald-600">+5.2%</span>
            <span className="text-[10px] text-[var(--text-muted)] ml-1">vs mes ant.</span>
          </div>
        </div>

        <div className="kpi-card card-hover p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">Transacciones</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <ShoppingCartIcon className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <div className="text-xl font-bold tracking-tight">{totalTransacciones.toLocaleString('es-GT')}</div>
          <div className="flex items-center gap-1.5 mt-1.5">
            <ArrowTrendingUpIcon className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-xs font-semibold text-emerald-600">+8.4%</span>
            <span className="text-[10px] text-[var(--text-muted)] ml-1">vs mes ant.</span>
          </div>
        </div>

        <div className="kpi-card card-hover p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">Margen Bruto</span>
            <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
              <ChartBarIcon className="w-4 h-4 text-violet-600" />
            </div>
          </div>
          <div className="text-xl font-bold tracking-tight">{margenPromedio}%</div>
          <div className="flex items-center gap-1.5 mt-1.5">
            <ArrowTrendingUpIcon className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-xs font-semibold text-emerald-600">+1.2pp</span>
            <span className="text-[10px] text-[var(--text-muted)] ml-1">vs mes ant.</span>
          </div>
        </div>
      </div>

      {/* ═══ INSIGHTS DE IA ═══ */}
      <PageInsights context="dashboard" maxInsights={4} title="Insights Inteligentes" />

      {/* ═══ ALERTAS ═══ */}
      {alertasRetail.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {alertasRetail.map((a, i) => (
            <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg border-l-4 text-xs ${
              a.tipo === 'critico' ? 'bg-red-50 border-l-red-500 text-red-800' :
              a.tipo === 'warning' ? 'bg-amber-50 border-l-amber-500 text-amber-800' :
              'bg-blue-50 border-l-blue-500 text-blue-800'
            }`}>
              {getAlertaIcon(a.tipo)}
              <span className="font-medium">{a.mensaje}</span>
            </div>
          ))}
        </div>
      )}

      {/* ═══ SECCIÓN 1: TENDENCIA VENTAS (ANCHO COMPLETO) ═══ */}
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between p-5 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#001639]/5 flex items-center justify-center">
              <ChartBarIcon className="w-4 h-4 text-[#001639]" />
            </div>
            <div>
              <h2 className="font-semibold text-sm">Tendencia de Ventas</h2>
              <p className="text-[11px] text-[var(--text-muted)]">Ventas vs Presupuesto · 7 meses YTD</p>
            </div>
          </div>
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">+7.2% YTD</span>
        </div>
        <div className="px-5 pb-5">
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={tendenciaVentas} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#001639" stopOpacity={0.12}/>
                    <stop offset="95%" stopColor="#001639" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(v) => `Q${(v/1000000).toFixed(1)}M`} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
                <Area type="monotone" dataKey="ventas" name="Ventas" stroke="#001639" strokeWidth={2.5} fill="url(#colorVentas)" />
                <Area type="monotone" dataKey="presupuesto" name="Presupuesto" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="6 4" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-[var(--border-default)]">
            <div>
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Acumulado YTD</p>
              <p className="text-base font-bold mt-0.5">Q30.1M</p>
            </div>
            <div>
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">vs Presupuesto</p>
              <p className="text-base font-bold mt-0.5 text-emerald-600">+4.2%</p>
            </div>
            <div>
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Meses +Meta</p>
              <p className="text-base font-bold mt-0.5">5/7</p>
            </div>
            <div>
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Trans. Acum.</p>
              <p className="text-base font-bold mt-0.5">75.4K</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SECCIÓN 2: VENTAS POR CATEGORÍA + SUCURSALES (2 COLS) ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Ventas por Categoría */}
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between p-5 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                <ShoppingBagIcon className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <h2 className="font-semibold text-sm">Ventas por Categoría</h2>
                <p className="text-[11px] text-[var(--text-muted)]">Julio 2026</p>
              </div>
            </div>
            <Link to="/ventas" className="text-xs text-[var(--accent-blue)] hover:underline font-medium">Ver detalle →</Link>
          </div>
          <div className="px-5 pb-5">
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ventasPorCategoria} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="nombre" tick={{ fontSize: 11, fill: '#6b7280' }} interval={0} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(v) => `Q${(v/1000).toFixed(0)}K`} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="ventas" name="Ventas" fill="#001639" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="presupuesto" name="Meta" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-[var(--border-default)]">
              <div className="text-center">
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Margen Ponderado</p>
                <p className="text-sm font-bold text-emerald-600 mt-0.5">{margenPromedio}%</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Sobre Meta</p>
                <p className="text-sm font-bold mt-0.5">{ventasPorCategoria.filter(l => l.ventas >= l.presupuesto).length}/6</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Mejor Cat.</p>
                <p className="text-sm font-bold mt-0.5">Cuidado Pers. 42%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desempeño por Sucursal */}
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between p-5 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <BuildingStorefrontIcon className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h2 className="font-semibold text-sm">Desempeño por Sucursal</h2>
                <p className="text-[11px] text-[var(--text-muted)]">Julio 2026</p>
              </div>
            </div>
            <Link to="/ventas" className="text-xs text-[var(--accent-blue)] hover:underline font-medium">Ver detalle →</Link>
          </div>
          <div className="px-5 pb-5">
            <div className="space-y-3 mb-4">
              {sucursales.map((s, i) => {
                const cumplimiento = Math.round((s.ventas / s.meta) * 100)
                return (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
                    <div className="w-9 h-9 rounded-full bg-[#001639] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      {s.nombre.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold truncate">{s.nombre}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          cumplimiento >= 100 ? 'bg-emerald-100 text-emerald-700' :
                          cumplimiento >= 90 ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>{cumplimiento}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden mt-1">
                        <div className="h-full rounded-full transition-all duration-1000" style={{
                          width: animated ? `${Math.min(100, cumplimiento)}%` : '0%',
                          backgroundColor: cumplimiento >= 100 ? '#10b981' : cumplimiento >= 90 ? '#f59e0b' : '#ef4444'
                        }} />
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[10px] text-[var(--text-muted)]">{s.transacciones.toLocaleString('es-GT')} trans. · Ticket Q{s.ticket}</span>
                        <span className="text-[10px] font-mono font-medium">{formatGTQ(s.ventas)}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sucursales} layout="vertical" margin={{ top: 0, right: 10, left: 100, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 10, fill: '#6b7280' }} tickFormatter={(v) => `Q${(v/1000).toFixed(0)}K`} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="nombre" tick={{ fontSize: 11, fill: '#374151' }} width={95} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="ventas" name="Ventas" fill="#001639" radius={[0, 4, 4, 0]} barSize={14} />
                  <Bar dataKey="meta" name="Meta" fill="#cbd5e1" radius={[0, 4, 4, 0]} barSize={14} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SECCIÓN 3: RIESGO + CxC + ALERTAS INVENTARIO (3 COLS) ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Concentración */}
        <ConcentracionInline clientes={demoClientesConcentracion} />

        {/* CxC Aging */}
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between p-5 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                <UsersIcon className="w-4 h-4 text-amber-600" />
              </div>
              <h2 className="font-semibold text-sm">CxC Aging</h2>
            </div>
            <Link to="/tesoreria/cuentas-por-cobrar" className="text-xs text-[var(--accent-blue)] font-medium hover:underline">Ver →</Link>
          </div>
          <div className="px-5 pb-5">
            <div className="flex items-center gap-5">
              <div className="w-28 h-28 flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={cxcAging} cx="50%" cy="50%" innerRadius={28} outerRadius={44} paddingAngle={3} dataKey="monto">
                      {cxcAging.map((e, i) => <Cell key={i} fill={e.color} strokeWidth={0} />)}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-2">
                {cxcAging.map((a, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: a.color }} />
                      <span className="text-[var(--text-secondary)]">{a.rango}</span>
                    </div>
                    <span className="font-mono font-semibold">{formatGTQ(a.monto)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 p-3 bg-[var(--bg-secondary)] rounded-lg flex items-center justify-between">
              <div>
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Total CxC</p>
                <p className="text-sm font-bold font-mono mt-0.5">{formatGTQ(totalCxC)}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Vencido</p>
                <p className={`text-sm font-bold font-mono mt-0.5 ${pctVencido > 20 ? 'text-red-500' : 'text-emerald-500'}`}>{pctVencido}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alertas de Inventario */}
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between p-5 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                <CubeIcon className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <h2 className="font-semibold text-sm">Alertas de Inventario</h2>
                <p className="text-[11px] text-[var(--text-muted)]">{stockBajo.length} categorías con stock bajo</p>
              </div>
            </div>
            <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stockBajo.length > 0 ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
              {stockBajo.length > 0 ? `${stockBajo.length} alertas` : 'OK'}
            </span>
          </div>
          <div className="px-5 pb-4 space-y-2">
            {inventarioPorCategoria.map((item, i) => {
              const esBajo = item.stock <= item.minimo * 1.2
              const pctStock = Math.round((item.stock / item.minimo) * 100)
              return (
                <div key={i} className={`flex items-center justify-between p-2.5 rounded-lg ${esBajo ? 'bg-red-50 border border-red-100' : 'bg-[var(--bg-secondary)]'}`}>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium">{item.categoria}</span>
                      {esBajo && <ExclamationTriangleIcon className="w-3 h-3 text-red-500" />}
                    </div>
                    <div className="w-full h-1 bg-white rounded-full overflow-hidden mt-1.5">
                      <div className={`h-full rounded-full ${esBajo ? 'bg-red-400' : 'bg-emerald-400'}`}
                        style={{ width: `${Math.min(100, pctStock)}%` }} />
                    </div>
                  </div>
                  <div className="text-right ml-3 flex-shrink-0">
                    <span className="text-[10px] text-[var(--text-muted)]">{item.stock} und</span>
                    <p className="text-[10px] font-mono font-medium">Rot: {item.rotacion}x</p>
                  </div>
                </div>
              )
            })}
            <div className="p-2.5 bg-[var(--bg-secondary)] rounded-lg flex items-center justify-between mt-1">
              <div>
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Valor Total</p>
                <p className="text-sm font-bold font-mono">{formatGTQ(valorInventarioTotal)}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Rot. Promedio</p>
                <p className="text-sm font-bold font-mono">{rotacionPromedio}x</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SECCIÓN 4: ESTADO DE INVENTARIO + SAT (2 COLS) ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Estado de Inventario */}
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between p-5 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                <ArchiveBoxIcon className="w-4 h-4 text-violet-600" />
              </div>
              <div>
                <h2 className="font-semibold text-sm">Estado de Inventario</h2>
                <p className="text-[11px] text-[var(--text-muted)]">Stock por categoría · Rotación</p>
              </div>
            </div>
            <span className="text-[11px] text-[var(--text-muted)] font-medium">{inventarioPorCategoria.length} categorías</span>
          </div>
          <div className="px-5 pb-5">
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={inventarioPorCategoria} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="categoria" tick={{ fontSize: 10, fill: '#6b7280' }} interval={0} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="left" tick={{ fontSize: 10, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltipUnits />} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar yAxisId="left" dataKey="stock" name="Stock Actual" fill="#001639" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="left" dataKey="minimo" name="Stock Mínimo" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {topProductos.slice(0, 3).map((p, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 bg-[var(--bg-secondary)] rounded-lg">
                  <div className="w-7 h-7 rounded-full bg-[#001639] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">{p.nombre}</p>
                    <p className="text-[10px] text-[var(--text-muted)]">{p.categoria} · Margen {p.margen}%</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs font-mono font-semibold">{formatGTQ(p.ventas)}</p>
                    <p className="text-[10px] text-[var(--text-muted)]">{p.unidades.toLocaleString('es-GT')} und</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/compras" className="flex items-center justify-center gap-1 w-full py-2.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-t border-[var(--border-default)] hover:bg-[var(--bg-secondary)] transition-colors mt-3">
              Ver gestión de compras <ChevronRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* CxP Próximas + SAT */}
        <div className="space-y-5">
          {/* CxP Próximas */}
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between p-5 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <TruckIcon className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-sm">CxP Próximas</h2>
                  <p className="text-[11px] text-[var(--text-muted)]">{cxpProximas.length} pagos en 10 días</p>
                </div>
              </div>
            </div>
            <div className="px-5 pb-3 space-y-2">
              {cxpProximas.map((p, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 bg-[var(--bg-secondary)] rounded-lg">
                  <div className="min-w-0">
                    <p className="text-xs font-medium truncate">{p.proveedor}</p>
                    <p className="text-[10px] text-[var(--text-muted)]">{p.tipo} · <span className={p.vence === '2 días' ? 'text-red-500 font-semibold' : ''}>{p.vence}</span></p>
                  </div>
                  <span className="font-mono font-semibold text-xs flex-shrink-0">{formatGTQ(p.monto)}</span>
                </div>
              ))}
              <div className="p-2.5 bg-[var(--bg-secondary)] rounded-lg flex items-center justify-between">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Total CxP</span>
                <span className="text-sm font-bold font-mono">{formatGTQ(totalCxP)}</span>
              </div>
            </div>
            <Link to="/tesoreria/cuentas-por-pagar" className="flex items-center justify-center gap-1 w-full py-2.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-t border-[var(--border-default)] hover:bg-[var(--bg-secondary)] transition-colors">
              Ver todas <ChevronRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* SAT Vencimientos */}
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between p-5 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <CalendarIcon className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-sm">SAT — Vencimientos</h2>
                  <p className="text-[11px] text-[var(--text-muted)]">Próximas obligaciones tributarias</p>
                </div>
              </div>
              <span className="badge-warning text-[10px]">2 urgentes</span>
            </div>
            <div className="px-5 pb-4 space-y-2">
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">HOY</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">1ra. Cuota ISR <span className="text-[10px] text-[var(--text-muted)]">SAT-2221</span></p>
                  </div>
                  <span className="font-mono text-sm font-bold text-red-600 flex-shrink-0">Q175K</span>
                </div>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">15d</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">IVA Julio <span className="text-[10px] text-[var(--text-muted)]">SAT-2231</span></p>
                  </div>
                  <span className="font-mono text-sm font-bold text-amber-600 flex-shrink-0">Q185K</span>
                </div>
              </div>
              <Link to="/sat" className="flex items-center justify-center gap-1 w-full py-2 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-t border-[var(--border-default)] hover:bg-[var(--bg-secondary)] transition-colors">
                Ver calendario completo <ChevronRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SECCIÓN 5: TOP PRODUCTOS + RUNWAY + abaco ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Top Productos */}
        <div className="card overflow-hidden lg:col-span-1">
          <div className="flex items-center justify-between p-5 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                <ShoppingBagIcon className="w-4 h-4 text-emerald-600" />
              </div>
              <h2 className="font-semibold text-sm">Top Productos</h2>
            </div>
            <span className="text-[11px] text-[var(--text-muted)] font-medium">Julio</span>
          </div>
          <div className="px-5 pb-5 space-y-2">
            {topProductos.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
                <div className="w-7 h-7 rounded-full bg-[#001639] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold truncate">{p.nombre}</p>
                  <p className="text-[10px] text-[var(--text-muted)]">{p.categoria}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs font-mono font-semibold">{formatGTQ(p.ventas)}</p>
                  <p className="text-[10px] text-[var(--text-muted)]">{p.unidades.toLocaleString('es-GT')} und · {p.margen}% mg</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Runway */}
        <div className="lg:col-span-2">
          <RunwayCalculator
            saldoActual={tesoreria.total_gtq || 0}
            promedioIngresosMensual={operacion.avg_ingresos_mes || 0}
            promedioGastosMensual={operacion.avg_gastos_mes || 0}
            proyeccionMeses={12}
          />
        </div>
      </div>

      {/* ═══ SECCIÓN 6: abaco AI + Métricas Rápidas ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-1">
          <div className="card bg-[#001639] text-white overflow-hidden">
            <div className="p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <SparklesIcon className="w-5 h-5" />
                <div>
                  <h2 className="font-semibold text-sm">abaco Assistant</h2>
                  <p className="text-[11px] opacity-70">4 agentes activos</p>
                </div>
              </div>
              <p className="text-xs opacity-80 mb-3">Análisis automatizado de inventario, ventas y finanzas en tiempo real.</p>
              <Link to="/log-actividades" className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-white text-[#001639] text-xs font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                Ver Agentes <ChevronRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-xl border border-[var(--border-default)] card-hover">
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Efectivo</p>
            <p className="text-lg font-bold mt-1">{isLoading ? '---' : formatGTQ(tesoreria.total_gtq || 1250000)}</p>
            <p className="text-[10px] text-[var(--text-muted)] mt-0.5">Disponible bancos</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[var(--border-default)] card-hover">
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">CCC</p>
            <p className="text-lg font-bold mt-1">{isLoading || isLoadingWC ? '---' : `${cccValor}d`}</p>
            <p className={`text-[10px] mt-0.5 ${cccValor > cccBenchmark * 1.5 ? 'text-red-500' : cccValor > cccBenchmark ? 'text-amber-500' : 'text-emerald-500'}`}>
              {cccValor > cccBenchmark * 1.5 ? 'Crítico' : cccValor > cccBenchmark ? 'Atención' : 'Óptimo'} vs {cccBenchmark}d
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[var(--border-default)] card-hover">
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Working Capital</p>
            <p className={`text-lg font-bold mt-1 ${workingCapital < 0 ? 'text-red-500' : ''}`}>{isLoading ? '---' : formatGTQ(workingCapital)}</p>
            <p className="text-[10px] text-[var(--text-muted)] mt-0.5">CxC − CxP</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[var(--border-default)] card-hover">
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">Agentes</p>
            <p className="text-lg font-bold mt-1">4 <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block ml-1"></span></p>
            <p className="text-[10px] text-[var(--text-muted)] mt-0.5">{insights.length} insights hoy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
