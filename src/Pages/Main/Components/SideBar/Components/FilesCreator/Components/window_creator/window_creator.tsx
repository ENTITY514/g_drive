import React from 'react';
import { Item } from '../Item/item';
import style from "./window_creator.module.css"



export const WindowCreator: React.FC = () => {
    return (
        <div className={style.container}>
            <Item title={"Создать папку"} icon_url={"/icons/folder.png"} action={() => { }} />
            <Item title={"Загрузить файл"} icon_url={"/icons/upload.png"} action={() => { }} />
            <Item title={"Создать документ"} icon_url={"/icons/document.png"} action={() => { }} />
            <Item title={"Создать презентацию"} icon_url={"/icons/business-presentation.png"} action={() => { }} />
            <Item title={"Создать таблицу"} icon_url={"/icons/excel.png"} action={() => { }} />
            <Item title={"Создать рисунок"} icon_url={"/icons/brush.png"} action={() => { }} />
        </div>
    );
}