import Link from 'next/link'
import { MenuItems } from './Header'

interface MenuProps {
  menuItems: MenuItems[]
}

export const Menu = ({ menuItems }: MenuProps) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {menuItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.url}
              className="relative block px-3 py-2 transition hover:text-yellow dark:hover:text-yellow"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
