import { RSAKey, cryptico } from '@daotl/cryptico';
import React from 'react';
import { Icon } from '../../Components/Icon/icon';
import { Header } from './Components/Header/header';
import { SideBar } from './Components/SideBar/sidebar';
import style from "./style.module.css"

export const Main = () => {
    let Data: { name: string, data: string }[] = []
    const Documents = localStorage.getItem("documents")
    if (Documents !== null) {
        Data = JSON.parse(Documents) as Array<{ name: string, data: string }>
    }
    const key: RSAKey = cryptico.generateRSAKey("iman", 1024)
    return (
        <div className={style.container}>
            <Header />
            <div className={style.box}>
                <div className={style.sidebar}>
                    <SideBar />
                </div>
                <div className={style.main}>
                    {
                        Data.map((file) => {
                            const name = cryptico.decrypt(file.name, key) as { status: string, plaintext: string }
                            return (
                                <div className={style.File}>
                                    <div className={style.icon_wrapper}>
                                        <Icon url="/icons/document.png" />
                                    </div>
                                    <div className={style.name}>{name.plaintext}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}