import { motion } from 'framer-motion'
import { Timer, Paintbrush, TrendingUp, MessageSquare, SlidersHorizontal, Cpu } from 'lucide-react'
import { staggerContainer, staggerItem } from '../ui/FadeIn'

const stats = [
  { value: '72hs', label: 'Primer entregable' },
  { value: '100%', label: 'Codigo propio' },
  { value: '+50', label: 'Proyectos listos' },
  { value: '<30d', label: 'Version funcional' },
]

const features = [
  {
    icon: Timer,
    title: 'Velocidad real',
    desc: 'Primeros entregables en 72 horas. Iteramos rapido para que veas resultados sin esperar meses.',
  },
  {
    icon: Paintbrush,
    title: 'UI que impresiona',
    desc: 'Interfaces modernas, fluidas y pensadas para que tus usuarios disfruten usarlas.',
  },
  {
    icon: TrendingUp,
    title: 'Escala con vos',
    desc: 'Arquitecturas pensadas para crecer. Tu sistema soporta 10 o 10.000 usuarios.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicacion directa',
    desc: 'Sin intermediarios ni cuentas de cuenta. Hablas directamente con quien construye.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Hecho a tu medida',
    desc: 'Ningun template, ningun atajo. Cada linea de codigo pensada para tu negocio.',
  },
  {
    icon: Cpu,
    title: 'Stack moderno',
    desc: 'React, Node, cloud nativo. Tecnologia que tus proximos developers van a agradecer.',
  },
]

/* Minimal terminal decoration */
const terminalLines = [
  { type: 'comment', text: '# Deploy en produccion' },
  { type: 'cmd', text: '$ npm run build' },
  { type: 'out', text: '  ✓ 48 modules transformed' },
  { type: 'out', text: '  dist/index.html   0.42 kB' },
  { type: 'out', text: '  dist/assets/...   94.3 kB' },
  { type: 'success', text: '  Build complete in 1.2s' },
  { type: 'cmd', text: '$ vercel --prod' },
  { type: 'success', text: '  Production: https://app.tuempresa.io' },
]

export default function Differentials() {
  return (
    <section className="bg-[#F7F8FA] py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E7EB] rounded-2xl overflow-hidden mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
              }}
              className="bg-white px-8 py-10 text-center"
            >
              <div className="text-4xl font-bold text-[#0F1426] tracking-tight leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-[#9CA3AF] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: feature grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2A3582]/20 bg-[#2A3582]/5 text-[11px] text-[#2A3582] mb-5 tracking-wide font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2A3582]" />
                Por que Scrapbox
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1426] leading-tight tracking-tight">
                Velocidad, calidad y comunicacion directa.
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {features.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={staggerItem}
                  className="group p-5 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#2A3582]/25 hover:shadow-md hover:shadow-[#2A3582]/5 transition-all duration-300"
                >
                  <Icon
                    size={16}
                    className="text-[#2A3582] mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <h3 className="text-[#0F1426] font-semibold text-[14px] mb-1.5">{title}</h3>
                  <p className="text-[#9CA3AF] text-[13px] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: terminal decoration */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:sticky lg:top-24"
          >
            <div className="rounded-2xl overflow-hidden border border-[#1A2035] bg-[#0F1426] shadow-2xl">
              {/* Terminal chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-[#080C18]">
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.15]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.15]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.15]" />
                <span className="ml-3 text-[11px] text-white/25 font-mono">terminal</span>
              </div>
              <div className="p-6 font-mono text-[13px] space-y-1.5">
                {terminalLines.map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    {line.type === 'comment' && (
                      <span className="text-white/25">{line.text}</span>
                    )}
                    {line.type === 'cmd' && (
                      <span className="text-[#9CA3AF]">{line.text}</span>
                    )}
                    {line.type === 'out' && (
                      <span className="text-white/40">{line.text}</span>
                    )}
                    {line.type === 'success' && (
                      <span className="text-emerald-400">{line.text}</span>
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[#9CA3AF]">$ </span>
                  <span className="w-2 h-4 bg-white/60 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Small floating metric card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-4 flex gap-4"
            >
              {[
                { label: 'Performance', value: '99', unit: '/100', color: 'emerald' },
                { label: 'Accesibilidad', value: '98', unit: '/100', color: 'blue' },
                { label: 'SEO', value: '100', unit: '/100', color: 'orange' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex-1 bg-white border border-[#E5E7EB] rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-[#0F1426] leading-none">
                    {m.value}
                    <span className="text-xs font-normal text-[#9CA3AF]">{m.unit}</span>
                  </div>
                  <div className="text-[#9CA3AF] text-[11px] mt-1">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
