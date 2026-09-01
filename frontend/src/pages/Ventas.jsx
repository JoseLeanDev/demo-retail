import { useState, useEffect } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, Legend, LineChart, Line
} from 'recharts'
import {
  ShoppingBagIcon,
  UsersIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  StarIcon,
  ChevronRightIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  ReceiptPercentIcon,
  GlobeAltIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import PageInsights from '../components/agents/PageInsights'

const formatGTQ = (value) => {
  if (!value && value !== 0) return 'Q 0'
  return 'Q ' + value.toLocaleString('es-GT')
}

// ========== DATOS DEMO: VENTAS MENSUALES ==========
const ventasMensuales = [
  { mes: 'Ene', ventas: 4200000, meta: 4000000, costos: 2940000 },
  { mes: 'Feb', ventas: 3850000, meta: 4000000, costos: 2733500 },
  { mes: 'Mar', ventas: 4500000, meta: 4200000, costos: 3150000 },
  { mes: 'Abr', ventas: 5100000, meta: 4500000, costos: 3570000 },
  { mes: 'May', ventas: 4800000, meta: 4600000, costos: 3360000 },
  { mes: 'Jun', ventas: 5200000, meta: 4800000, costos: 3536000 },
  { mes: 'Jul', ventas: 5358000, meta: 5000000, costos: 3643000 },
]

// ========== DATOS DEMO: MARCAS ==========
const ventasPorMarca = [
  { id: 1, nombre: 'Nike', ventas: 1850000, meta: 1700000, margen: 42, unidades: 6200, tendencia: 'up' },
  { id: 2, nombre: 'Adidas', ventas: 1420000, meta: 1500000, margen: 38, unidades: 5100, tendencia: 'down' },
  { id: 3, nombre: 'Under Armour', ventas: 980000, meta: 900000, margen: 45, unidades: 3200, tendencia: 'up' },
  { id: 4, nombre: 'Puma', ventas: 720000, meta: 750000, margen: 35, unidades: 2800, tendencia: 'stable' },
  { id: 5, nombre: 'Reebok', ventas: 450000, meta: 400000, margen: 40, unidades: 1800, tendencia: 'up' },
  { id: 6, nombre: 'New Balance', ventas: 380000, meta: 350000, margen: 44, unidades: 1200, tendencia: 'up' },
  { id: 7, nombre: 'Lululemon', ventas: 290000, meta: 300000, margen: 48, unidades: 950, tendencia: 'down' },
  { id: 8, nombre: 'Champion', ventas: 195000, meta: 200000, margen: 36, unidades: 1300, tendencia: 'stable' },
]

// ========== DATOS DEMO: TIENDAS ==========
const ventasPorTienda = [
  { id: 1, nombre: 'Oakland Mall', ubicacion: 'Zona 10, Guatemala', ventas: 980000, meta: 900000, clientes: 1200, ticket: 817, tendencia: 'up' },
  { id: 2, nombre: 'Miraflores', ubicacion: 'Zona 11, Guatemala', ventas: 850000, meta: 800000, clientes: 1050, ticket: 810, tendencia: 'up' },
  { id: 3, nombre: 'Plaza Cayalá', ubicacion: 'Zona 16, Guatemala', ventas: 720000, meta: 750000, clientes: 980, ticket: 735, tendencia: 'down' },
  { id: 4, nombre: 'Paseo Las Américas', ubicacion: 'Zona 14, Guatemala', ventas: 650000, meta: 600000, clientes: 890, ticket: 730, tendencia: 'up' },
  { id: 5, nombre: 'Pradera Concepción', ubicacion: 'Zona 16, Guatemala', ventas: 580000, meta: 550000, clientes: 780, ticket: 744, tendencia: 'up' },
  { id: 6, nombre: 'Arkadia Shopping', ubicacion: 'Zona 16, Guatemala', ventas: 520000, meta: 500000, clientes: 710, ticket: 732, tendencia: 'stable' },
  { id: 7, nombre: 'Naranjo Mall', ubicacion: 'Zona 4, Guatemala', ventas: 480000, meta: 450000, clientes: 650, ticket: 738, tendencia: 'up' },
  { id: 8, nombre: 'Centro Comercial Metro', ubicacion: 'Zona 7, Guatemala', ventas: 420000, meta: 400000, clientes: 580, ticket: 724, tendencia: 'stable' },
  { id: 9, nombre: 'Parque Las Ruinas', ubicacion: 'Antigua Guatemala', ventas: 380000, meta: 350000, clientes: 520, ticket: 731, tendencia: 'up' },
  { id: 10, nombre: 'Portales', ubicacion: 'Zona 1, Guatemala', ventas: 320000, meta: 300000, clientes: 450, ticket: 711, tendencia: 'up' },
]

// ========== DATOS DEMO: PAÍSES ==========
const ventasPorPais = [
  { id: 1, nombre: 'Guatemala', region: 'Centroamérica', ventas: 5358000, meta: 5000000, tiendas: 10, crecimiento: 8.5, tendencia: 'up' },
  { id: 2, nombre: 'El Salvador', region: 'Centroamérica', ventas: 1850000, meta: 1700000, tiendas: 3, crecimiento: 12.3, tendencia: 'up' },
  { id: 3, nombre: 'Honduras', region: 'Centroamérica', ventas: 1420000, meta: 1400000, tiendas: 2, crecimiento: 3.2, tendencia: 'stable' },
  { id: 4, nombre: 'Costa Rica', region: 'Centroamérica', ventas: 980000, meta: 1100000, tiendas: 2, crecimiento: -5.1, tendencia: 'down' },
  { id: 5, nombre: 'Panamá', region: 'Centroamérica', ventas: 720000, meta: 750000, tiendas: 1, crecimiento: 2.8, tendencia: 'stable' },
]

const COLORS_MARGEN = ['#10b981', '#f59e0b', '#f97316', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16']
const COLORS_MARCA = ['#001639', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#94a3b8']

// ========== COMPONENTES ==========

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white p-3 rounded-lg shadow-lg border border-[var(--border-default)]">
      <p className="text-xs font-medium text-[var(--text-muted)] mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="text-sm font-semibold" style={{ color: p.color }}>
          {p.name}: {p.value >= 1000000 ? formatGTQ(p.value) : p.value.toLocaleString('es-GT')}
        </p>
      ))}
    </div>
  )
}

