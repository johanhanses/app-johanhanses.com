'use client'

import { Button } from '@/components/Form/Button'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[calc(100vh-24rem)] items-center justify-center">
      <div className="max-w-md space-y-4 text-center">
        <p>(Error) in the house of flies</p>
        <p>Error: {error.message}</p>
        <Button onClick={() => reset()}>try again</Button>
      </div>
    </div>
  )
}
