'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuItems } from './Header'

interface MenuProps {
  menuItems: MenuItems[]
}

export const Menu = ({ menuItems }: MenuProps) => {
  const { data: session } = useSession()
  const pathname = usePathname()

  return (
    <nav className="hidden md:block">
      <ul className="flex rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {menuItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.url}
              className={`relative block px-3 py-2 transition-colors duration-300 hover:text-yellow ${
                pathname === item.url && 'text-yellow'
              }`}
            >
              {pathname === item.url ? (
                <span className="border-b border-yellow/40 pb-[11px]">{item.title}</span>
              ) : (
                <>{item.title}</>
              )}
            </Link>
          </li>
        ))}
        <li>
          {!session ? (
            <Link
              href="/login"
              className={`relative block px-3 py-2 transition-colors duration-300 hover:text-yellow ${
                pathname === '/login' && 'text-yellow'
              }`}
            >
              {pathname === '/login' ? (
                <span className="border-b border-yellow/40 pb-[11px]">Log in</span>
              ) : (
                <>Log in</>
              )}
            </Link>
          ) : (
            <button
              onClick={async () => {
                await signOut({
                  callbackUrl: `/`
                })
              }}
              className="block px-3 py-2 transition-colors duration-300 hover:text-yellow"
            >
              Log out
            </button>
          )}
        </li>
      </ul>
    </nav>
  )
}
