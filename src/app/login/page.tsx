import { AuthForm } from '@/components/AuthForm'

export default async function Login() {
  // const session = await unstable_getServerSession(authOptions)
  // if (session) return redirect('/dashboard')

  return (
    <div className="flex min-h-[calc(100vh-18rem)] items-center justify-center">
      <AuthForm />
    </div>
  )
}
