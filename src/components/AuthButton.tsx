'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export const AuthButton = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session?.user?.name} <br />
        <button onClick={() => signOut()}>Log out</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Log in</button>
    </>
  )
}
