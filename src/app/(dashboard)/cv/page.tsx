import { CvContent } from '@/interface'
import { prisma } from '@/lib/prisma'
import { Education } from './Education'
import { Header } from './Header'
import { Skills } from './Skills'
import { Work } from './Work'

export default async function Cv() {
  const cv = await prisma.CV.findUnique({
    where: {
      title: 'cv'
    }
  })

  const { header, skills, work, education } = cv?.content as unknown as CvContent

  return (
    <div className="space-y-16 overflow-y-auto text-base md:space-y-24">
      <Header data={header} />
      <Skills data={skills} />
      <Work data={work} />
      <Education data={education} />
    </div>
  )
}
