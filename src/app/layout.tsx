import { ReactNode } from 'react'
import './globals.scss'
import { Inter } from 'next/font/google'
import { Content, DarkMode, Footer, Header } from '@/components'
import Provider from '@/app/provider'
import ProgressBarProvider from '@/components/layout/ProgressBarProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OldLit',
  description: 'Old literature Book Store',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex min-h-screen flex-col dark:bg-black`}
      >
        <Provider>
          <ProgressBarProvider>
            <Header />
            {modal}
            <Content>{children}</Content>
            <DarkMode />
            <Footer />
          </ProgressBarProvider>
        </Provider>
      </body>
    </html>
  )
}
