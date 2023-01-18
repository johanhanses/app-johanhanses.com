import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Github } from './Github'
import { Linkedin } from './Linkedin'

const links = [
  {
    url: 'https://github.com/johanhanses',
    title: 'GitHub',
    icon: <Github />
  },
  {
    url: 'https://www.linkedin.com/in/johanhanses/',
    title: 'LinkedIn',
    icon: <Linkedin />
  },
  {
    url: 'mailto:johanhanses@gmail.com',
    title: 'Email',
    icon: (
      <EnvelopeIcon className="h-6 w-6 fill-zinc-500 transition-all duration-300 hover:scale-105 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    )
  }
]

export const Socials = () => (
  <div className="flex items-center gap-6">
    {links.map((link) => (
      <Link
        key={link.url}
        href={link.url}
        title={link.title}
        target="_blank"
        rel="noreferrer"
        className="group"
      >
        {link.icon}
      </Link>
    ))}
  </div>
)
