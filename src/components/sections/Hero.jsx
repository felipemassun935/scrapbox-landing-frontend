import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import DashboardMockup from '../ui/DashboardMockup'
import { useModal } from '../../context/ModalContext'

const ease = [0.21, 0.47, 0.32, 0.98]

export default function Hero() {
  const { open } = useModal()
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0F1426]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Blue top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42,53,130,0.28) 0%, transparent 65%)',
        }}
      />

      {/* Orange bottom-right accent */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 100% 100%, rgba(235,103,0,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#2A3582]/40 bg-[#2A3582]/10 text-[11px] text-white/45 mb-8 tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EB6700] flex-shrink-0" />
                Software factory · Buenos Aires
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tighter mb-6"
            >
              Software a medida para empresas que quieren{' '}
              <span className="text-[#EB6700]">crecer sin limites.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="text-[#9CA3AF] text-lg leading-relaxed mb-10 max-w-[500px]"
            >
              Creamos sistemas rapidos, escalables y modernos: control de stock,
              backoffice, automatizaciones y plataformas web hechas especificamente
              para tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease }}
              className="flex flex-wrap gap-3"
            >
              <Button size="lg" className="group" onClick={open}>
                Presupuesto gratis
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button variant="secondary" size="lg" as="a" href="#servicios">
                Ver servicios
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-6 mt-10 pt-10 border-t border-white/[0.07]"
            >
              {[
                { number: '+10', label: 'proyectos' },
                { number: '100%', label: 'personalizados' },
                { number: '72hs', label: 'primer entregable' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-white font-semibold text-xl leading-none">{stat.number}</div>
                  <div className="text-white/35 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.95, delay: 0.35, ease }}
            className="relative"
          >
            {/* Glow behind mockup */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, #2A3582 0%, transparent 70%)' }}
            />
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F1426] to-transparent pointer-events-none" />
    </section>
  )
}
