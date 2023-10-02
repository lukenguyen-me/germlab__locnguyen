import type { Metadata } from 'next'
import { fontCaros } from '@/fonts'
import classNames from 'classnames'
import 'animate.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Loc Nguyen Porfolio',
  description: 'A programmer, freelancer, and indie hacker.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={classNames(fontCaros.variable, 'font-sans text-primary')}>{children}</body>
    </html>
  )
}
