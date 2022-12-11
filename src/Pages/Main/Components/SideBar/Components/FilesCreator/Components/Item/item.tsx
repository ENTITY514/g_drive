import React from 'react';
import { Icon } from '../../../../../../../../Components/Icon/icon';
import style from "./item.module.css"

interface ItemProps {
    title: string
    icon_url: string
    action: any
}

export const Item: React.FC<ItemProps> = ({ title, icon_url, action }) => {
    return (
        <div className={style.container} onClick={() => { action() }}>
            <div className={style.icon}>
                <Icon url={icon_url} />
            </div>
            <h4 className={style.name}>{title}</h4>
        </div>
    );
}