import React from 'react';
import { Icon } from '../../../../../../Components/Icon/icon';
import style from "./file_creator.module.css"

export const FileCreator: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <Icon url="/icons/plus.png" />
            </div>
            <h3 className={style.name}>Создать</h3>
        </div>
    );
}