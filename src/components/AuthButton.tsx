'use client'

import { signOut, useSession } from 'next-auth/react'

export const AuthButton = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session?.user?.name} <br />
        <button
          onClick={() =>
            signOut({
              callbackUrl: `${window.location.origin}`
            })
          }
        >
          Log out
        </button>
      </>
    )
  }
  return null
}
