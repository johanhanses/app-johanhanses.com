import { ALink } from '@/components/ALink'
import { PageHeader } from '@/components/PageHeader'
import { TextBlock } from '@/components/TextBlock'

export default function About() {
  return (
    <div className="mt-16 lg:w-1/2">
      <PageHeader>About and why this?</PageHeader>
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
          It will have static pages, server and client- components, it will implements{' '}
          <ALink href="https://next-auth.js.org/">NextAuth</ALink> and{' '}
          <ALink href="https://github.com/pacocoursey/next-themes">next-themes</ALink> for toggling
          dark mode, all adopted and tweaked to work with all the new beta-features of Next.js 13
          app-dir.
        </p>
        <p>
          Authentification is, as previously mentioned, implemented using the NextAuth package and
          the app uses <ALink href="https://www.prisma.io/">Prisma</ALink> ORM to define and query
          the MySQL database hosted at <ALink href="https://planetscale.com/">PlanetScale</ALink>.
          Right now it hosts only the users table but as the app evolves I am planning to move my
          resume/cv and cover letters to the database from it&apos;s current home at Contentful.
        </p>
      </TextBlock>
    </div>
  )
}
