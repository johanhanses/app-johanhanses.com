'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const DashboardHeader = () => {
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') return router.push('/login')
  }, [router, status])

  if (status === 'authenticated') return <div>DashboardHeader</div>
  return null
}
