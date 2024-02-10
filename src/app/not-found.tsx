"use client"

import Link from 'next/link'
import styles from '../styles/page.module.scss'
import { inter_light } from '@/lib/fonts'
import { usePathname } from 'next/navigation'

export default function Page404() {
  return (
    <main>
      {/* title section */}
      <div className={`${styles.title} ${inter_light.className}`}> 
        <h1><span className={`${styles.bold} ${styles.red}`}>ANOMALY DETECTED</span></h1>
        <span>ALIGNMENT PATH: {usePathname()}</span><br />
        <span>STATUS: OUT_OF_BOUNDS</span>
      </div>
      {/* title section */}
      {/* main section */}
      <div className={`${styles.main} ${inter_light.className}`}>
        <div className={styles.subtitle}>
          <p>You tried to follow the directions, but only managed to get stuck between dimension</p>
        </div>
        <p><Link href='/'>&gt; Get me out of here</Link></p>
      </div>
      {/* main section */}
    </main>
  )
}