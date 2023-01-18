'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { Button } from './Form/Button'
import { Input } from './Form/Input'
import { Spinner } from './Spinner'
import { Toast } from './Toast'

export const AuthForm = ({ csrfToken }: { csrfToken: string }) => {
  const router = useRouter()
  const { status } = useSession()
  const [values, setValues] = useState({
    csrfToken,
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (status === 'authenticated') router.push('/')
  }, [router, status])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    setError('')
    e.preventDefault()

    try {
      const response = await signIn('credentials', {
        ...values,
        redirect: false
      })

      if (response && response.ok) {
        setLoading(false)
        return router.push('/')
      }

      setError('Wrong credentials...')
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError('Other error...')
      setLoading(false)
    }
  }

  return (
    <>
      <form
        className="mx-auto w-full sm:w-1/2 md:w-1/3"
        onSubmit={handleSubmit}
      >
        <Input
          autoCapitalize="none"
          autoComplete="username"
          autoCorrect="off"
          disabled={loading}
          required
          name="username"
          placeholder="Username"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <Input
          required
          toggleVisibility
          name="password"
          disabled={loading}
          placeholder="Password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <Button
          type="submit"
          title="Login"
          disabled={loading}
        >
          {loading ? <Spinner /> : 'Login'}
        </Button>
      </form>
      <Toast
        message={error}
        type="error"
      />
    </>
  )
}
