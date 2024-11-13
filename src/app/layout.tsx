import type { Metadata } from 'next'
import '../styles/globals.scss'
import '@mdxeditor/editor/style.css'
import { inter, redacted } from '@/lib/fonts'
import { RandomType, getRandom } from '@/lib/random'
import Link from 'next/link';
import React from "react";

const today = new Date();

export const metadata: Metadata = {
  title: 'ln2r / ln2rworks',
  description: 'ln2r stuff here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <div className='flavour'>
              <div className='left'>
                <p><Link href='#' className='secret'>▲</Link>  online</p>
              </div>
              <div className='right'>
                <p>WD&nbsp;&nbsp;&nbsp;&nbsp;24&nbsp;&nbsp;&nbsp;&nbsp;01</p>
                <p>PORT-2 - <span className={redacted.className}>{Math.floor(Math.random() * 1423)}</span></p>
              </div>
            </div>
            <div className='block'>
              <div className='info'>
                <div className='cat'>
                  <p>
                  　／l、<br />
                  （ﾟ､ ｡ ７<br />
                  　l、~ ヽ<br />
                  　ししと )ノ<br />
                  </p>
                </div>
                <div className='name'>
                  <h1>ln2r / ln2rworks</h1>
                </div>
              </div>
            </div>
            <div className='menu'>
              <ul>
                <li><Link href='/'>home</Link></li>
              </ul>
            </div>
        </header>
        {children}
        <footer>
          <p className='tag'>{`${getRandom(3, RandomType.LETTERS)}-${today.getUTCFullYear()}${today.getUTCMonth()}${today.getUTCDate()}-${getRandom(12, RandomType.MIXED)}`}</p>
          <div className='cat'>
              <p>
              　／l、&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
              （ﾟ､ ｡ ７&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
              　l、~ ヽ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
              　ししと )ノ&nbsp;<br />
              </p>
            </div>
        </footer>
      </body>
    </html>
  )
}
