import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Suplio',
  description: 'Sistema de gestão de estoque, fornecedores e pedidos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + ' bg-[#0A0F20]'}>{children}</body>
    </html>
  )
}
