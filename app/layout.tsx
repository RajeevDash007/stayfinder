import './globals.css'

import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/Modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

const font = Nunito({
  subsets:["latin"],
})

export const metadata = {
  title: 'StayFinder | Book your stay',
  description: 'Hotel booking platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser =  await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
