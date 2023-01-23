import { ALink } from '@/components/ALink'
import { PageHeading } from '@/components/PageHeading'
import { Socials } from '@/components/Socials'
import { TextBlock } from '@/components/TextBlock'
import Image from 'next/image'
import me from '../../public/joag2.jpg'

export default function Home() {
  return (
    <div className="lg:w-2/3">
      <Image
        src={me}
        alt="Johan Hanses"
        className="mb-12 aspect-auto h-16 w-16 rounded-full"
        priority
      />
      <PageHeading>Johan Hanses</PageHeading>
      <TextBlock>
        <p>TypeScript/Frontend developer based in Falun, Sweden.</p>
        <p>
          Building HR-Tech at <ALink href="https://worklygroup.com">Workly</ALink> using TypeScript,
          Nextjs and React Native.
        </p>
        <p>
          Obsessive self learner who likes to build things using bleeding edge technologies, mainly
          within the JavaScript ecosystem. Interested in web performance, a11y, UI and cloud
          technologies.
        </p>
      </TextBlock>
      <Socials />
    </div>
  )
}
