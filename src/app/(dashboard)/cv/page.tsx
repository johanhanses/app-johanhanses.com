import { CvContent } from '@/interface'
import { prisma } from '@/lib/prisma'
import { Education } from './Education'
import { Header } from './Header'
import { Skills } from './Skills'
import { Work } from './Work'

const getData = async () => {
  const res = await prisma.cv.findUnique({
    where: {
      title: 'cv'
    }
  })
  if (!res) throw new Error('failed to fetch data')
  return res
}

export default async function Cv() {
  const data = await getData()

  const { header, skills, work, education } = data?.content as unknown as CvContent

  return (
    <div className="space-y-16 overflow-y-auto text-base md:space-y-24">
      <Header data={header} />
      <Skills data={skills} />
      <Work data={work} />
      <Education data={education} />
    </div>
  )
}
