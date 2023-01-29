import { ALink } from '@/components/ALink'
import { PageHeading } from '@/components/PageHeading'
import { TextBlock } from '@/components/TextBlock'
import { BackButton } from '../../../components/BackButton'

export default function Wizard() {
  return (
    <article className="relative">
      <BackButton />

      <PageHeading className="pt-4 lg:pt-24">Animation a SVG path wizard</PageHeading>

      <div className="min-h-[calc(100vh-20rem)] gap-4 lg:flex">
        <div className="lg:w-1/2">
          <TextBlock className="prose pr-8">
            <p>Using React, Tailwindcss and Framer Motion.</p>
            <p>
              <ALink href="https://steps.johanhanses.com">steps.johanhanses.com</ALink>
            </p>
            <p>
              <ALink href="https://github.com/johanhanses/buildui-multistep-wizard">
                github.com/johanhanses/buildui-multistep-wizard
              </ALink>
            </p>
          </TextBlock>
        </div>
        <iframe
          src="https://steps.johanhanses.com"
          className="min-h-[calc(100vh-16rem)] w-full lg:w-1/2"
        />
      </div>
    </article>
  )
}
