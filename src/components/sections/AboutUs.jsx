import { motion } from 'framer-motion'
import { Github, Layers, Server, Terminal } from 'lucide-react'
import { staggerContainer, staggerItem } from '../ui/FadeIn'

const team = [
  {
    initials: 'FM',
    name: 'Felipe Massun',
    role: 'Full Stack Developer',
    focus: 'Backend & DevOps',
    bio: 'Programador full stack con foco en backend, infraestructura y automatizacion. Construye sistemas que funcionan bien bajo presion — desde la API hasta el servidor.',
    detail:
      'Cuando no esta trabajando en proyectos de clientes, corre servicios en su homelab con Docker y experimenta con Linux para entender como funcionan las cosas por dentro. Su proximo paso: infraestructura cloud y CI/CD a escala.',
    skills: ['Python', 'Node.js', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'Linux'],
    accent: '#2A3582',
    icon: Terminal,
  },
  {
    initials: 'FR',
    name: 'Felipe Rosarno',
    role: 'Backend Developer',
    focus: 'Infraestructura & Soporte',
    bio: 'Estudiante de Ingenieria en Informatica con pasion por resolver problemas complejos a traves de la tecnologia. Metodico, analitico y con muchas ganas de aprender.',
    detail:
      'Se mueve bien en backend, soporte tecnico e infraestructura. Autodidacta por naturaleza, disfruta tanto del trabajo individual como en equipo. Cada proyecto es una oportunidad para crecer.',
    skills: ['Backend', 'Infraestructura', 'Soporte IT', 'Logica de sistemas', 'Trabajo en equipo'],
    accent: '#EB6700',
    icon: Server,
  },
]

function Avatar({ initials, accent }) {
  return (
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-white text-lg tracking-tight select-none"
      style={{ background: `${accent}22`, border: `1px solid ${accent}40` }}
    >
      <span style={{ color: accent }}>{initials}</span>
    </div>
  )
}

export default function AboutUs() {
  return (
    <section id="nosotros" className="bg-[#0F1426] py-28">
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
            El equipo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight max-w-xl">
            Dos ingenieros construyendo el software que las empresas necesitan.
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-lg leading-relaxed">
            Sin capas de intermediarios. El mismo equipo que habla con vos es el que escribe el codigo.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-5"
        >
          {team.map(({ initials, name, role, focus, bio, detail, skills, accent, icon: Icon }) => (
            <motion.div
              key={name}
              variants={staggerItem}
              className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start gap-4 mb-6">
                <Avatar initials={initials} accent={accent} />
                <div>
                  <h3 className="text-white font-semibold text-lg leading-none mb-1">{name}</h3>
                  <div className="text-white/40 text-sm">{role}</div>
                  <div
                    className="inline-flex items-center gap-1.5 mt-2 text-[11px] font-medium px-2.5 py-1 rounded-full"
                    style={{ background: `${accent}18`, color: accent }}
                  >
                    <Icon size={11} />
                    {focus}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-white/65 text-[15px] leading-relaxed mb-3">{bio}</p>
              <p className="text-white/30 text-sm leading-relaxed">{detail}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.07]">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-1 rounded-lg border border-white/[0.08] text-white/40 bg-white/[0.03] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-10 text-center"
        >
          <p className="text-white/25 text-sm">
            Estudiantes de Ingenieria en Sistemas · Buenos Aires, Argentina
          </p>
        </motion.div>
      </div>
    </section>
  )
}
