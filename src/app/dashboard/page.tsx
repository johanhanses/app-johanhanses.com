import { authOptions } from '@/lib/auth'
import { unstable_getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await unstable_getServerSession(authOptions)
  if (!session) redirect('/login')

  return <div>Dashboard</div>
}
