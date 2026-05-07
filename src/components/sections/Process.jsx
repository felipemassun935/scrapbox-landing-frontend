import { motion } from 'framer-motion'
import { MessageCircle, Layers, DollarSign, GitBranch, Rocket } from 'lucide-react'
import clsx from 'clsx'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Reunion inicial',
    desc: 'Escuchamos tu negocio y objetivos en 30 minutos. Sin compromisos.',
    highlight: false,
  },
  {
    number: '02',
    icon: Layers,
    title: 'Prototipo gratuito',
    desc: 'Disenamos el primer prototipo funcional. Sin costo.',
    highlight: true,
    badge: 'GRATIS',
  },
  {
    number: '03',
    icon: DollarSign,
    title: 'Presupuesto',
    desc: 'Cotizacion transparente, detallada y sin sorpresas ocultas.',
    highlight: false,
  },
  {
    number: '04',
    icon: GitBranch,
    title: 'Desarrollo iterativo',
    desc: 'Ciclos cortos con feedback constante. Vos ves el avance.',
    highlight: false,
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deploy y soporte',
    desc: 'Lanzamos y acompanamos con soporte continuo post-entrega.',
    highlight: false,
  },
]

export default function Process() {
  return (
    <section id="proceso" className="bg-[#0F1426] py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] text-white/45 mb-5 tracking-wide">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EB6700]" />
            Como trabajamos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight max-w-lg">
            De la idea al producto.{' '}
            <span className="text-white/40">Sin rodeos.</span>
          </h2>
        </motion.div>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-9 left-[72px] right-[72px] h-px bg-white/[0.08]" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-5 gap-4"
          >
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
                    },
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div
                    className={clsx(
                      'relative z-10 w-[72px] h-[72px] rounded-2xl border flex items-center justify-center mb-5 transition-all',
                      step.highlight
                        ? 'bg-[#EB6700]/15 border-[#EB6700]/40'
                        : 'bg-white/[0.04] border-white/[0.1]',
                    )}
                  >
                    <Icon
                      size={22}
                      className={step.highlight ? 'text-[#EB6700]' : 'text-white/50'}
                    />
                    {step.badge && (
                      <span className="absolute -top-2 -right-2 bg-[#EB6700] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full tracking-wider">
                        {step.badge}
                      </span>
                    )}
                  </div>

                  <div className="text-white/20 text-xs font-mono mb-2">{step.number}</div>
                  <h3
                    className={clsx(
                      'font-semibold text-[15px] mb-2',
                      step.highlight ? 'text-white' : 'text-white/80',
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/35 text-[13px] leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isLast = i === steps.length - 1
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex gap-5"
              >
                {/* Left: icon + line */}
                <div className="flex flex-col items-center">
                  <div
                    className={clsx(
                      'w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0',
                      step.highlight
                        ? 'bg-[#EB6700]/15 border-[#EB6700]/40'
                        : 'bg-white/[0.04] border-white/10',
                    )}
                  >
                    <Icon
                      size={18}
                      className={step.highlight ? 'text-[#EB6700]' : 'text-white/50'}
                    />
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-white/[0.07] my-2 min-h-[32px]" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3
                      className={clsx(
                        'font-semibold text-[15px]',
                        step.highlight ? 'text-white' : 'text-white/80',
                      )}
                    >
                      {step.title}
                    </h3>
                    {step.badge && (
                      <span className="bg-[#EB6700] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full tracking-wider">
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-16 flex items-center gap-4 p-5 rounded-2xl border border-[#EB6700]/20 bg-[#EB6700]/[0.05]"
        >
          <div className="w-1 h-12 rounded-full bg-[#EB6700] flex-shrink-0" />
          <div>
            <div className="text-white font-semibold text-sm mb-0.5">
              Primera reunion y prototipo completamente gratis.
            </div>
            <div className="text-white/40 text-sm">
              Sin contrato, sin tarjeta, sin compromiso. Solo traes tu idea.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
