import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { useModal } from '../../context/ModalContext'
import { Button } from './Button'

// ─────────────────────────────────────────────────────────────────────────────
// Para activar el envío de emails:
// 1. Ir a https://formspree.io y crear cuenta gratuita con scrapboxgo@gmail.com
// 2. Crear un nuevo form
// 3. Reemplazar "YOUR_FORM_ID" con el ID que te dan (ej: "xpwzbqvr")
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

const inputClass = [
  'w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3',
  'text-white text-[15px] placeholder:text-white/25',
  'focus:outline-none focus:border-[#2A3582]/60 focus:bg-white/[0.07]',
  'transition-all duration-200',
].join(' ')

const ease = [0.21, 0.47, 0.32, 0.98]

export default function ContactModal() {
  const { isOpen, close } = useModal()
  const [form, setForm] = useState({ nombre: '', email: '', descripcion: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
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

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nombre: form.nombre,
          Email: form.email,
          Descripcion: form.descripcion,
        }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data?.error || 'Algo salio mal. Intenta de nuevo.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('No se pudo enviar. Verifica tu conexion.')
      setStatus('error')
    }
  }

  const handleClose = () => {
    close()
    setTimeout(() => {
      setForm({ nombre: '', email: '', descripcion: '' })
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
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#080C18]/90 backdrop-blur-sm" />

          {/* Card */}
          <motion.div
            className="relative w-full max-w-lg bg-[#131929] border border-white/[0.1] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.07] transition-all duration-200 z-10"
              aria-label="Cerrar"
            >
              <X size={16} />
            </button>

            <div className="p-8">
              {status === 'success' ? (
                <SuccessState onClose={handleClose} />
              ) : (
                <>
                  {/* Header */}
                  <div className="mb-7">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-[11px] text-white/40 mb-4 tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EB6700]" />
                      Prototipo gratuito
                    </div>
                    <h2 className="text-white font-bold text-2xl leading-tight tracking-tight">
                      Contanos tu idea.
                    </h2>
                    <p className="text-white/40 text-sm mt-2 leading-relaxed">
                      Te respondemos en menos de 24 horas y coordinamos una reunion sin costo.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5 tracking-wide uppercase">
                        Nombre
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
                        Email
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
                        En que podemos ayudarte?
                      </label>
                      <textarea
                        name="descripcion"
                        value={form.descripcion}
                        onChange={handleChange}
                        placeholder="Describinos brevemente tu empresa o proyecto. Que necesitas construir?"
                        required
                        rows={4}
                        className={`${inputClass} resize-none`}
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
                        'Enviar consulta'
                      )}
                    </Button>

                    <p className="text-white/20 text-xs text-center">
                      Sin compromisos. Primera reunion y prototipo completamente gratis.
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

function SuccessState({ onClose }) {
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
      <h3 className="text-white font-bold text-xl mb-2">Mensaje enviado</h3>
      <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
        Te contactamos en menos de 24 horas para coordinar la reunion inicial.
      </p>
      <Button variant="secondary" onClick={onClose}>
        Cerrar
      </Button>
    </motion.div>
  )
}
