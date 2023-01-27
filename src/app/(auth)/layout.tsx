import { unstable_getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await unstable_getServerSession()

  if (!session) return redirect('/login')

  return (
    <div>
      <section className="py-12">{children}</section>
    </div>
  )
}
