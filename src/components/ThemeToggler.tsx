'use client'

import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import useMounted from '@/hooks/useMounted'

export const ThemeToggler = () => {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()

  if (!mounted) return null
  if (theme === 'dark')
    return (
      <button onClick={() => setTheme('light')}>
        <MoonIcon className="h-6 w-6" />
      </button>
    )
  if (theme === 'light' || theme === 'system')
    return (
      <button onClick={() => setTheme('dark')}>
        <SunIcon className="h-6 w-6" />
      </button>
    )
  return null
}
