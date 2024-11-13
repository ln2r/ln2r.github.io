import Link from 'next/link'
import styles from '@/styles/home.module.scss'
import { inter } from '@/lib/fonts'
import { projects } from '@/lib/projects'
import { contacts } from '@/lib/contacts'

export default function Home() {
  return (
    <main>
      <div className={`${styles.content} ${inter.className}`}> 
        <p>
          i got too much time on my hands clearly, this site just got facelift like 9 months ago, and here we are (aiming for simplistic look this time). but yes, i do backend-dev (the software kind) professionally for around 3 years now, i also play games and read sometimes
        </p>
        <br />
        <br />
        <h1>projects</h1>
        <br />
        <p> 
          noteable projects. only personal one here unfortunately, since you know, NDA and stuff
        </p>
        <ul>
          {projects.map((pj, idx) => {
            return <div key={idx}>
              <li>
                {pj.url ? <Link href={pj.url}>{pj.title}</Link> : pj.title}: {pj.description}
              </li>
              <br />
            </div>
          })}
        </ul>
        <h1>contacts</h1>
        <br />
        <p>
          how to reach me and stuff<br />
          <br />
          {contacts.map((ct, idx) => {
            return <span key={idx}><Link href={ct.url}>{ct.platform}</Link>&nbsp;&nbsp;&nbsp;</span>
          })}
        </p>
      </div>
    </main>
  )
}
