import { PageHeading } from '@/components/PageHeading'
import { TextBlock } from '@/components/TextBlock'
import Image from 'next/image'
import Link from 'next/link'
import carousel from '../../../public/images/demo-thumbnails/transitions.png'

const demos = [
  {
    url: '/demo/gallery',
    thumbnail: carousel,
    title: 'IOS Photo gallery'
  }
]

export default function Demo() {
  return (
    <article className="mx-auto lg:w-2/3">
      <PageHeading>Demo projects</PageHeading>

      <div className="min-h-[calc(100vh-20rem)]">
        <TextBlock className="prose">
          <p>
            A collection of different small UI demos where I test different animation techniques and
            libraries.
          </p>
        </TextBlock>

        <section className="grid w-full auto-rows-fr justify-center gap-4 sm:grid-cols-2 md:grid-cols-3	">
          {demos.map((demo) => (
            <Link
              key={demo.url}
              href={demo.url}
              className="group relative mb-8 block overflow-hidden rounded-md border border-zinc-100 text-base font-semibold leading-relaxed text-white shadow-2xl dark:border-zinc-700/40 md:text-xl"
            >
              <Image
                priority
                alt="preview"
                src={demo.thumbnail}
                className="aspect-auto h-auto w-full transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/20" />
              <h3 className="absolute bottom-12 w-full text-center">{demo.title}</h3>
            </Link>
          ))}
          <div className="group relative mb-8 overflow-hidden rounded-md border border-zinc-100 text-base font-semibold leading-relaxed text-white shadow-2xl dark:border-zinc-700/40 md:text-xl">
            <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/20" />
            <h3 className="absolute bottom-12 w-full text-center text-sm text-zinc-600 dark:text-zinc-400">
              More will be added soon
            </h3>
          </div>
        </section>
      </div>
    </article>
  )
}
