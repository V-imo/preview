import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "V&apos;imo",
  description: "The V&apos;imo app is the best way to manage your inspections",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
