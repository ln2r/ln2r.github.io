import type { Metadata } from 'next'
import '../styles/globals.scss'
import { inter, redacted } from '@/lib/fonts'
import { RandomType, getRandom } from '@/lib/random'
import Link from 'next/link';
import Transition from '@/components/transition/transition';

const today = new Date();

export const metadata: Metadata = {
  title: 'Home - ln2rworks // ln2r',
  description: 'Portofolio page for ln2rworks/ln2r',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='header'>
          <div className='left'>
            <p><Link href='#' className='secret'>▲</Link>  online</p>
          </div>
          <div className='right'>
            <p>WD&nbsp;&nbsp;&nbsp;&nbsp;24&nbsp;&nbsp;&nbsp;&nbsp;01</p>
            <p>PORT-2 - <span className={redacted.className}>{Math.floor(Math.random() * 1423)}</span></p>
          </div>
        </header>
        <Transition>
          {children}
        </Transition>
        <footer className='footer'>
          <p>Inspired by <Link href='https://p5aholic.me/'>Keita Yamada</Link></p>
          <p>{`${getRandom(3, RandomType.LETTERS)}-${today.getUTCFullYear()}${today.getUTCMonth()}${today.getUTCDate()}-${getRandom(12, RandomType.MIXED)}`}</p>
        </footer>
      </body>
    </html>
  )
}
