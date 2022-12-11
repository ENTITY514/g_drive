import React from 'react';
import style from "./style.module.css"

interface IconProps {
    url: string
}

export const Icon: React.FC<IconProps> = ({ url }) => {
    return (
        <div className={style.container}>
            <div className={style.image} style={{ backgroundImage: "url(" + url + ")" }}></div>
        </div>
    );
}