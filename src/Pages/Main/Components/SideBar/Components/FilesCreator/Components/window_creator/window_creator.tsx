import React from 'react';
import { Item } from '../Item/item';
import style from "./window_creator.module.css"
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../../../../../../../Store/hooks/redux';
import { set_name } from '../../../../../../../../Store/reducers/user_slice';



export const WindowCreator: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const create_document = () => {
        dispatch(set_name("Документ без названия"))
        navigate("/document_editor")
    }
    return (
        <div className={style.container}>
            <Item title={"Создать папку"} icon_url={"/icons/folder.png"} action={() => { }} />
            <Item title={"Загрузить файл"} icon_url={"/icons/upload.png"} action={() => { }} />
            <Item title={"Создать документ"} icon_url={"/icons/document.png"} action={() => { create_document() }} />
            <Item title={"Создать презентацию"} icon_url={"/icons/business-presentation.png"} action={() => { }} />
            <Item title={"Создать таблицу"} icon_url={"/icons/excel.png"} action={() => { }} />
            <Item title={"Создать рисунок"} icon_url={"/icons/brush.png"} action={() => { }} />
        </div>
    );
}