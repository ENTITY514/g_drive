import React from 'react';
import { Icon } from '../../../../Components/Icon/icon';
import style from "./header.module.css"

export const Header: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <Icon url="/icons/document.png" />
            </div>
            <h1 className={style.name}>Документ</h1>
        </div>
    );
}