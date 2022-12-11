import React from 'react';
import { FileCreator } from './Components/FilesCreator/file_creator';
import style from "./sidebar.module.css"

export const SideBar: React.FC = () => {
    return (
        <div className={style.container}>
            <FileCreator />
        </div>
    );
}