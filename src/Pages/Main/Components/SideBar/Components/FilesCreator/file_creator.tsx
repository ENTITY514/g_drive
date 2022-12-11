import React from 'react';
import { Icon } from '../../../../../../Components/Icon/icon';
import { WindowCreator } from './Components/window_creator/window_creator';
import style from "./file_creator.module.css"

export const FileCreator: React.FC = () => {
    const [window_open, set_window_open] = React.useState<boolean>(false)
    return (
        <div className={style.container} onClick={() => { set_window_open(prev => !prev) }}>
            <div className={style.icon}>
                <Icon url="/icons/plus.png" />
            </div>
            <h3 className={style.name}>Создать</h3>
            {
                window_open
                    ?
                    <div>
                        <div className={style.bg} onClick={() => { console.log("click");
                        }}></div>
                        <WindowCreator />
                    </div>
                    :
                    null
            }
        </div >
    );
}