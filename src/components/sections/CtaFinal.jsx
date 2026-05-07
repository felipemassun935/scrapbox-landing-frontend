import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { useModal } from '../../context/ModalContext'

export default function CtaFinal() {
  const { open } = useModal()
  return (
    <section id="contacto" className="relative bg-[#1B2260] py-32 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Orange glow */}
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 100% 0%, rgba(235,103,0,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.06] text-[11px] text-white/50 mb-8 tracking-wide">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EB6700]" />
            Trabajemos juntos
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Contanos tu idea y armamos<br />un prototipo{' '}
          <span className="text-[#EB6700]">sin costo.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-white/45 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Sin contratos ni compromisos. Primera reunion de 30 minutos, prototipo
          funcional en 72 horas. Solo resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="group w-full sm:w-auto" onClick={open}>
            Solicitar prototipo gratis
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
          <a
            href="mailto:scrapboxgo@gmail.com"
            className="text-white/45 hover:text-white text-sm transition-colors duration-200"
          >
            scrapboxgo@gmail.com
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="text-white/25 text-sm mt-8"
        >
          Respondemos en menos de 24 horas.
        </motion.p>
      </div>
    </section>
  )
}
