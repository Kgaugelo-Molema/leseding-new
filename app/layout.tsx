import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Leseding Consulting Services | Leading ICT Solutions Provider",
  description:
    "Leseding Consulting Services (LCS) is a leading South African ICT company specializing in innovative technology solutions, software development, recruitment, and skills training.",
    generator: 'v0.dev',
    icons: [
      "https://lcs.sultatech.com/images/lcs-logo.png"
    ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'