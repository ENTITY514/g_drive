import * as React from 'react'
import { Icon } from '../Icon/icon'
import style from './drop-down-menu.module.css'

interface Item {
    title: string
    action: any
    icon_src: string
}

interface IDropDownMenuProps {
    src: string
    title: string
    list: Item[]
}

export const DropDownMenu: React.FC<IDropDownMenuProps> = ({ src, list, title }) => {
    let [isOpen, setIsOpen] = React.useState<Boolean>(false)
    function handleChange() {
        setIsOpen(prev => !prev)
    }
    if (isOpen) {
        return (
            <div className={style.container} onClick={handleChange}>
                <div className={style.wrapper} style={{ backgroundImage: "url(" + src + ")" }}></div>
                <div className={style.bg}></div>
                <div className={style.menu}>
                    {list.map((item) => {
                        return (
                            <div className={style.menu_item} onClick={item.action} key={Math.trunc(Math.random() * 10000000)}>
                                <div className={style.item_icon}><Icon url={item.icon_src} /></div>
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            </div >
        )
    }
    else {
        return (
            <div className={style.container} onClick={handleChange}>
                <div className={style.wrapper} style={{ backgroundImage: "url(" + src + ")" }}></div>
            </div >
        )
    }
}