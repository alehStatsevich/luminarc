import React, {useState} from 'react';
import Nav from "../nav/Nav";
import style from "./Header.module.css";
import photo from "../../common/img/logo.png";
import BasketMenu from "./BasketMenu";
import styleContainer from "../../common/Conteiner.module.css";
import NavMenuCenter from "../nav/NavMenuCenter";
import {NavLink} from "react-router-dom";
import {PATH} from "../../common/Routes";
import burger from "../../common/img/burger.png";
import search from "../../common/img/search icon.svg"

const Header = (props: any) => {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <div>
            <Nav/>
            <div className={`${styleContainer.container} ${style.header}`}>
                <div className={style.tel}>
                    <p>+1(111) 111 11 11</p>
                    <p>+1(111) 111 11 11</p>
                    <p>График работы:ежедневно с 9.00 до 21.00</p>
                </div>
                <img className={style.photo} src={photo} alt="photo"/>
                <div className={style.basketMenu}>
                    <BasketMenu/>
                </div>
            </div>
            <div className={style.blockLink}>
                <div className={`${styleContainer.container} ${style.header}`}>
                    <NavLink to={PATH.HOME} onClick={() => setMenuActive(!menuActive)} className={style.link}
                             activeStyle={{
                                 color: "#333333"
                             }}>
                        <img className={style.burger} src={burger} alt="burger"/>
                        Каталог</NavLink>
                    <NavLink to={PATH.COLLECTIONS} className={style.link}
                             activeStyle={{
                                 color: "#333333"
                             }}>Коллекции</NavLink>
                    <NavLink to={PATH.VIDEOREVIEWS} className={style.link}
                             activeStyle={{
                                 color: "#333333"
                             }}>Видеообзоры</NavLink>
                    <NavLink to={PATH.LUMINARC} className={style.link}
                             activeStyle={{
                                 color: "#333333"
                             }}>О Люминарк</NavLink>
                    <NavLink to={PATH.COLORSELECTIONS} className={style.link}
                             activeStyle={{
                                 color: "#333333"
                             }}>Цветовые подборки</NavLink>
                    <div className={style.blockSearch}>
                        <input type="text" placeholder="Поиск по сайту" className={style.search}/>
                        <img className={style.searchIcon} src={search} alt="search"/>
                    </div>
                </div>
            </div>
            <div className={style.banner}>
                <div className={styleContainer.container}>
                    <NavMenuCenter active={menuActive}
                                   setActive={setMenuActive}
                                   item={props.item}/>

                </div>
            </div>

        </div>
    );
};

export default Header;