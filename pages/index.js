import Head from 'next/head'
import styles from '../styles/index.module.scss'
import Image from 'next/image'

const imageLoader = ({src}) => {
  return `https://i.imgur.com/${src}`
}


export function getStaticProps() {
  const userData = require('../public/data.json');

  return {
    props: {
      userData
    }
  }
}

export default function Home({ userData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ln2rworks / ln2r - Portfolio</title>
        <meta name="description" content="ln2r's portfolio page" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Hello!</h1>
          <br />
          <br />
          <h1>I&apos;m <b>Rizky Sedyanto</b><span className={styles.details}>, just another software engineer who like to make simple and minimalist <em>stuff</em>.</span></h1>
          <br />
          <a href="#background">Learn More</a>
          <a href="#experiences">Experiences</a>
          <a href="#projects">Stuff Done</a>
        </div>
        <div className={styles.contentWrapper} id="background">
          <div className={styles.backgroundWrapper}>
            <div className={styles.title}>
              <h1>Background</h1>
            </div>
            <div className={styles.content}>
              <p>
              A freshly graduated student from <b>Universitas Komputer Indonesia</b> with a bachelor degree in Informatic Engineering. 
              <br /><br />
              My experience in software engineering maybe isn&apos;t that much, but I <b>always eager to discover and learn new stuff</b> along the way. When making stuff I always try to have efficiency, ease to use, and scalability in mind. 
              <br /><br />
              <b>When I&apos;m not learning or making stuff</b>, You can find me adventuring around in Black Desert Online, or some other video games.
              </p>            
            </div>  
          </div>
          <div className={styles.skillsWrapper}>
            <div className={styles.title}>
              <h1>Skills</h1>
            </div>
            <div className={styles.content}>
              {
                userData.skills.map((skill, index) => {
                  return <div key={`skill-${index}`} className={styles.contentList}>
                    <h1>{skill.title}</h1>
                    <ul>
                      {skill.content.map((content, index) => {
                        return <li key={`skill-content-${index}`}>{content}</li>
                      })
                      }
                    </ul>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper} id="experiences">
          <div className={styles.experiencesWrapper}>
            <div className={styles.title}>
              <h1>Experiences</h1>
            </div>
            <div className={styles.content}>
              {
                userData.experiences.map((experience, index) => {
                  return <div key={`skill-${index}`} className={styles.contentList}>
                    <span className={styles.meta}><h1>{experience.title}</h1><p>{experience.duration}</p></span>
                    <p>{experience.postition}</p>                    
                    <ul><li>{experience.description}</li></ul>
                  </div>
                })
              }
            </div>
          </div>
          <div className={styles.certificationsWrapper}>
            <div className={styles.title}>
              <h1>Certifications</h1>
            </div>
            <div className={styles.content}>
              {
                userData.certifications.map((certification, index) => {
                  return <div key={`skill-${index}`} className={styles.contentList}>
                    <span className={styles.meta}><h1>{certification.title}</h1><p>{certification.issued}</p></span>
                    <p>{certification.organization}</p>          
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper} id="projects">
          <div className={styles.projectsWrapper}>
            <div className={styles.title}>
              <h1>Projects</h1>
            </div>
            <div className={styles.content}>
              {
                userData.projects.map((project, index) => {
                  return <div key={`skill-${index}`} className={styles.contentList}>
                    {/* only show demo if its exist */}
                    {(project.demo)? <div key={`skill-image-container-${index}`} className={styles.imageContainer}>
                      <Image loader={imageLoader} src="PpyAamr.png" alt="Project GIF demo should be here." width={1200} height={400} />
                    </div> : ""}

                    <div className={styles.description}>
                      <span className={styles.meta}><h1>{project.title}</h1><p>{project.duration}</p></span>                    
                      {
                        (project.url.length != 0)? <span className={styles.url}>{project.url.map((url, index) => {
                          return <a target="_blank" rel="noreferrer" href={url.link} key={`project-url-${index}`}>{url.text}</a>
                        })} </span>: ""
                      }
                      <p>{project.description}</p>
                      <span className={styles.tags}>
                        {
                          project.tags.map((tag, index) => {
                            return <span key={`project-tag-${index}`}>{tag}</span>
                          })
                        }
                      </span>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.credits}>
          <a target="_blank" rel="noreferrer" href="https://github.com/ln2r">Made by ln2r (Rizky Sedyanto)</a><br />
          <a target="_blank" rel="noreferrer" href="https://github.com/bchiang7">Inspired by Brittany Chiang</a>
        </div>
        <div className={styles.socials}>
          <a target="_blank" rel="noreferrer" href="https://github.com/ln2r">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
