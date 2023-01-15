import { ColorThemeProvider } from '@/components/ColorThemeProvider'
import { Noto_Serif_Display } from '@next/font/google'
import './globals.css'

const notoSerifDisplay = Noto_Serif_Display({
  variable: '--noto-serif-display',
  subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`min-h-screen ${notoSerifDisplay.variable} px-6 font-notoSerifDisplay antialiased`}>
        <ColorThemeProvider>{children}</ColorThemeProvider>
      </body>
    </html>
  )
}
