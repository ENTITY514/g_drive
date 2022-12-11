import React from 'react';
import { Header } from './Components/Header/header';
import { SideBar } from './Components/SideBar/sidebar';
import style from "./style.module.css"

export const Main = () => {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.box}>
                <div className={style.sidebar}>
                    <SideBar />
                </div>
                <div className={style.main}>
                </div>
            </div>
        </div>
    );
}