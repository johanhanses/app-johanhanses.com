import { PageHeading } from '@/components/PageHeading'
import { prisma } from '@/lib/prisma'
import { unstable_getServerSession } from 'next-auth'

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
      <>
        <PageHeading>Hello {data.session.user?.name}!</PageHeading>
        <div
          dangerouslySetInnerHTML={{ __html: data.res.content }}
          className="prose mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg"
        />
      </>
    )
  }
  return (
    <div className="mb-8 text-center text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
      <p>No Cover letter for this user</p>
    </div>
  )
}
