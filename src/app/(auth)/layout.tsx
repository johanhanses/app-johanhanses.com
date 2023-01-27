export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      {/* <DashboardHeader /> */}
      <section className="py-12">{children}</section>
    </div>
  )
}
