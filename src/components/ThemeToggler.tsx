'use client'

import useMounted from '@/hooks/useMounted'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

export const ThemeToggler = () => {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()

  if (!mounted) return null
  return (
    <button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      aria-label="Toggle light mode"
      className="absolute right-4 rounded-full bg-white/90 py-2 px-3 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 sm:right-8 lg:right-12 xl:right-20"
    >
      {theme === 'dark' ? (
        <MoonIcon className="h-6 w-6 fill-zinc-700 stroke-zinc-500 transition-colors duration-200 hover:text-yellow" />
      ) : (
        <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition-colors duration-200 hover:text-yellow" />
      )}
    </button>
  )
}
