'use client'

import { Menu } from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ThemeToggler } from './ThemeToggler'

const menuItems = [
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

      <Menu>
        {({ open, close }) => (
          <>
            <Menu.Button className="flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
              Menu
              <ChevronDownIcon className="ml-2 h-3 w-3" />
            </Menu.Button>
            {open && (
              <div className="fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80" />
            )}
            <Menu.Items
              as="nav"
              className="fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-3xl bg-white p-8 opacity-100 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
            >
              <div className="flex justify-end">
                <button onClick={close}>
                  <XMarkIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                </button>
              </div>
              <div className="-my-2 mt-6 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {menuItems.map((item) => (
                  <Menu.Item key="item.title">
                    <Link
                      href={item.url}
                      className="block py-2"
                    >
                      {item.title}
                    </Link>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </>
        )}
      </Menu>

      {/* <AuthButton /> */}
      <ThemeToggler />
    </header>
  )
}
2
