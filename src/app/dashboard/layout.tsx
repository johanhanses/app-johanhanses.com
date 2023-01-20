import { DashboardHeader } from '@/components/DashboardHeader'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashboardHeader />
      <section className="py-12">{children}</section>
    </div>
  )
}
