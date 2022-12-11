import React from 'react';
import { Header } from './Components/Header/header';
import { SideBar } from './Components/SideBar/sidebar';
import style from "./style.module.css"

export const Main = () => {
    return (
        <div className={style.container}>
            <div className={style.sidebar}>
                <SideBar />
            </div>
            <div className={style.main}>
                <Header />
            </div>
        </div>
    );
}