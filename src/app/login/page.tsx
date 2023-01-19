import { AuthForm } from '@/components/AuthForm'
import { getCsrfToken } from 'next-auth/react'

export default async function Login() {
  const token = await getCsrfToken()

  return (
    <div className="flex min-h-[calc(100vh-18rem)] items-center justify-center">
      <AuthForm csrfToken={token as string} />
    </div>
  )
}
