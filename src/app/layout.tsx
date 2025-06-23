import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ここに会社名 - AIで進化する経営、改革の第一歩をともに",
  description: "革新的なソリューションで企業の成長を加速させ、デジタル変革の最前線を切り拓きます",
  keywords: "テクノロジー, DX, システム開発, AI, クラウド, コンサルティング",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
