import { ALink } from '@/components/ALink'
import { Rocket } from '@/components/Icons/Rocket'
import { PageHeading } from '@/components/PageHeading'
import { TextBlock } from '@/components/TextBlock'

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
            It will have static pages, server and client- components, it will implement{' '}
            <ALink href="https://next-auth.js.org/">NextAuth</ALink> and{' '}
            <ALink href="https://github.com/pacocoursey/next-themes">next-themes</ALink> for
            toggling dark mode, all adopted and tweaked to work with all the new beta-features of
            Next.js 13 app-dir.
          </p>
          <p>
            Authentification is, as previously mentioned, implemented using the NextAuth package and
            the app uses <ALink href="https://www.prisma.io/">Prisma</ALink> ORM to define and query
            the MySQL database hosted at <ALink href="https://planetscale.com/">PlanetScale</ALink>.
            Right now it hosts only the users table but as the app evolves I am planning to move my
            resume/cv and cover letters to the database from it&apos;s current home at Contentful.
          </p>
          <p>
            The goal is to have all content in the database and to use{' '}
            <ALink href="https://editorjs.io/">editor.js</ALink> block editor to add and edit
            content on all places around the app. basically building my own CMS
          </p>
          <p>
            Another thing that will be available is small demos of various animated
            elements/features, mainly using the{' '}
            <ALink href="https://www.framer.com/motion/">Framer Motion</ALink> library. Since
            I&apos;ve recently discovered the{' '}
            <ALink href="https://github.com/jamiebuilds/tailwindcss-animate">
              tailwindcss-animate
            </ALink>{' '}
            library I am gonna explore that as well, and maybe share if I build something cool.
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
