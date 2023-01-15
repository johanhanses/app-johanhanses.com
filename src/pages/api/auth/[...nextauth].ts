import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'username'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username
          }
        })

        if (user && bcrypt.compareSync(credentials!.password, user.password)) {
          return {
            id: user.id,
            username: user.username
          } as any
        }

        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) token.user = user
      return token
    },
    session: ({ session, token }) => {
      if (token && session) session.user = { name: (token.user as User).username }
      return session
    }
  }

  // pages: {
  //   signIn: '/auth/login/'
  // }
})
