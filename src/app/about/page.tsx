import { ALink } from '@/components/ALink'
import { Rocket } from '@/components/Icons/Rocket'
import { PageHeading } from '@/components/PageHeading'
import { TextBlock } from '@/components/TextBlock'
import Link from 'next/link'

export default function About() {
  return (
    <article className="flex flex-col gap-8 md:flex-row">
      <div className="mt-4 md:mt-16 lg:w-1/2">
        <PageHeading>About, why and what is this?</PageHeading>
        <TextBlock className="prose">
          <p>
            This is my attempt to make some sort of{' '}
            <ALink href="https://www.danielsieger.com/blog/2021/05/30/digital-gardens.html">
              digital garden
            </ALink>
            /playground to test or show of web/design/code related stuff . It is made using{' '}
            <ALink href="https://beta.nextjs.org/docs">Next.js 13</ALink> with the experimental app
            directory/new router using server components. The code is available at{' '}
            <ALink href="https://github.com/johanhanses/app-johanhanses.com">GitHub</ALink>
          </p>
          <p>
            It has static pages, react server componets and traditional client components, it will
            implements <ALink href="https://next-auth.js.org/">NextAuth</ALink> and{' '}
            <ALink href="https://github.com/pacocoursey/next-themes">next-themes</ALink> for
            toggling dark mode, all adopted and tweaked to work with all the new beta-features of
            Next.js 13 app-dir.
          </p>
          <p>
            Authentification is, as previously mentioned, implemented using the NextAuth package and
            the app uses <ALink href="https://www.prisma.io/">Prisma</ALink> ORM to define and query
            the MySQL database hosted at <ALink href="https://planetscale.com/">PlanetScale</ALink>.
            Right now it hosts only users, cv and cover-letter but the goal is to have all content
            in the database and to use <ALink href="https://editorjs.io/">editor.js</ALink> block
            editor to add and edit content in all places around the app. basically building my own
            CMS. Just because it&apos;s fun, and as a contrast to all the MDX-based content
            developers usually build for themself.
          </p>
          <p>
            Another thing that will is available is small demos of various animated
            elements/features, mainly using the{' '}
            <ALink href="https://www.framer.com/motion/">Framer Motion</ALink> library. But since
            I&apos;ve recently discovered the{' '}
            <ALink href="https://github.com/jamiebuilds/tailwindcss-animate">
              tailwindcss-animate
            </ALink>{' '}
            library I am gonna explore that, and maybe add to the{' '}
            <Link
              href="/demo"
              className="text-teal-500 hover:text-teal-600 hover:underline dark:hover:text-teal-400"
            >
              demo
            </Link>{' '}
            page if I build something cool.
          </p>
          <p>This text and the whole app will be constantly changing.</p>
        </TextBlock>
      </div>
      <div className="flex justify-center md:pt-32 lg:w-1/2">
        <Rocket />
      </div>
    </article>
  )
}
