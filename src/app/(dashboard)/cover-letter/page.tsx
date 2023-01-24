import { prisma } from '@/lib/prisma'

const getData = async () => {
  const res = await prisma.cv.findUnique({
    where: {
      title: 'cv'
    }
  })
  if (!res) throw new Error('failed to fetch data')
  return res
}

export default async function coverLetter() {
  const data = await getData()

  // eslint-disable-next-line no-console
  console.log(data)

  return <div>coverLetter</div>
}
