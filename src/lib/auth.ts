import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
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
    async jwt({ token, user }) {
      let dbUser
      if (token.user) {
        dbUser = await prisma.user.findFirst({
          where: {
            username: (token.user as User).username
          }
        })
      }

      if (!dbUser) {
        token.user = user
        return token
      }

      return {
        name: dbUser.username,
        email: null,
        image: null
      }
    },
    session: ({ session, token }) => {
      if (token && session) session.user = { name: token.name }

      return session
    }
  },
  pages: {
    signIn: '/login'
  }
}
