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

  // if (status === 'authenticated')
  //   return (
  //     <div>
  //       <nav className="border-b py-2">
  //         <ul className="flex gap-3">
  //           <li>
  //             <Link
  //               href="/dashboard/cv"
  //               className="hover:underline"
  //             >
  //               CV
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               href="/dashboard/cover-letter"
  //               className="hover:underline"
  //             >
  //               Cover letter
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               href="#"
  //               className="hover:underline"
  //             >
  //               Add content
  //             </Link>
  //           </li>
  //         </ul>
  //       </nav>
  //     </div>
  //   )
  return null
}
