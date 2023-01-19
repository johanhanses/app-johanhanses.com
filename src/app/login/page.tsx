import { AuthForm } from '@/components/AuthForm'
import { authOptions } from '@/lib/auth'
import { unstable_getServerSession } from 'next-auth'
// import { getCsrfToken } from 'next-auth/react'

export default async function Login() {
  // const token = await getCsrfToken()
  // eslint-disable-next-line no-unused-vars
  const session = await unstable_getServerSession(authOptions)

  return (
    <div className="flex min-h-[calc(100vh-18rem)] items-center justify-center">
      <AuthForm />
    </div>
  )
}
