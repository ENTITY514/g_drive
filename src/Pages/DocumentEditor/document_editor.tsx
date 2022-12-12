import React from 'react';
import { Header } from './Components/Header/header';
import TextEditor, { TextEditorProvider } from './Components/TextEditor';
import style from "./style.module.css"

export const DocumentEditor = () => {
    return (
        <TextEditorProvider >
            <div className={style.container}>
                <Header />
                <div className={style.box}>
                    <TextEditor />
                </div>
            </div>
        </TextEditorProvider>
    )
}