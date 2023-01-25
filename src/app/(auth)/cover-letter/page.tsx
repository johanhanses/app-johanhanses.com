import { PageHeading } from '@/components/PageHeading'
import { prisma } from '@/lib/prisma'
import { unstable_getServerSession } from 'next-auth'
import Image from 'next/image'
import me from '../../../../public/kallslatten.jpeg'

const getData = async () => {
  const session = await unstable_getServerSession()

  if (session) {
    const res = await prisma.coverLetter.findUnique({
      where: {
        recipient: (session?.user?.name as string).toLowerCase()
      }
    })

    return { res, session }
  }

  return null
}

export default async function coverLetter() {
  const data = await getData()

  if (data?.res?.content && data?.session) {
    return (
      <article>
        <PageHeading className="md:mb-24 md:pl-6">Hello {data.session.user?.name}!</PageHeading>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div
            dangerouslySetInnerHTML={{ __html: data.res.content }}
            className="prose order-last mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:order-first md:text-lg"
          />
          <Image
            src={me}
            alt="me"
            priority
            className="mx-a order-first h-full rounded-md md:order-last md:mx-0"
          />
        </div>
      </article>
    )
  }
  return (
    <div className="mb-8 text-center text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
      <p>No Cover letter for this user</p>
    </div>
  )
}
