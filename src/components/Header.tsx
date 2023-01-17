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
  return (
    <header className="relative flex h-24 w-full items-center justify-end gap-4 px-4 sm:px-8 md:justify-center lg:px-12">
      <Menu menuItems={menuItems} />

      <MobileMenu menuItems={menuItems} />

      {/* <AuthButton /> */}
      <ThemeToggler />
    </header>
  )
}
2
