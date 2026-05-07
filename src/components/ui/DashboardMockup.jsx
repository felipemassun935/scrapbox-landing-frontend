import clsx from 'clsx'

const tableRows = [
  { name: 'Notebook Dell XPS 15', sku: 'DL-4821', stock: 148, status: 'stock' },
  { name: 'Monitor LG UltraWide 34"', sku: 'LG-3402', stock: 23, status: 'low' },
  { name: 'SSD Samsung 1TB', sku: 'SS-1024', stock: 302, status: 'stock' },
  { name: 'Webcam Logitech C920', sku: 'LG-C920', stock: 8, status: 'critical' },
  { name: 'iPad Pro 11" M4', sku: 'AP-0411', stock: 67, status: 'stock' },
]

const chartBars = [38, 52, 44, 68, 57, 74, 61, 80, 65, 88, 72, 96]

const navItems = ['Dashboard', 'Inventario', 'Pedidos', 'Clientes', 'Reportes', 'Config']

const statusConfig = {
  stock: { label: 'En stock', classes: 'bg-emerald-500/15 text-emerald-400' },
  low: { label: 'Bajo stock', classes: 'bg-amber-500/15 text-amber-400' },
  critical: { label: 'Critico', classes: 'bg-red-500/15 text-red-400' },
}

export default function DashboardMockup() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#131929] shadow-2xl shadow-black/50">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0F1426]/60">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]/70" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]/70" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]/70" />
        <div className="ml-3 flex-1 bg-white/[0.05] rounded-md h-5 flex items-center px-3">
          <span className="text-[10px] text-white/25 tracking-tight">app.scrapbox.io/inventario</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col w-44 border-r border-white/[0.06] bg-[#0F1426]/40 p-3 gap-0.5">
          <div className="px-3 py-2 mb-2">
            <span className="text-[10px] text-white/25 font-medium tracking-widest uppercase">Scrapbox</span>
          </div>
          {navItems.map((item, i) => (
            <div
              key={item}
              className={clsx(
                'text-xs px-3 py-2 rounded-lg transition-colors',
                i === 1
                  ? 'bg-[#2A3582]/30 text-[#7b8fdb] font-medium'
                  : 'text-white/35 hover:text-white/60',
              )}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 space-y-3 min-w-0">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Total productos', value: '2,847', delta: '+12' },
              { label: 'Pedidos hoy', value: '43', delta: '+7' },
              { label: 'Ingresos mes', value: '$128K', delta: '+8.4%' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3"
              >
                <div className="text-white/40 text-[10px] mb-1">{stat.label}</div>
                <div className="text-white font-semibold text-base leading-none">{stat.value}</div>
                <div className="text-emerald-400 text-[10px] mt-1">{stat.delta}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/50 text-[10px] font-medium">Movimiento mensual</span>
              <span className="text-white/25 text-[10px]">Ene — Dic</span>
            </div>
            <div className="flex items-end gap-1 h-16">
              {chartBars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm transition-opacity"
                  style={{
                    height: `${h}%`,
                    background:
                      i === chartBars.length - 1
                        ? '#EB6700'
                        : `rgba(42, 53, 130, ${0.35 + i * 0.05})`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="border border-white/[0.06] rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 px-3 py-2 bg-white/[0.02] border-b border-white/[0.06]">
              <span className="text-[10px] text-white/30 font-medium">Producto</span>
              <span className="text-[10px] text-white/30 font-medium">Stock</span>
              <span className="text-[10px] text-white/30 font-medium">Estado</span>
            </div>
            {tableRows.map((row) => {
              const { label, classes } = statusConfig[row.status]
              return (
                <div
                  key={row.sku}
                  className="grid grid-cols-[1fr_auto_auto] gap-x-4 px-3 py-2 border-b border-white/[0.04] last:border-b-0 items-center"
                >
                  <div>
                    <div className="text-[11px] text-white/75 font-medium truncate">{row.name}</div>
                    <div className="text-[9px] text-white/25">{row.sku}</div>
                  </div>
                  <span className="text-[11px] text-white/60 tabular-nums">{row.stock}</span>
                  <span className={clsx('text-[9px] px-2 py-0.5 rounded-full font-medium', classes)}>
                    {label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
