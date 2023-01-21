import { Spinner } from '@/components/Icons/Spinner'

export default function loading() {
  return (
    <div className="flex min-h-[calc(100vh-18rem)] items-center justify-center">
      <Spinner className="h-16 w-16" />
    </div>
  )
}
