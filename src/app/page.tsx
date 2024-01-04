import { RandomType, getRandom } from '@/lib/random'
import styles from '../styles/page.module.scss'
import { inter, inter_light, redacted } from '@/lib/fonts'

const today = new Date();

export default function Home() {
  return (
    <main className={inter.className}>
      <header className={styles.header}>
        <div>
          <p>WD&nbsp;&nbsp;&nbsp;&nbsp;24&nbsp;&nbsp;&nbsp;&nbsp;01</p>
          <p>PORT-2 - <span className={redacted.className}>{Math.floor(Math.random() * 1423)}</span></p>
        </div>
      </header>
      {/* title section */}
      <div className={`${styles.title} ${inter_light.className}`}> 
        <h1>ln2rworks // <span className={styles.bold}>ln2r</span> <sup className={styles.super}>(el-en-too-ar)</sup></h1>
        <p>Rizky Sedyanto - Developer</p>
      </div>
      {/* title section */}
      {/* main section */}
      <div className={`${styles.main} ${inter_light.className}`}>
        <p>Dragged into digital world and software engineering realms thanks to video games and endless free time. Currently working full time as Back-End Developer.</p>
        {/* content section */}
        <div className={styles.content}>
          <ul>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        {/* content section */}
      </div>
      {/* main section */}
      {/* footer section */}
      <div className={styles.footer}>
        <p>Inspired by <a href='https://p5aholic.me/'>Keita Yamada</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${getRandom(3, RandomType.LETTERS)}-${today.getUTCFullYear()}${today.getUTCMonth()}${today.getUTCDate()}-${getRandom(12, RandomType.MIXED)}`}</p>
      </div>
      {/* footer section */}
    </main>
  )
}
