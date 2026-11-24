import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Manmeet Singh | macOS Portfolio',
  description: 'Portfolio of Manmeet Singh, Computer Science Engineering undergrad at Delhi Technological University (DTU). Full Stack & Systems Developer, SDE Intern at Accelryde Technologies.',
  keywords: ['Manmeet Singh', 'Portfolio', 'macOS', 'DTU', 'Full Stack Developer', 'Software Engineer', 'React', 'Node.js', 'Python'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children} <Analytics /></body>
    </html>
  )
}
