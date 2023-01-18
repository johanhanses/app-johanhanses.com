import { AuthForm } from '@/components/AuthForm'
import { getCsrfToken } from 'next-auth/react'

export default async function Login() {
  const token = await getCsrfToken()
  console.log(token)

  return <AuthForm />
}
