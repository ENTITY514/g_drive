import React from 'react';
import { Icon } from '../../../../Components/Icon/icon';
import { useAppDispatch, useAppSelector } from '../../../../Store/hooks/redux';
import { set_name } from '../../../../Store/reducers/user_slice';
import ToolPanel from '../ToolPanel';
import style from "./header.module.css"

export const Header: React.FC = () => {
    const state = useAppSelector(state => state.UserSlice)
    const [name, set_name_] = React.useState(state.name)
    const inp_ref = React.useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()
    const handlerChange = () => {
        if (inp_ref.current !== null) {
            set_name_(inp_ref.current.value)
            dispatch(set_name(inp_ref.current.value))
        }
    }
    return (
        <div className={style.container}>
            <div className={style.head}>
                <div className={style.icon}>
                    <Icon url="/icons/document.png" />
                </div>
                <input ref={inp_ref} className={style.name} onChange={handlerChange} value={name} />
            </div>
            <div className={style.tools}>
                <ToolPanel />
            </div>
        </div>
    );
}