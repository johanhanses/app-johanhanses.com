import { AuthSessionProvider } from '@/components/AuthSessionProvider'
import { ColorThemeProvider } from '@/components/ColorThemeProvider'
import { Header } from '@/components/Header'
import { Karla, Playfair_Display } from '@next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--playfair',
  subsets: ['latin']
})

const karla = Karla({
  variable: '--karla',
  subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <AuthSessionProvider>
        <body
          className={`min-h-screen ${playfair.variable} ${karla.variable} bg-zinc-50 font-karla text-black antialiased dark:bg-black dark:text-white sm:px-4`}
        >
          <ColorThemeProvider>
            <div className="relative mx-auto min-h-screen w-full max-w-7xl bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
              <Header />
              <main className="px-4 pt-40 pb-24 md:px-8 lg:px-16">{children}</main>
            </div>
          </ColorThemeProvider>
        </body>
      </AuthSessionProvider>
    </html>
  )
}
