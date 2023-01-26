import { PageHeading } from '@/components/PageHeading'
import Link from 'next/link'

export default function Demo() {
  return (
    <article>
      <PageHeading>Demo projects</PageHeading>
      <div className="prose min-h-[calc(100vh-20rem)]">
        <p>
          This will be a collection of different small UI demos, mainly testing different animation
          techniques.
        </p>
        <Link href="/demo/gallery">Gallery</Link>
      </div>
    </article>
  )
}
