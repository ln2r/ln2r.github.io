'use client';
// You can use this code in a separate component that's imported in your pages.
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeBlockEditorDescriptor, CreateLink, imagePlugin, InsertCodeBlock, InsertImage, linkDialogPlugin,
  ListsToggle,
  toolbarPlugin, UndoRedo
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import styles from '@/styles/editor.module.scss';
import React from 'react';
const { MDXEditor , codeBlockPlugin, headingsPlugin, listsPlugin, linkPlugin, quotePlugin, markdownShortcutPlugin, useCodeBlockEditorContext } = await import('@mdxeditor/editor')

const PlainTextCodeEditorDescriptor: CodeBlockEditorDescriptor = {
  match: () => true,
  priority: 0,
  Editor: (props) => {
    const cb = useCodeBlockEditorContext()
    return (
      <div onKeyDown={(e) => e.nativeEvent.stopImmediatePropagation()}>
        <textarea rows={3} cols={20} defaultValue={props.code} onChange={(e) => cb.setCode(e.target.value)} />
      </div>
    )
  }
}

const Editor = () => {
  return <MDXEditor
    onChange={console.log}
    markdown={'like everything, perhaps, this is hell'}
    className={styles.editor}
    plugins={[
      toolbarPlugin({
        toolbarContents: () => (
          <>
            <BoldItalicUnderlineToggles />
            <ListsToggle />
            <BlockTypeSelect />
            <CreateLink />
            <UndoRedo />
            <InsertCodeBlock />
            <InsertImage />
          </>
        )
      }),
      codeBlockPlugin({ codeBlockEditorDescriptors: [PlainTextCodeEditorDescriptor] }),
      headingsPlugin(),
      listsPlugin(),
      linkPlugin(),
      linkDialogPlugin({}),
      imagePlugin({}),
      quotePlugin(),
      markdownShortcutPlugin()
    ]}
  />
}

export default Editor