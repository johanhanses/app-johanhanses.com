'use client'

import { useBoundedScroll } from '@/hooks/useBoundedScroll'
import { motion, useTransform } from 'framer-motion'
import { Menu } from './Menu'
import { MobileMenu } from './MobileMenu'
import { ThemeToggler } from './ThemeToggler'

export interface MenuItems {
  title: string
  url: string
}

const menuItems: MenuItems[] = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/'
  },
  {
    title: 'CV',
    url: '/'
  },
  {
    title: 'Log in',
    url: '/'
  }
]

export const Header = () => {
  const { scrollYBoundedProgress } = useBoundedScroll(200)
  const scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.5, 1],
    [0, 0, 1]
  )

  return (
    <div className="fixed flex w-full max-w-7xl">
      <motion.header
        style={{
          height: useTransform(scrollYBoundedProgressThrottled, [0, 1], [96, 0]),
          opacity: useTransform(scrollYBoundedProgressThrottled, [0, 1], [1, 0])
        }}
        className="relative flex w-full items-center justify-end gap-4 overflow-hidden px-4 sm:px-8 md:justify-center lg:px-12"
      >
        <Menu menuItems={menuItems} />

        <MobileMenu menuItems={menuItems} />

        {/* <AuthButton /> */}
        <ThemeToggler />
      </motion.header>
    </div>
  )
}
2
