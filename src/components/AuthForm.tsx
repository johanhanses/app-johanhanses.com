'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

export const AuthForm = () => {
  const router = useRouter()
  const { status } = useSession()
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')

  useEffect(() => {
    if (status === 'authenticated') router.push('/secret')
  }, [router, status])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await signIn('credentials', {
        ...values,
        redirect: false
      })
      if (response && response.ok) return router.push('/secret')
      setError('Wrong credentials...')
    } catch (error) {
      console.error(error)
      setError('Other error...')
    }
  }

  return (
    <form
      method="post"
      action="/api/auth/callback/credentials"
      className="mx-auto w-full space-y-6 sm:w-1/2 md:w-1/3"
      onSubmit={handleSubmit}
    >
      {/* <input
        name="csrfToken"
        type="hidden"
        defaultValue={csrfToken}
      /> */}
      <input
        required
        name="username"
        placeholder="Username"
        onChange={(e) => setValues({ ...values, username: e.target.value })}
      />
      <input
        required
        // toggleVisibility
        name="password"
        placeholder="Password"
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <button
        type="submit"
        title="Login"
      >
        Login
      </button>
    </form>
    // <ErrorMessage error={error} />
  )
}
