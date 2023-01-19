import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const isAuth = !!token
  console.log(isAuth)
  // const isAuthPage = req.nextUrl.pathname.startsWith('/login')
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/login') ||
    pathname === '/' ||
    pathname.startsWith('/about') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // if (isAuthPage) {
  //   if (isAuth) {
  //     return NextResponse.redirect(new URL('/cv', req.url))
  //   }

  //   return null
  // }

  if (!isAuth) {
    console.log('here')
    // let from = req.nextUrl.pathname
    // if (req.nextUrl.search) {
    //   from += req.nextUrl.search
    // }

    req.nextUrl.pathname = '/login'
    return NextResponse.redirect(req.nextUrl)

    // return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, req.url))
  }

  return NextResponse.next()
}
// {
//   callbacks: {
//     async authorized() {
//       // This is a work-around for handling redirect on auth pages.
//       // We return true here so that the middleware function above
//       // is always called.
//       return true
//     }
//   }
// }

// export const config = {
//   // matcher: ['/dashboard/:path*', '/editor/:path*', '/login', '/register']
//   matcher: ['/dashboard', '/cv', '/login']
// }
