import React from 'react';
import { Header } from './Components/Header/header';
import TextEditor, { TextEditorProvider } from './Components/TextEditor';
import ToolPanel from './Components/ToolPanel';
import style from "./style.module.css"

export const DocumentEditor = () => {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.box}>
                <TextEditorProvider >
                    <ToolPanel />
                    <TextEditor />
                </TextEditorProvider>
            </div>
        </div>
    )
}