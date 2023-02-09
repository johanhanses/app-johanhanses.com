import { ALink } from '@/components/ALink'
import { PageHeading } from '@/components/PageHeading'
import { TextBlock } from '@/components/TextBlock'
import { BackButton } from '../../../components/BackButton'

export default function Gallery() {
  return (
    <article className="relative">
      <BackButton />

      <PageHeading className="pt-4 lg:pt-24">Swipeable Calendar Animation</PageHeading>

      <div className="min-h-[calc(100vh-20rem)] gap-4 lg:flex">
        <div className="lg:w-1/2">
          <TextBlock className="prose pr-8">
            <p>
              Enter and exit animations of month title and it&apos;s days. The height of the card
              container also has an animation when it&apos;s height changes.
            </p>
            <p>
              <ALink href="https://calendar.johanhanses.com">calendar.johanhanses.com</ALink>
            </p>
            <p>
              <ALink href="https:/github.com/johanhanses/buildui-calendar">
                github.com/johanhanses/buildui-calendar
              </ALink>
            </p>
          </TextBlock>
        </div>
        <iframe
          src="https://calendar.johanhanses.com"
          className="h-[500px] w-full lg:w-1/2"
        />
      </div>
    </article>
  )
}
