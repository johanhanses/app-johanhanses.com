'use client'

import { MobileMenu } from './MobileMenu'
import { ThemeToggler } from './ThemeToggler'

export interface MenuItems {
  title: string
  url: string
}

const menuItems: MenuItems[] = [
  {
    title: 'hej',
    url: '/'
  },
  {
    title: 'då',
    url: '/'
  }
]

export const Header = () => {
  return (
    <header className="relative flex h-20 w-full items-center justify-end gap-4 px-4 shadow-sm sm:px-8">
      {/* <Link href="/">
        <h1>JH</h1>
      </Link> */}

      <MobileMenu menuItems={menuItems} />

      {/* <AuthButton /> */}
      <ThemeToggler />
    </header>
  )
}
2
