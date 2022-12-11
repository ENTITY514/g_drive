import React from 'react';
import { Auth } from './components/auth/auth';
import { Registration } from './components/registration/registration';
import style from "./style.module.css"

export const AuthPage = () => {
    const [is_registr, set_is_registration] = React.useState(true)
    return (
        <div className={style.container}>
            <div className={style.choose}>
                <div className={is_registr ? style.choose_active : style.choose_unactive} onClick={() => { set_is_registration(true) }}>Регистрация</div>
                <div className={is_registr ? style.choose_active : style.choose_unactive} onClick={() => { set_is_registration(false) }}>Вход</div>
            </div>
            {
                is_registr ?
                    <Registration />
                    :
                    <Auth />
            }
        </div>
    );
}