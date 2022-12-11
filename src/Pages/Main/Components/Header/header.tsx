import React from 'react';
import { Icon } from '../../../../Components/Icon/icon';
import style from "./header.module.css"

export const Header: React.FC = () => {
    const [inp_value, set_input_value] = React.useState<string>("")
    const inp_ref = React.useRef<HTMLInputElement>(null)
    return (
        <div className={style.container}>
            <div className={style.search}>
                <input type="text" className={style.inp} ref={inp_ref} />
            </div>
        </div>
    );
}