"use client"

import styles from '@/styles/test.module.scss'
import { jakarta_sans } from '@/lib/fonts'
import Image from "next/image"
import { motion, useAnimate, useReducedMotion } from "framer-motion";
import { useEffect, useState } from 'react';

export default function TestTransition() {  
  const [isClicked, setClick] = useState(false);
  const set = () => {
    setClick(!isClicked);
  }

  const container = {
    hidden: { display: "none", opacity: 0 },
    show: {
      display: "block",
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      }
    }
  }
  
  const item = {
    hidden: { display: "none", opacity: 0 },
    show: { display: "block" , opacity: 1}
  }

  return (
    <main className={`${styles.jade_main} ${jakarta_sans.className}`}>
      {/* title section */}
      <div className={`${styles.jade_content}`}> 
        <motion.div
          animate={{
            opacity: isClicked? 0 : 1,
          }}
          transition={{ 
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.5,
           }}
           className={styles.hero}
        >
          <h1 className={styles.first_name}>Jade</h1>
          <h1 className={styles.last_name}>Novanis</h1>
          <span>VTuber, Soul Mage, Guild Master</span><br />
        </motion.div>
        <motion.div
          layout
          onClick={() => set()}
          className={styles.jade}
          animate={{
            x: isClicked ? -600 : 0,
          }}  
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
        <Image 
          src={ isClicked ? "/jade-mask.png" : "/jade.png"}
          alt="jade"
          width={0}
          height={0}
          style={{ width: 'auto', height: '100%', cursor: "pointer" }}
          priority={true} 
        />
        </motion.div>
      </div>
      {/* title section */}
      {/* main section */}
      <div className={`${styles.jade_hero}`}>
        {isClicked && <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <h3>Jade Aelith Novanis</h3>
            <p>Hello all! I&apos;m Jade, GuildMaster of Reliquia, an Explorers Guild currently plundering the depths of Sepulvetrum! I&apos;m streaming directly to you via our Runic Magic! Its great to meet you!💚Im here to play games and talk openly about my Passions for Transformers, Pokemon, Yugioh, and much much more!</p>
          </motion.div>
          <motion.div variants={item}>
            <h3>Profile</h3>
            <table>
              <tr>
                <td><strong>Birthday</strong></td>
                <td>July 19</td>
              </tr>
              <tr>
                <td><strong>Debut</strong></td>
                <td>February 17</td>
              </tr>
              <tr>
                <td><strong>Affiliation</strong></td>
                <td>WaifuAlliance, Reliquia</td>
              </tr>
            </table>
          </motion.div>
          <motion.div variants={item}>
            <h3>Stream</h3>
            <iframe
                src="https://player.twitch.tv/?channel=jadenovanis&parent=ln2r.github.io&muted=true"
                height="600"
                width="900"
                allowFullScreen>
            </iframe>
          </motion.div>
        </motion.div>}
      </div>
      {/* main section */}
    </main>
  )
}