export default function Ventas() {
  const [activeTab, setActiveTab] = useState('general')
  const [animated, setAnimated] = useState(false)

  useEffect(() => { setTimeout(() => setAnimated(true), 100) }, [])

  const totalVentasMes = ventasMensuales[ventasMensuales.length - 1].ventas
  const totalMetaMes = ventasMensuales[ventasMensuales.length - 1].meta
  const totalCostosMes = ventasMensuales[ventasMensuales.length - 1].costos
  const margenBruto = Math.round(((totalVentasMes - totalCostosMes) / totalVentasMes) * 100)
  const cumplimientoMes = Math.round((totalVentasMes / totalMetaMes) * 100)
  const ventasYTD = ventasMensuales.reduce((s, m) => s + m.ventas, 0)
  const metaYTD = ventasMensuales.reduce((s, m) => s + m.meta, 0)
  const cumplimientoYTD = Math.round((ventasYTD / metaYTD) * 100)
  const totalMarcasVentas = ventasPorMarca.reduce((s, m) => s + m.ventas, 0)
  const totalMarcasMeta = ventasPorMarca.reduce((s, m) => s + m.meta, 0)
  const cumplimientoMarcas = Math.round((totalMarcasVentas / totalMarcasMeta) * 100)

  const marcasChartData = ventasPorMarca.map(m => ({
    nombre: m.nombre,
    ventas: m.ventas,
    meta: m.meta,
  }))

  const tiendasChartData = ventasPorTienda.map(t => ({
    nombre: t.nombre.split(' ')[0],
    ventas: t.ventas,
    meta: t.meta,
  }))

  const paisesChartData = ventasPorPais.map(p => ({
    nombre: p.nombre,
    ventas: p.ventas,
    meta: p.meta,
  }))

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#001639] flex items-center justify-center shadow-lg">
            <ShoppingBagIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Ventas</h1>
            <p className="text-sm text-[var(--text-muted)]">Retail Deportivo Centroamérica — Análisis completo de ventas por marca, país y tienda</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge-success text-[10px] flex items-center gap-1">
            <CalendarDaysIcon className="w-3 h-3" />
            Julio 2025
          </span>
        </div>
      </div>

      {/* TABS */}
      <div className="flex items-center gap-1 p-1 bg-[var(--bg-secondary)] rounded-lg w-fit">
        {[
          { id: 'general', label: 'General', icon: ChartBarIcon },
          { id: 'pais', label: 'Por País', icon: GlobeAltIcon },
          { id: 'marca', label: 'Por Marca', icon: StarIcon },
          { id: 'tienda', label: 'Por Tienda', icon: MapPinIcon },
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-[var(--text-primary)] shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* ========== TAB: GENERAL ========== */}
      {activeTab === 'general' && (
        <>
          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="kpi-card card-hover">
              <div className="flex items-center justify-between mb-2">
                <span className="kpi-label">Ventas Julio</span>
                <BanknotesIcon className="w-4 h-4 text-[var(--text-muted)]" />
              </div>
              <div className="kpi-value">{formatGTQ(totalVentasMes)}</div>
              <div className="flex items-center gap-1.5 mt-1">
                {cumplimientoMes >= 100 ? (
                  <ArrowTrendingUpIcon className="w-3.5 h-3.5 text-[var(--success)]" />
                ) : (
                  <ArrowTrendingDownIcon className="w-3.5 h-3.5 text-[var(--warning)]" />
                )}
                <span className={`text-xs font-medium ${cumplimientoMes >= 100 ? 'text-[var(--success)]' : 'text-[var(--warning)]'}`}>
                  {cumplimientoMes}% de meta
                </span>
              </div>
            </div>

            <div className="kpi-card card-hover">
              <div className="flex items-center justify-between mb-2">
                <span className="kpi-label">Margen Bruto</span>
                <ReceiptPercentIcon className="w-4 h-4 text-[var(--text-muted)]" />
              </div>
              <div className="kpi-value text-[var(--success)]">{margenBruto}%</div>
              <span className="text-xs text-[var(--text-muted)]">Q{formatGTQ(totalVentasMes - totalCostosMes).slice(2)} contribución</span>
            </div>

            <div className="kpi-card card-hover">
              <div className="flex items-center justify-between mb-2">
                <span className="kpi-label">Cumplimiento YTD</span>
                <CalendarDaysIcon className="w-4 h-4 text-[var(--text-muted)]" />
              </div>
              <div className={`kpi-value ${cumplimientoYTD >= 100 ? 'text-[var(--success)]' : 'text-[var(--warning)]'}`}>{cumplimientoYTD}%</div>
              <span className="text-xs text-[var(--text-muted)]">{formatGTQ(ventasYTD)} acumulado</span>
            </div>

            <div className="kpi-card card-hover">
              <div className="flex items-center justify-between mb-2">
                <span className="kpi-label">Ventas por Marca</span>
                <StarIcon className="w-4 h-4 text-[var(--text-muted)]" />
              </div>
              <div className="kpi-value">{formatGTQ(totalMarcasVentas)}</div>
              <span className="text-xs text-[var(--text-muted)]">{cumplimientoMarcas}% de meta</span>
            </div>
          </div>

          {/* Insights IA */}
          <PageInsights context="ventas" maxInsights={2} title="Insights de Ventas" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* TENDENCIA VENTAS */}
            <div className="lg:col-span-2 card">
              <div className="section-header">
                <ChartBarIcon className="w-5 h-5 text-[var(--accent-blue)]" />
                <h2 className="font-semibold">Tendencia de Ventas vs Meta</h2>
              </div>
              <div className="p-5 pt-2">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ventasMensuales} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#001639" stopOpacity={0.15}/>
                          <stop offset="95%" stopColor="#001639" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#6b7280' }} />
                      <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(v) => `Q${(v/1000000).toFixed(1)}M`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Area type="monotone" dataKey="ventas" name="Ventas" stroke="#001639" strokeWidth={2.5} fill="url(#colorVentas)" />
                      <Area type="monotone" dataKey="meta" name="Meta" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fill="none" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* VENTAS POR MARCA vs META */}
            <div className="card">
              <div className="section-header">
                <StarIcon className="w-5 h-5 text-[var(--text-muted)]" />
                <h2 className="font-semibold">Ventas por Marca vs Meta</h2>
              </div>
              <div className="p-5 space-y-3">
                {ventasPorMarca.map((m, i) => {
                  const cumpl = Math.round((m.ventas / m.meta) * 100)
                  return (
                    <div key={m.id} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: COLORS_MARCA[i % COLORS_MARCA.length] }}
                      >
                        {m.nombre[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{m.nombre}</p>
                        <div className="w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full mt-1">
                          <div className="h-full rounded-full" style={{ width: `${Math.min(100, cumpl)}%`, backgroundColor: COLORS_MARCA[i % COLORS_MARCA.length] }} />
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-semibold">{formatGTQ(m.ventas)}</span>
                        <p className="text-[10px] text-[var(--text-muted)]">{cumpl}% meta</p>
                      </div>
                    </div>
                  )
                })}
                <div className="pt-3 border-t border-[var(--border-default)]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Total Marcas</span>
                    <span className="text-lg font-bold font-mono">{formatGTQ(totalMarcasVentas)}</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-1">8 marcas activas · {cumplimientoMarcas}% cumplimiento</p>
                </div>
              </div>
            </div>
          </div>

          {/* VENTAS POR TIENDA RESUMEN */}
          <div className="card">
            <div className="section-header">
              <BuildingStorefrontIcon className="w-5 h-5 text-[var(--accent-blue)]" />
              <h2 className="font-semibold">Top Tiendas — Julio</h2>
              <button onClick={() => setActiveTab('tienda')} className="ml-auto text-xs text-[var(--accent-blue)] hover:underline flex items-center gap-1">
                Ver detalle <ChevronRightIcon className="w-3 h-3" />
              </button>
            </div>
            <div className="p-5">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={tiendasChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="nombre" tick={{ fontSize: 11, fill: '#6b7280' }} />
                    <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(v) => `Q${(v/1000).toFixed(0)}K`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar dataKey="ventas" name="Ventas Real" fill="#001639" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="meta" name="Meta" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ========== TAB: PAÍS ========== */}
      {activeTab === 'pais' && (
        <>
          {/* KPIs por país */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {ventasPorPais.map((p) => {
              const cumpl = Math.round((p.ventas / p.meta) * 100)
              return (
                <div key={p.id} className="kpi-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <span className="kpi-label">{p.nombre}</span>
                    <GlobeAltIcon className="w-4 h-4 text-[var(--text-muted)]" />
                  </div>
                  <div className="kpi-value text-sm">{formatGTQ(p.ventas)}</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    {p.tendencia === 'up' ? (
                      <ArrowTrendingUpIcon className="w-3 h-3 text-[var(--success)]" />
                    ) : p.tendencia === 'down' ? (
                      <ArrowTrendingDownIcon className="w-3 h-3 text-[var(--danger)]" />
                    ) : null}
                    <span className={`text-xs font-medium ${cumpl >= 100 ? 'text-[var(--success)]' : cumpl >= 90 ? 'text-[var(--warning)]' : 'text-[var(--danger)]'}`}>
                      {cumpl}% meta
                    </span>
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] mt-1">{p.tiendas} tiendas · {p.crecimiento > 0 ? '+' : ''}{p.crecimiento}% crec.</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CHART VENTAS POR PAÍS */}
            <div className="lg:col-span-2 card">
              <div className="section-header">
                <GlobeAltIcon className="w-5 h-5 text-[var(--accent-blue)]" />
                <h2 className="font-semibold">Ventas por País vs Meta</h2>
              </div>
              <div className="p-5 pt-2">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={paisesChartData} layout="vertical" margin={{ top: 10, right: 30, left: 80, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                      <XAxis type="number" tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(v) => `Q${(v/1000000).toFixed(1)}M`} />
                      <YAxis type="category" dataKey="nombre" tick={{ fontSize: 12, fill: '#374151' }} width={75} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Bar dataKey="ventas" name="Ventas" fill="#001639" radius={[0, 4, 4, 0]} />
                      <Bar dataKey="meta" name="Meta" fill="#cbd5e1" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* DISTRIBUCIÓN POR PAÍS */}
            <div className="card">
              <div className="section-header">
                <GlobeAltIcon className="w-5 h-5 text-[var(--text-muted)]" />
                <h2 className="font-semibold">Distribución por País</h2>
              </div>
              <div className="p-5">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={ventasPorPais} cx="50%" cy="50%" outerRadius={100} dataKey="ventas" nameKey="nombre"
                        label={({ nombre, percent }) => `${nombre}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={{ stroke: '#6b7280', strokeWidth: 0.5 }}
                      >
                        {ventasPorPais.map((entry, index) => (
                          <Cell key={index} fill={COLORS_MARGEN[index % COLORS_MARGEN.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* TABLA DETALLE POR PAÍS */}
          <div className="card">
            <div className="section-header">
              <GlobeAltIcon className="w-5 h-5 text-[var(--text-muted)]" />
              <h2 className="font-semibold">Detalle por País</h2>
            </div>
            <div className="table-container mx-5 mb-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>País</th>
                    <th>Región</th>
                    <th className="text-right">Ventas</th>
                    <th className="text-right">Meta</th>
                    <th className="text-center">Cumplimiento</th>
                    <th className="text-center">Tiendas</th>
                    <th className="text-center">Crecimiento</th>
                    <th className="text-center">Tendencia</th>
                  </tr>
                </thead>
                <tbody>
                  {ventasPorPais.map((p) => {
                    const cumpl = Math.round((p.ventas / p.meta) * 100)
                    return (
                      <tr key={p.id}>
                        <td>
                          <p className="font-medium text-sm">{p.nombre}</p>
                        </td>
                        <td><span className="badge-neutral text-[10px]">{p.region}</span></td>
                        <td className="text-right font-mono font-medium">{formatGTQ(p.ventas)}</td>
                        <td className="text-right font-mono text-sm text-[var(--text-muted)]">{formatGTQ(p.meta)}</td>
                        <td className="text-center">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            cumpl >= 100 ? 'bg-green-100 text-green-700' : cumpl >= 90 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                          }`}>{cumpl}%</span>
                        </td>
                        <td className="text-center font-mono text-sm">{p.tiendas}</td>
                        <td className="text-center">
                          <span className={`text-sm font-medium ${p.crecimiento >= 0 ? 'text-[var(--success)]' : 'text-[var(--danger)]'}`}>
                            {p.crecimiento > 0 ? '+' : ''}{p.crecimiento}%
                          </span>
                        </td>
                        <td className="text-center">
                          {p.tendencia === 'up' ? <ArrowTrendingUpIcon className="w-4 h-4 text-[var(--success)] mx-auto" /> :
                           p.tendencia === 'down' ? <ArrowTrendingDownIcon className="w-4 h-4 text-[var(--danger)] mx-auto" /> :
                           <span className="text-xs text-[var(--text-muted)]">→ Estable</span>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* ========== TAB: MARCA ========== */}
      {activeTab === 'marca' && (
        <>
          {/* KPIs por marca */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ventasPorMarca.slice(0, 4).map((m) => {
              const cumpl = Math.round((m.ventas / m.meta) * 100)
              return (
                <div key={m.id} className="kpi-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <span className="kpi-label">{m.nombre}</span>
                    <StarIcon className="w-4 h-4 text-[var(--text-muted)]" />
                  </div>
                  <div className="kpi-value text-sm">{formatGTQ(m.ventas)}</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    {m.tendencia === 'up' ? (
                      <ArrowTrendingUpIcon className="w-3 h-3 text-[var(--success)]" />
                    ) : m.tendencia === 'down' ? (
                      <ArrowTrendingDownIcon className="w-3 h-3 text-[var(--danger)]" />
                    ) : null}
                    <span className={`text-xs font-medium ${cumpl >= 100 ? 'text-[var(--success)]' : cumpl >= 90 ? 'text-[var(--warning)]' : 'text-[var(--danger)]'}`}>
                      {cumpl}% meta
                    </span>
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] mt-1">Margen {m.margen}% · {m.unidades.toLocaleString()} uds.</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CHART VENTAS POR MARCA */}
            <div className="lg:col-span-2 card">
              <div className="section-header">
                <StarIcon className="w-5 h-5 text-[var(--accent-blue)]" />
                <h2 className="font-semibold">Ventas por Marca vs Meta</h2>
              </div>
              <div className="p-5 pt-2">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={marcasChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="nombre" tick={{ fontSize: 11, fill: '#6b7280' }} />
                      <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(v) => `Q${(v/1000).toFixed(0)}K`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Bar dataKey="ventas" name="Ventas" fill="#001639" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="meta" name="Meta" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* MARGEN POR MARCA */}
            <div className="card">
              <div className="section-header">
                <ReceiptPercentIcon className="w-5 h-5 text-[var(--text-muted)]" />
                <h2 className="font-semibold">Margen por Marca</h2>
              </div>
              <div className="p-5">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={ventasPorMarca} cx="50%" cy="50%" outerRadius={100} dataKey="ventas" nameKey="nombre"
                        label={({ nombre, margen }) => `${nombre.split(' ')[0]}: ${margen}%`}
                        labelLine={{ stroke: '#6b7280', strokeWidth: 0.5 }}
                      >
                        {ventasPorMarca.map((entry, index) => (
                          <Cell key={index} fill={COLORS_MARCA[index % COLORS_MARCA.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* TABLA DETALLE POR MARCA */}
          <div className="card">
            <div className="section-header">
              <StarIcon className="w-5 h-5 text-[var(--text-muted)]" />
              <h2 className="font-semibold">Detalle por Marca</h2>
            </div>
            <div className="table-container mx-5 mb-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th className="text-right">Ventas</th>
                    <th className="text-right">Meta</th>
                    <th className="text-center">Cumplimiento</th>
                    <th className="text-right">Margen</th>
                    <th className="text-right">Unidades</th>
                    <th className="text-center">Tendencia</th>
                  </tr>
                </thead>
                <tbody>
                  {ventasPorMarca.map((m) => {
                    const cumpl = Math.round((m.ventas / m.meta) * 100)
                    return (
                      <tr key={m.id}>
                        <td>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white"
                              style={{ backgroundColor: COLORS_MARCA[(m.id - 1) % COLORS_MARCA.length] }}
                            >
                              {m.nombre[0]}
                            </div>
                            <p className="font-medium text-sm">{m.nombre}</p>
                          </div>
                        </td>
                        <td className="text-right font-mono font-medium">{formatGTQ(m.ventas)}</td>
                        <td className="text-right font-mono text-sm text-[var(--text-muted)]">{formatGTQ(m.meta)}</td>
                        <td className="text-center">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            cumpl >= 100 ? 'bg-green-100 text-green-700' : cumpl >= 90 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                          }`}>{cumpl}%</span>
                        </td>
                        <td className="text-right">
                          <span className={`font-mono text-sm font-medium ${m.margen >= 45 ? 'text-[var(--success)]' : m.margen >= 35 ? 'text-[var(--warning)]' : 'text-[var(--danger)]'}`}>
                            {m.margen}%
                          </span>
                        </td>
                        <td className="text-right font-mono text-sm">{m.unidades.toLocaleString()}</td>
                        <td className="text-center">
                          {m.tendencia === 'up' ? <ArrowTrendingUpIcon className="w-4 h-4 text-[var(--success)] mx-auto" /> :
                           m.tendencia === 'down' ? <ArrowTrendingDownIcon className="w-4 h-4 text-[var(--danger)] mx-auto" /> :
                           <span className="text-xs text-[var(--text-muted)]">→ Estable</span>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* ========== TAB: TIENDA ========== */}
      {activeTab === 'tienda' && (
        <>
          {/* KPIs por tienda top */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ventasPorTienda.slice(0, 4).map((t) => {
              const cumpl = Math.round((t.ventas / t.meta) * 100)
              return (
                <div key={t.id} className="kpi-card card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <span className="kpi-label text-[10px]">{t.nombre}</span>
                    <MapPinIcon className="w-4 h-4 text-[var(--text-muted)]" />
                  </div>
                  <div className="kpi-value text-sm">{formatGTQ(t.ventas)}</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    {t.tendencia === 'up' ? (
                      <ArrowTrendingUpIcon className="w-3 h-3 text-[var(--success)]" />
                    ) : t.tendencia === 'down' ? (
                      <ArrowTrendingDownIcon className="w-3 h-3 text-[var(--danger)]" />
                    ) : null}
                    <span className={`text-xs font-medium ${cumpl >= 100 ? 'text-[var(--success)]' : cumpl >= 90 ? 'text-[var(--warning)]' : 'text-[var(--danger)]'}`}>
                      {cumpl}% meta
                    </span>
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] mt-1">{t.clientes} clientes · Q{t.ticket} ticket</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CHART VENTAS POR TIENDA */}
            <div className="lg:col-span-2 card">
              <div className="section-header">
                <MapPinIcon className="w-5 h-5 text-[var(--accent-blue)]" />
                <h2 className="font-semibold">Ventas por Tienda vs Meta</h2>
              </div>
              <div className="p-5 pt-2">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={tiendasChartData} layout="vertical" margin={{ top: 10, right: 30, left: 80, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                      <XAxis type="number" tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(v) => `Q${(v/1000).toFixed(0)}K`} />
                      <YAxis type="category" dataKey="nombre" tick={{ fontSize: 11, fill: '#374151' }} width={75} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Bar dataKey="ventas" name="Ventas" fill="#001639" radius={[0, 4, 4, 0]} />
                      <Bar dataKey="meta" name="Meta" fill="#cbd5e1" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* TOP TIENDAS RANKING */}
            <div className="card">
              <div className="section-header">
                <BuildingStorefrontIcon className="w-5 h-5 text-[var(--text-muted)]" />
                <h2 className="font-semibold">Top Tiendas</h2>
              </div>
              <div className="p-5 space-y-3">
                {ventasPorTienda.map((t, i) => {
                  const cumpl = Math.round((t.ventas / t.meta) * 100)
                  return (
                    <div key={t.id} className="flex items-center gap-3">
                      <span className="w-5 text-xs text-[var(--text-muted)] text-right">{i + 1}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{t.nombre}</p>
                        <div className="w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full mt-0.5">
                          <div className="h-full bg-[#001639] rounded-full" style={{ width: `${Math.min(100, cumpl)}%` }} />
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-semibold">{formatGTQ(t.ventas)}</span>
                        <p className="text-[10px] text-[var(--text-muted)]">{cumpl}%</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* TABLA DETALLE POR TIENDA */}
          <div className="card">
            <div className="section-header">
              <MapPinIcon className="w-5 h-5 text-[var(--text-muted)]" />
              <h2 className="font-semibold">Detalle por Tienda</h2>
            </div>
            <div className="table-container mx-5 mb-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tienda</th>
                    <th>Ubicación</th>
                    <th className="text-right">Ventas</th>
                    <th className="text-right">Meta</th>
                    <th className="text-center">Cumplimiento</th>
                    <th className="text-right">Clientes</th>
                    <th className="text-right">Ticket Prom.</th>
                    <th className="text-center">Tendencia</th>
                  </tr>
                </thead>
                <tbody>
                  {ventasPorTienda.map((t) => {
                    const cumpl = Math.round((t.ventas / t.meta) * 100)
                    return (
                      <tr key={t.id}>
                        <td>
                          <p className="font-medium text-sm">{t.nombre}</p>
                        </td>
                        <td><span className="text-xs text-[var(--text-muted)]">{t.ubicacion}</span></td>
                        <td className="text-right font-mono font-medium">{formatGTQ(t.ventas)}</td>
                        <td className="text-right font-mono text-sm text-[var(--text-muted)]">{formatGTQ(t.meta)}</td>
                        <td className="text-center">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            cumpl >= 100 ? 'bg-green-100 text-green-700' : cumpl >= 90 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                          }`}>{cumpl}%</span>
                        </td>
                        <td className="text-right font-mono text-sm">{t.clientes.toLocaleString()}</td>
                        <td className="text-right font-mono text-sm">Q {t.ticket}</td>
                        <td className="text-center">
                          {t.tendencia === 'up' ? <ArrowTrendingUpIcon className="w-4 h-4 text-[var(--success)] mx-auto" /> :
                           t.tendencia === 'down' ? <ArrowTrendingDownIcon className="w-4 h-4 text-[var(--danger)] mx-auto" /> :
                           <span className="text-xs text-[var(--text-muted)]">→ Estable</span>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
