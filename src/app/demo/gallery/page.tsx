import { ALink } from '@/components/ALink'
import { PageHeading } from '@/components/PageHeading'
import { TextBlock } from '@/components/TextBlock'
import { BackButton } from '../../../components/BackButton'

export default function Gallery() {
  return (
    <article className="relative">
      <BackButton />

      <PageHeading className="pt-4 lg:pt-24">IOS Photo gallery</PageHeading>

      <div className="min-h-[calc(100vh-20rem)] gap-4 lg:flex">
        <div className="lg:w-1/2">
          <TextBlock className="prose pr-8">
            <p>
              Photos carousel with thumbnail preview at the bottom as the IOS Photo gallery app.
              Built during a <ALink href="https://buildui.com">buildui.com</ALink> workshop using
              React, Tailwindcss and Framer Motion.
            </p>
            <p>
              <ALink href="https://transitions.johanhanses.com">transitions.johanhanses.com</ALink>
            </p>
            <p>
              <ALink href="https://github.com/johanhanses/buildui-IOS-carousel">
                github.com/johanhanses/buildui-IOS-carousel
              </ALink>
            </p>
          </TextBlock>
        </div>
        <iframe
          src="https://transitions.johanhanses.com"
          className="h-[550px] w-full md:h-[800px] lg:h-[600px] lg:w-1/2"
        />
      </div>
    </article>
  )
}
