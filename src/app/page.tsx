import Link from 'next/link'
import styles from '../styles/page.module.scss'
import { inter_light } from '@/lib/fonts'

export default function Home() {
  return (
    <main>
      {/* title section */}
      <div className={`${styles.title} ${inter_light.className}`}> 
        <h1>ln2rworks // <span className={styles.bold}>ln2r</span> <sup className={styles.super}>(el-en-too-ar)</sup></h1>
        <p>Rizky Sedyanto - Developer</p>
      </div>
      {/* title section */}
      {/* main section */}
      <div className={`${styles.main} ${inter_light.className}`}>
        <div className={styles.subtitle}>
          <p>Dragged into digital world and software engineering realms thanks to video games and endless free time. Currently working full time as Back-End Developer.&nbsp;&nbsp;</p>
        </div>
        <p><Link href='/projects'>Projects</Link></p>
        <p><Link href='https://github.com/ln2r'>Contact</Link></p>
      </div>
      {/* main section */}
    </main>
  )
}
