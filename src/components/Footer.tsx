import { ALink } from './ALink'

export const Footer = () => {
  return (
    <footer className="h-24">
      <div className="md: flex flex-col border-t border-zinc-100 px-4 pt-6 text-xs text-zinc-400 dark:border-zinc-700/40 dark:text-zinc-500 md:flex-row md:justify-between md:px-8 lg:px-20">
        <span>
          Made by <ALink href="mailto:johanhanses@gmail.com">Johan</ALink> using TypeScript,
          Next.js, and <ALink href="https://vercel.com">Vercel.</ALink>
        </span>
        <span>
          Icons from <ALink href="https://heroicons.com/">Heroicons</ALink>, Illustrations by{' '}
          <ALink href="https://popsy.co/">Popsy.co</ALink>
        </span>
      </div>
    </footer>
  )
}
