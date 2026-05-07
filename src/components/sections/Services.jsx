import { motion } from 'framer-motion'
import {
  Package,
  LayoutDashboard,
  Globe,
  Zap,
  BarChart3,
  Puzzle,
  Building2,
  Code2,
} from 'lucide-react'
import { staggerContainer, staggerItem } from '../ui/FadeIn'

const services = [
  {
    icon: Package,
    title: 'Sistemas de stock',
    desc: 'Control de inventario en tiempo real con alertas, movimientos y reportes.',
  },
  {
    icon: LayoutDashboard,
    title: 'Backoffice empresarial',
    desc: 'Paneles de administracion a medida para gestionar tu operacion completa.',
  },
  {
    icon: Globe,
    title: 'Landing pages',
    desc: 'Sitios de alta conversion con diseno premium y carga ultrarapida.',
  },
  {
    icon: Zap,
    title: 'Automatizaciones',
    desc: 'Procesos manuales convertidos en flujos automaticos y sin errores.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards',
    desc: 'Visualizacion de datos clara y accionable para tomar mejores decisiones.',
  },
  {
    icon: Puzzle,
    title: 'Integraciones',
    desc: 'Conectamos tus herramientas: CRMs, ERPs, pagos, logistica y mas.',
  },
  {
    icon: Building2,
    title: 'Software interno',
    desc: 'Herramientas propias para equipos: HR, finanzas, operaciones.',
  },
  {
    icon: Code2,
    title: 'APIs y plataformas',
    desc: 'Arquitecturas modernas, escalables y listas para crecer con tu negocio.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-[#F7F8FA] py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2A3582]/20 bg-[#2A3582]/5 text-[11px] text-[#2A3582] mb-5 tracking-wide font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2A3582]" />
            Que construimos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1426] leading-tight tracking-tight max-w-lg">
            Soluciones que se adaptan a tu negocio.
          </h2>
          <p className="text-[#485563] text-base mt-4 max-w-xl leading-relaxed">
            Cada proyecto es distinto. Construimos exactamente lo que necesitas, sin templates ni atajos.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#2A3582]/30 hover:shadow-lg hover:shadow-[#2A3582]/5 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] group-hover:bg-[#2A3582]/8 border border-[#E5E7EB] group-hover:border-[#2A3582]/20 flex items-center justify-center mb-5 transition-all duration-300">
                <Icon
                  size={18}
                  className="text-[#485563] group-hover:text-[#2A3582] transition-colors duration-300"
                />
              </div>
              <h3 className="text-[#0F1426] font-semibold text-[15px] mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
