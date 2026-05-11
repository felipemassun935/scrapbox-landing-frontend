import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'

const ease = [0.21, 0.47, 0.32, 0.98]

export default function DetailModal({ item, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const isVideo = item?.mediaUrl && (item.mediaUrl.endsWith('.mp4') || item.mediaUrl.endsWith('.webm'))

  return (
    <AnimatePresence>
      {isOpen && item && (
        <>
          <motion.div
            key="detail-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
          />

          <motion.div
            key="detail-modal"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ duration: 0.26, ease }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto bg-[#0d1224] border border-white/[0.08] rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center transition-colors"
              >
                <X size={14} className="text-white/60" />
              </button>

              {/* Media */}
              <div className="w-full aspect-video bg-[#111827] rounded-t-3xl overflow-hidden flex items-center justify-center border-b border-white/[0.06]">
                {item.mediaUrl ? (
                  isVideo ? (
                    <video
                      src={item.mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.mediaUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                      <Play size={20} className="text-white/20 ml-0.5" />
                    </div>
                    <span className="text-xs text-white/20">Demo próximamente</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 pb-10">
                <h2 className="text-2xl font-bold text-white tracking-tight mb-3 pr-8">
                  {item.name}
                </h2>
                <p className="text-white/50 text-base leading-relaxed">
                  {item.longDescription || item.description}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
