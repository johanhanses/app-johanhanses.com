'use client'

import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { Button } from './Form/Button'
import { Input } from './Form/Input'
import { Spinner } from './Spinner'
import { Toast } from './Toast'

export const AuthForm = ({ csrfToken }: { csrfToken: string }) => {
  const [values, setValues] = useState({
    csrfToken,
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

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
        router.refresh()
        return router.push(searchParams.get('from') || '/cv')
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
        className="mx-auto w-full space-y-2 sm:w-1/2 lg:w-1/3"
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
          togglevisibility={true.toString()}
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
