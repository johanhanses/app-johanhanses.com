import { AuthSessionProvider } from '@/components/AuthSessionProvider'
import { ColorThemeProvider } from '@/components/ColorThemeProvider'
import { Header } from '@/components/Header'
import { Jura, Noto_Serif_Display } from '@next/font/google'
import './globals.css'

const notoSerifDisplay = Noto_Serif_Display({
  variable: '--noto-serif-display',
  subsets: ['latin']
})

const jura = Jura({
  variable: '--jura',
  subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <AuthSessionProvider>
        <body
          className={`min-h-screen ${notoSerifDisplay.variable} ${jura.variable} bg-stone-200 px-6 font-jura text-black antialiased dark:bg-stone-800 dark:text-white`}
        >
          <ColorThemeProvider>
            <div className="mx-auto min-h-screen max-w-6xl border-x-[1px] border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-900">
              <Header />
              <main className="px-6 py-32">{children}</main>
            </div>
          </ColorThemeProvider>
        </body>
      </AuthSessionProvider>
    </html>
  )
}
