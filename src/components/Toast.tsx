import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  type?: 'error' | 'success'
  duration?: number
}

export const Toast = ({ message, type = 'success', duration = 3000 }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (message) {
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, duration)
    }
  }, [duration, message])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="toast"
          initial={{ x: '1000%' }}
          animate={{ x: '0%' }}
          exit={{ x: '1000%' }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className={`absolute bottom-12 right-0 rounded-md py-4 px-8 shadow backdrop-blur ${
            type === 'success'
              ? 'bg-zinc-50 text-black ring-zinc-100 dark:bg-black dark:text-white dark:ring-zinc-300/20'
              : 'bg-red-600 text-white ring-red-700'
          }`}
        >
          <p className="mb-2 text-base font-bold">{type === 'error' ? 'Oops!' : 'Success!!'}</p>
          <p className="max-w-xs overflow-clip text-sm leading-relaxed">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
  return null
}
