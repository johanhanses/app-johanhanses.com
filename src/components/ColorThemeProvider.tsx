'use client'

import useMounted from '@/hooks/useMounted'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const mounted = useMounted()

  if (mounted) return <ThemeProvider attribute="class">{children}</ThemeProvider>
  return null
}
