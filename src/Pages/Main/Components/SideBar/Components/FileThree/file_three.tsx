import React from 'react';
import { Icon } from '../../../../../../Components/Icon/icon';
import style from "./file_three.module.css"

export const FileThree: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <Icon url="/icons/plus.png" />
            </div>
            <h3 className={style.name}>Создать</h3>
        </div>
    );
}