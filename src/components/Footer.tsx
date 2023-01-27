import { unstable_getServerSession } from 'next-auth'
import { use } from 'react'
import { ALink } from './ALink'

export const Footer = () => {
  const session = use(unstable_getServerSession())

  return (
    <footer className="h-24">
      <div className="md: flex flex-col border-t border-zinc-100 px-4 pt-6 text-xs text-zinc-400 dark:border-zinc-700/40 dark:text-zinc-500 md:flex-row md:justify-between md:px-8 lg:px-20">
        <div>
          <p>
            Made by <ALink href="mailto:johanhanses@gmail.com">Johan</ALink> using TypeScript,
            Next.js, and <ALink href="https://vercel.com">Vercel.</ALink>
          </p>
          {session && (
            <p>
              Logged in as <span className="">{session?.user?.name}</span>
            </p>
          )}
        </div>
        <span>
          Icons from <ALink href="https://heroicons.com/">Heroicons</ALink>, Illustrations by{' '}
          <ALink href="https://popsy.co/">Popsy.co</ALink>
        </span>
      </div>
    </footer>
  )
}
