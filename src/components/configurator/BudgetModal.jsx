import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { BASE_PROJECTS, MODULES, EXTRAS, formatARS } from '../../data/pricing'

const WEB3FORMS_KEY = 'a54b0c04-2c51-45f9-ab3d-4e7a5a1efd1e'

const ease = [0.21, 0.47, 0.32, 0.98]

const inputClass = [
  'w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3',
  'text-white text-[15px] placeholder:text-white/25',
  'focus:outline-none focus:border-[#2A3582]/60 focus:bg-white/[0.07]',
  'transition-all duration-200',
].join(' ')

function buildSelectionText(selectedProject, selectedModules, selectedExtras, total) {
  const base = BASE_PROJECTS.find((p) => p.id === selectedProject)
  const activeModules = MODULES.filter((m) => selectedModules.has(m.id))
  const activeExtras = EXTRAS.filter((e) => selectedExtras.has(e.id))

  let text = `PROYECTO BASE:\n- ${base?.name ?? '—'} (${formatARS(base?.price ?? 0)})\n`

  if (activeModules.length > 0) {
    text += `\nMÓDULOS:\n${activeModules.map((m) => `- ${m.name} (+${formatARS(m.price)})`).join('\n')}\n`
  }

  if (activeExtras.length > 0) {
    text += `\nEXTRAS:\n${activeExtras.map((e) => `- ${e.name} (+${formatARS(e.price)})`).join('\n')}\n`
  }

  text += `\nTOTAL (con IVA): ${formatARS(total)}`
  return text
}

export default function BudgetModal({ isOpen, onClose, selectedProject, selectedModules, selectedExtras, total }) {
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', telefono: '' })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Presupuesto Scrapbox — ${form.nombre} · ${formatARS(total)}`,
          from_name: 'Scrapbox Cotizador',
          Nombre: form.nombre,
          Email: form.email,
          Empresa: form.empresa || '—',
          Telefono: form.telefono || '—',
          Seleccion: buildSelectionText(selectedProject, selectedModules, selectedExtras, total),
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setErrorMsg(data?.message || 'Algo salió mal. Intentá de nuevo.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('No se pudo enviar. Verificá tu conexión.')
      setStatus('error')
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setForm({ nombre: '', email: '', empresa: '', telefono: '' })
      setStatus('idle')
      setErrorMsg('')
    }, 350)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-[#080C18]/90 backdrop-blur-sm" />

          <motion.div
            className="relative w-full max-w-lg bg-[#131929] border border-white/[0.1] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.07] transition-all duration-200 z-10"
              aria-label="Cerrar"
            >
              <X size={16} />
            </button>

            <div className="p-8">
              {status === 'success' ? (
                <SuccessState onClose={handleClose} total={total} />
              ) : (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-[11px] text-white/40 mb-4 tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EB6700]" />
                      Presupuesto personalizado
                    </div>
                    <h2 className="text-white font-bold text-2xl leading-tight tracking-tight">
                      Solicitá tu presupuesto
                    </h2>
                    <p className="text-white/40 text-sm mt-2 leading-relaxed">
                      Te enviamos el detalle completo y coordinamos una reunión sin costo.
                    </p>

                    <div className="mt-4 p-3.5 rounded-xl bg-[#EB6700]/[0.07] border border-[#EB6700]/20 flex justify-between items-center">
                      <span className="text-sm text-white/50">Total configurado</span>
                      <span className="text-[#EB6700] font-bold tabular-nums">{formatARS(total)}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide uppercase">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          value={form.nombre}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                          className={inputClass}
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide uppercase">
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="empresa"
                          value={form.empresa}
                          onChange={handleChange}
                          placeholder="Tu empresa"
                          className={inputClass}
                          autoComplete="organization"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide uppercase">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@empresa.com"
                        required
                        className={inputClass}
                        autoComplete="email"
                      />
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide uppercase">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+54 11 ..."
                        className={inputClass}
                        autoComplete="tel"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/[0.08] border border-red-500/20 rounded-xl px-4 py-3">
                        <AlertCircle size={14} className="flex-shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full mt-2"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Enviar solicitud'
                      )}
                    </Button>

                    <p className="text-white/20 text-xs text-center">
                      Te respondemos en menos de 24 horas. Sin compromiso.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SuccessState({ onClose, total }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="text-center py-6"
    >
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={24} className="text-emerald-400" />
      </div>
      <h3 className="text-white font-bold text-xl mb-2">Solicitud enviada</h3>
      <p className="text-white/45 text-sm leading-relaxed mb-1 max-w-xs mx-auto">
        Recibimos tu configuración de <span className="text-[#EB6700] font-semibold tabular-nums">{formatARS(total)}</span>.
      </p>
      <p className="text-white/30 text-xs mb-8 max-w-xs mx-auto">
        Te contactamos en menos de 24 horas para coordinar la reunión inicial.
      </p>
      <Button variant="secondary" onClick={onClose}>
        Cerrar
      </Button>
    </motion.div>
  )
}
