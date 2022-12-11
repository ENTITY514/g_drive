import React from 'react';
import style from "./style.module.css"
import { useNavigate } from "react-router-dom";

interface IUserAuthData {
    username: string,
    password: string
}

export const Auth = () => {
    const navigate = useNavigate()
    const [auth_data, set_auth_data] = React.useState<IUserAuthData>(() => {
        return {
            username: "",
            password: "",
        } as IUserAuthData
    })

    const changeInputAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()
        set_auth_data(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const submit = () => {


        if (auth_data.username === localStorage.getItem("userName") && auth_data.password === localStorage.getItem("password")) {
            navigate("/main")
        }
    }

    return (
        <div className={style.container}>
            <p className={style.inp}>Name: <input
                type="username"
                id="username"
                name="username"
                value={auth_data.username}
                onChange={changeInputAuth}
            /></p>
            <p className={style.inp}>Passowrd: <input
                type="password"
                id="password"
                name="password"
                value={auth_data.password}
                onChange={changeInputAuth}
            /></p>
            <button className={style.submit} onClick={submit}>Войти</button>
        </div>
    );
}