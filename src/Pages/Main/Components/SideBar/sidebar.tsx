import React from 'react';
import { Icon } from '../../../../Components/Icon/icon';
import { FileCreator } from './Components/FilesCreator/file_creator';
import { Header } from './Components/Header/header';
import style from "./sidebar.module.css"

export const SideBar: React.FC = () => {
    return (
        <div className={style.container}>
            <Header />
            <FileCreator />
        </div>
    );
}