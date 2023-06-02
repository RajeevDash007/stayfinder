import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modals from './components/Modals/Modals'

const font = Nunito({
  subsets:["latin"],
})

export const metadata = {
  title: 'StayFinder | Book your stay',
  description: 'Hotel booking platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modals isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
