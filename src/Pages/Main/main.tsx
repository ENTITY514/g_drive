import { RSAKey, cryptico } from '@daotl/cryptico';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../Components/Icon/icon';
import { useAppDispatch } from '../../Store/hooks/redux';
import { set_data, set_id, set_name } from '../../Store/reducers/user_slice';
import { Header } from './Components/Header/header';
import { SideBar } from './Components/SideBar/sidebar';
import style from "./style.module.css"

export const Main = () => {
    let Data: { name: string, data: string, id: string }[] = []
    const Documents = localStorage.getItem("documents")
    if (Documents !== null) {
        Data = JSON.parse(Documents) as Array<{ name: string, data: string, id: string }>
    }
    const key: RSAKey = cryptico.generateRSAKey("iman", 1024)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
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
                            const data = cryptico.decrypt(file.data, key) as { status: string, plaintext: string }

                            return (
                                <div className={style.File} key={file.id} id={file.id} onDoubleClick={() => {
                                    dispatch(set_name(name.plaintext))
                                    dispatch(set_data(data.plaintext))
                                    dispatch(set_id(file.id))
                                    navigate("/document_editor")
                                }}>
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