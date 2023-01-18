import { Socials } from '@/components/Socials'
import Image from 'next/image'
import me from '../../public/joag2.jpg'

export default async function Home() {
  return (
    <div className="lg:w-2/3">
      <Image
        src={me}
        alt="Johan Hanses"
        className="mb-12 aspect-auto h-16 w-16 rounded-full"
      />
      <h1 className="mb-8 text-5xl font-black">Johan Hanses</h1>
      <div className="prose mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>TypeScript/Frontend developer based in Falun, Sweden.</p>
        <p>Building HR-Tech at Workly using TypeScript, Nextjs and React Native.</p>{' '}
        <p>
          Obsessive self learner who likes to build things using bleeding edge technologies, mainly
          within the JavaScript ecosystem. Interested in Web performance, a11y, UI and Cloud
          technologies.
        </p>
      </div>
      <Socials />
      <Image
        src={me}
        alt="Johan Hanses"
        className="mb-12 aspect-auto h-16 w-16 rounded-full"
      />
      <h1 className="mb-8 text-5xl font-black">Johan Hanses</h1>
      <div className="prose mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>TypeScript/Frontend developer based in Falun, Sweden.</p>
        <p>Building HR-Tech at Workly using TypeScript, Nextjs and React Native.</p>{' '}
        <p>
          Obsessive self learner who likes to build things using bleeding edge technologies, mainly
          within the JavaScript ecosystem. Interested in Web performance, a11y, UI and Cloud
          technologies.
        </p>
      </div>
      <Socials />
      <Image
        src={me}
        alt="Johan Hanses"
        className="mb-12 aspect-auto h-16 w-16 rounded-full"
      />
      <h1 className="mb-8 text-5xl font-black">Johan Hanses</h1>
      <div className="prose mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>TypeScript/Frontend developer based in Falun, Sweden.</p>
        <p>Building HR-Tech at Workly using TypeScript, Nextjs and React Native.</p>{' '}
        <p>
          Obsessive self learner who likes to build things using bleeding edge technologies, mainly
          within the JavaScript ecosystem. Interested in Web performance, a11y, UI and Cloud
          technologies.
        </p>
      </div>
      <Socials />
    </div>
  )
}
