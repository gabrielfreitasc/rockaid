
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'RockAid - Transformando vidas com a força da solidariedade',
  description: 'Associação Rock Aid: uma organização sem fins lucrativos que combate a pobreza e transforma vidas em Uberlândia. Mais de 10.000 refeições servidas e 500 cestas básicas distribuídas.',
  keywords: 'RockAid, solidariedade, ONG, Uberlândia, combate à pobreza, refeições, cestas básicas, voluntariado',
  authors: [{ name: 'Associação Rock Aid' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
