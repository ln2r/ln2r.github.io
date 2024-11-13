"use client"

import Link from 'next/link'
import styles from '@/styles/home.module.scss'
import {inter} from '@/lib/fonts'

export default function Page404() {
  return (
    <main>
      {/* title section */}
      <div className={`${styles.content} ${inter.className}`}>
        <p>
          wowie, you shouldn&#39;t be here you know. <Link href='/'>go back?</Link>
        </p>
      </div>
      {/* main section */}
    </main>
  )
}