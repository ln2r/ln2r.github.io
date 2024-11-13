'use client'

import Link from 'next/link'
import styles from '@/styles/blog.module.scss'
import { inter } from '@/lib/fonts'
import React, {useEffect} from "react";
import dynamic from "next/dynamic";
import {MDXEditorMethods} from "@mdxeditor/editor";

const Editor = dynamic(() => import("@/lib/editor"), { ssr: false });

export default function Blog() {
  useEffect(() => {
    const handlePasteAnywhere = (event: any) => {
      console.log(event.clipboardData.getData('text'));
    };

    window.addEventListener('paste', handlePasteAnywhere);

    return () => {
      window.removeEventListener('paste', handlePasteAnywhere);
    };
  }, []);

  const ref = React.useRef<MDXEditorMethods>(null)

  return (
    <main>
      <div className={`${styles.content} ${inter.className}`}>
        {/*<center><p>are you supposed to be here? do the magic trick if yes</p></center>*/}
        <input type={'text'} placeholder={'title should be here'}/>
        <br/>
        <br/>
        <Editor/>

        <button onClick={() => console.log('from markdown', ref.current?.getMarkdown())}>Get data</button>
      </div>
    </main>
  )
}
