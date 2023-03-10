'use client'

import { useBoundedScroll } from '@/hooks/useBoundedScroll'
import { motion, useTransform } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Menu } from './Menu'
import { MobileMenu } from './MobileMenu'
import { ThemeToggler } from './ThemeToggler'

export interface MenuItems {
  title: string
  url: string
}

let menuItems: MenuItems[] = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Demos',
    url: '/demo'
  },
  {
    title: 'CV',
    url: '/cv'
  },
  {
    title: 'Cover letter',
    url: '/cover-letter'
  }
]

export const Header = () => {
  const { data: session } = useSession()
  const [menuItemsInState, setMenuItemsInState] = useState([...menuItems])
  const { scrollYBoundedProgress } = useBoundedScroll(200)
  const scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.5, 1],
    [0, 0, 1]
  )

  useEffect(() => {
    if (session) setMenuItemsInState(menuItems)
    if (!session) {
      const items = menuItems
        // .filter((item) => item.title !== 'CV')
        .filter((item) => item.title !== 'Cover letter')
      setMenuItemsInState(items)
    }
  }, [session])

  return (
    <header className="absolute left-0 right-0 z-50 h-24 w-full max-w-7xl sm:-ml-4 md:ml-0">
      <div className="fixed h-24 w-full max-w-7xl">
        <motion.div
          style={{
            height: useTransform(scrollYBoundedProgressThrottled, [0, 1], [96, 0]),
            opacity: useTransform(scrollYBoundedProgressThrottled, [0, 1], [1, 0])
          }}
          className="flex h-24 w-full max-w-7xl items-center justify-end gap-4 px-4 sm:px-8 md:relative md:justify-center"
        >
          <Menu menuItems={menuItemsInState} />
          <MobileMenu menuItems={menuItemsInState} />
          <ThemeToggler />
        </motion.div>
      </div>
    </header>
  )
}
2
