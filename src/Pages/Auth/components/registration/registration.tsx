import React from 'react';
import style from "./style.module.css"
import { cryptico, RSAKey } from '@daotl/cryptico'

interface IUserRegData {
    username: "",
    email: "",
    password: "",
    phone_number: "",
}

export const Registration = () => {
    const [registr_data, set_registr_data] = React.useState<IUserRegData>(() => {
        return {
            username: "",
            email: "",
            password: "",
            phone_number: "",
        } as IUserRegData
    })

    const changeInputRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()
        set_registr_data(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const submit = () => {
        localStorage.setItem("userName", registr_data.username)
        localStorage.setItem("email", registr_data.email)
        localStorage.setItem("password", registr_data.password)
        localStorage.setItem("phone_number", registr_data.phone_number)
        console.log(registr_data);
        var Bits = 1024;
        const key: RSAKey = cryptico.generateRSAKey(registr_data.username + "__" + registr_data.password + "__" + registr_data.email, 1024)
        var MattsPublicKeyString = cryptico.publicKeyString(key);
        console.log("Публичный ключ: " + MattsPublicKeyString);
        var text = "Я участвую в хакатоне"
        console.log(text)
        var EncryptionResult = cryptico.encrypt(text, MattsPublicKeyString, key) as { status: string, cipher: string }
        console.log(EncryptionResult.cipher)
        var DecryptionResult = cryptico.decrypt(EncryptionResult.cipher, key);
        console.log(DecryptionResult);



    }
    return (
        <div className={style.container}>
            <div>
                <p className={style.inp}>Name: <input
                    type="username"
                    id="username"
                    name="username"
                    value={registr_data.username}
                    onChange={changeInputRegister}
                /></p>
                <p className={style.inp}>Mail: <input
                    type="email"
                    id="email"
                    name="email"
                    value={registr_data.email}
                    onChange={changeInputRegister}
                /></p>
                <p className={style.inp}>Phone: <input
                    type="phone_number"
                    id="phone_number"
                    name="phone_number"
                    value={registr_data.phone_number}
                    onChange={changeInputRegister}
                /></p>
                <p className={style.inp}>Passowrd: <input
                    type="password"
                    id="password"
                    name="password"
                    value={registr_data.password}
                    onChange={changeInputRegister}
                /></p>
            </div>
            <button className={style.submit} onClick={submit}>Зарегистрироваться</button>
        </div>
    );
}