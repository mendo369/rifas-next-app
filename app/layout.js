import Nav from './components/Nav'
import SideBar from './components/SideBar'

import '@/styles/global.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SideBar />
        <main className='ml-20 w-8/10 h-screen max-h-screen'>
          <Nav />
          <div className='max-h-full overflow-y-scroll pt-10'>
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}
