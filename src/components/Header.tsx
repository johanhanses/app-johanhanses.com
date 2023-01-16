'use client'

import { useBoundedScroll } from '@/hooks/useBoundedScroll'
import { motion, useTransform } from 'framer-motion'
import { AuthButton } from './AuthButton'
import { ThemeToggler } from './ThemeToggler'

export const Header = () => {
  const { scrollYBoundedProgress } = useBoundedScroll(500)
  const scrollYBoundedProgressThrottled = useTransform(scrollYBoundedProgress, [0, 0.5, 1], [0, 0, 1])

  return (
    <motion.header
      style={{
        height: useTransform(scrollYBoundedProgressThrottled, [0, 1], [96, 60])
      }}
      className="fixed flex h-24 w-full max-w-6xl font-notoSerifDisplay shadow backdrop-blur-md"
    >
      <div className="mx-auto flex w-full items-center justify-between px-6">
        <motion.h1
          style={{ scale: useTransform(scrollYBoundedProgressThrottled, [0, 1], [1, 0.9]) }}
          className="text-5xl font-black uppercase"
        >
          JH
        </motion.h1>
        <motion.nav
          style={{ opacity: useTransform(scrollYBoundedProgressThrottled, [0, 1], [1, 0]) }}
          className="flex space-x-4 text-lg font-bold"
        >
          <AuthButton />
          <ThemeToggler />
        </motion.nav>
      </div>
    </motion.header>
  )
}
