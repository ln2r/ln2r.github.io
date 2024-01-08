import { projects } from '@/lib/projects'
import styles from '../../styles/projects.module.scss'
import { inter_light } from '@/lib/fonts'
import { Accordion } from '@/components/accordion/accordion'
import { motion } from 'framer-motion'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - ln2rworks // ln2r',
  description: 'Portofolio page for ln2rworks/ln2r',
}

export default function Home() {
  return (
    <main>
      {/* title section */}
      <div className={`${styles.title} ${inter_light.className}`}> 
        <a href='/'>&gt; ln2rworks // projects+</a>
      </div>
      {/* title section */}
      {/* main section */}
      <div className={`${styles.main} ${inter_light.className}`}>
        <Accordion data={projects} />
      </div>
      {/* main section */}
      <a className={styles.back} href='/'>←</a>
    </main>
  )
}
