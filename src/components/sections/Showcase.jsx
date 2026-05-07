import { motion } from 'framer-motion'
import clsx from 'clsx'
import { staggerContainer, staggerItem } from '../ui/FadeIn'

function BrowserFrame({ url, tag, children, className }) {
  return (
    <div className={clsx('rounded-2xl overflow-hidden border border-white/[0.08] bg-[#131929]', className)}>
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0F1426]/70">
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" />
        <div className="ml-3 flex-1 bg-white/[0.05] rounded h-5 flex items-center px-3">
          <span className="text-[10px] text-white/25 truncate">{url}</span>
        </div>
        {tag && (
          <span className="ml-2 text-[9px] px-2 py-0.5 rounded-full bg-[#2A3582]/30 text-[#7b8fdb] font-medium flex-shrink-0">
            {tag}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}

/* Mockup 1: Stock System */
function StockMockup() {
  const rows = [
    { name: 'Notebook Dell XPS 15', sku: 'DL-4821', qty: 148, s: 'stock' },
    { name: 'Monitor LG 34"', sku: 'LG-3402', qty: 23, s: 'low' },
    { name: 'SSD Samsung 1TB', sku: 'SS-1024', qty: 302, s: 'stock' },
    { name: 'Webcam Logitech C920', sku: 'LG-C920', qty: 8, s: 'critical' },
  ]
  const sc = {
    stock: 'bg-emerald-500/15 text-emerald-400',
    low: 'bg-amber-500/15 text-amber-400',
    critical: 'bg-red-500/15 text-red-400',
  }
  const sl = { stock: 'En stock', low: 'Bajo stock', critical: 'Critico' }

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-white/70 text-sm font-semibold">Inventario</span>
        <button className="text-[10px] px-3 py-1.5 rounded-lg bg-[#EB6700] text-white font-medium">
          + Agregar
        </button>
      </div>
      <div className="bg-white/[0.03] rounded-lg h-7 flex items-center px-3">
        <span className="text-white/20 text-[11px]">Buscar producto...</span>
      </div>
      <div className="border border-white/[0.06] rounded-xl overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 px-3 py-2 bg-white/[0.03] border-b border-white/[0.06]">
          {['Producto', 'Qty', 'Estado'].map((h) => (
            <span key={h} className="text-[10px] text-white/30 font-medium">{h}</span>
          ))}
        </div>
        {rows.map((r) => (
          <div key={r.sku} className="grid grid-cols-[1fr_auto_auto] gap-x-4 px-3 py-2.5 border-b border-white/[0.04] last:border-0 items-center">
            <div>
              <div className="text-[11px] text-white/70 font-medium truncate">{r.name}</div>
              <div className="text-[9px] text-white/25">{r.sku}</div>
            </div>
            <span className="text-[11px] text-white/50 tabular-nums">{r.qty}</span>
            <span className={clsx('text-[9px] px-2 py-0.5 rounded-full font-medium', sc[r.s])}>
              {sl[r.s]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Mockup 2: Admin Dashboard */
function AdminMockup() {
  const bars = [45, 62, 51, 78, 66, 85, 71]
  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-white/70 text-sm font-semibold">Dashboard</span>
        <span className="text-white/30 text-[11px]">Mayo 2025</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Ingresos', v: '$2.4M' },
          { l: 'Pedidos', v: '843' },
          { l: 'Clientes', v: '1.2K' },
        ].map((s) => (
          <div key={s.l} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-2.5">
            <div className="text-white/35 text-[9px]">{s.l}</div>
            <div className="text-white font-semibold text-sm mt-0.5">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3">
        <span className="text-white/35 text-[10px]">Ventas por dia</span>
        <div className="flex items-end gap-1.5 h-14 mt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === bars.length - 1 ? '#EB6700' : 'rgba(42,53,130,0.55)',
                }}
              />
              <span className="text-white/20 text-[8px]">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { id: '#4821', co: 'Empresa SA', v: '$14.800', s: 'Enviado' },
          { id: '#4822', co: 'Grupo Norte', v: '$8.200', s: 'Proceso' },
        ].map((o) => (
          <div key={o.id} className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0">
            <div className="flex items-center gap-2">
              <span className="text-white/25 text-[10px] font-mono">{o.id}</span>
              <span className="text-white/60 text-[11px]">{o.co}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-[11px] font-medium">{o.v}</span>
              <span className={clsx('text-[9px] px-1.5 py-0.5 rounded-full',
                o.s === 'Enviado' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'
              )}>
                {o.s}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Mockup 3: Landing Page Preview */
function LandingMockup() {
  return (
    <div className="bg-[#F7F8FA]">
      {/* Mini navbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-[#E5E7EB]">
        <span className="text-[#0F1426] font-bold text-[11px]">empresa<span className="text-[#EB6700]">.</span></span>
        <div className="flex gap-3 text-[9px] text-[#9CA3AF]">
          <span>Servicios</span>
          <span>Nosotros</span>
          <span>Contacto</span>
        </div>
        <div className="bg-[#2A3582] text-white text-[9px] px-2.5 py-1 rounded-md">
          Comenzar
        </div>
      </div>

      {/* Hero area */}
      <div className="px-4 py-6 text-center bg-[#0F1426]">
        <div className="text-[9px] text-white/30 mb-2">Plataforma digital</div>
        <div className="text-white font-bold text-base leading-tight mb-2">
          Tu solucion<br />empresarial.
        </div>
        <p className="text-white/40 text-[10px] leading-relaxed mb-4 max-w-[180px] mx-auto">
          Optimiza tus procesos y escala tu operacion.
        </p>
        <div className="flex gap-2 justify-center">
          <div className="bg-[#EB6700] text-white text-[9px] px-3 py-1.5 rounded-md">Empezar gratis</div>
          <div className="border border-white/20 text-white/60 text-[9px] px-3 py-1.5 rounded-md">Ver mas</div>
        </div>
      </div>

      {/* Features row */}
      <div className="px-4 py-4 grid grid-cols-3 gap-2">
        {['Rapido', 'Seguro', 'Escalable'].map((f) => (
          <div key={f} className="bg-white border border-[#E5E7EB] rounded-lg p-2 text-center">
            <div className="w-4 h-4 rounded-md bg-[#2A3582]/10 mx-auto mb-1.5" />
            <div className="text-[#0F1426] font-medium text-[10px]">{f}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Mockup 4: Analytics */
function AnalyticsMockup() {
  const sources = [
    { name: 'Busqueda organica', pct: 38, color: '#2A3582' },
    { name: 'Directo', pct: 27, color: '#EB6700' },
    { name: 'Redes sociales', pct: 21, color: '#6B7280' },
    { name: 'Referidos', pct: 14, color: '#9CA3AF' },
  ]

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-white/70 text-sm font-semibold">Analytics</span>
        <span className="text-[10px] px-2.5 py-1 rounded-lg bg-white/[0.05] text-white/35 border border-white/[0.07]">
          Esta semana
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Visitas', v: '24,831', d: '+12%', up: true },
          { l: 'Conversion', v: '3.2%', d: '+0.4%', up: true },
          { l: 'Rebote', v: '42%', d: '-3%', up: false },
        ].map((m) => (
          <div key={m.l} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-2.5">
            <div className="text-white/35 text-[9px]">{m.l}</div>
            <div className="text-white font-semibold text-sm mt-0.5">{m.v}</div>
            <div className={clsx('text-[9px] mt-0.5', m.up ? 'text-emerald-400' : 'text-red-400')}>
              {m.d}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3">
        <span className="text-white/35 text-[10px] block mb-3">Fuentes de trafico</span>
        <div className="space-y-2">
          {sources.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-white/50">{s.name}</span>
                <span className="text-white/40 font-medium">{s.pct}%</span>
              </div>
              <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${s.pct}%`, backgroundColor: s.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const showcaseProjects = [
  {
    title: 'Sistema de stock',
    desc: 'Inventario en tiempo real con alertas y reportes automatizados.',
    url: 'stock.empresa.io/inventario',
    tag: 'Inventario',
    Component: StockMockup,
  },
  {
    title: 'Dashboard administrativo',
    desc: 'Backoffice completo con metricas, pedidos y gestion de clientes.',
    url: 'panel.empresa.io/dashboard',
    tag: 'Backoffice',
    Component: AdminMockup,
  },
  {
    title: 'Landing premium',
    desc: 'Sitio de alta conversion con diseno moderno y carga instantanea.',
    url: 'tuempresa.io',
    tag: 'Landing',
    Component: LandingMockup,
  },
  {
    title: 'Panel de analytics',
    desc: 'Visualizacion de datos accionable para decisiones mas rapidas.',
    url: 'analytics.empresa.io',
    tag: 'Analytics',
    Component: AnalyticsMockup,
  },
]

export default function Showcase() {
  return (
    <section className="bg-[#0F1426] py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] text-white/45 mb-5 tracking-wide">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EB6700]" />
            Lo que construimos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight max-w-lg">
            Proyectos que funcionan{' '}
            <span className="text-white/35">desde el primer dia.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {showcaseProjects.map(({ title, desc, url, tag, Component }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="group"
            >
              <BrowserFrame
                url={url}
                tag={tag}
                className="group-hover:border-white/[0.14] transition-colors duration-300 shadow-xl shadow-black/30"
              >
                <Component />
              </BrowserFrame>
              <div className="mt-4 px-1">
                <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
                <p className="text-white/40 text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
