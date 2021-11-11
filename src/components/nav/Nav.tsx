import React from 'react';
import { NavLink } from 'react-router-dom';
import {PATH} from "../../common/Routes";
import style from "./Nav.module.css"


const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink to={PATH.HOME}   className={style.link} activeStyle={{
                color: "#FB2E86"
            }}>О Магазине</NavLink>
            <NavLink to={PATH.DELIVERY} className={style.link} activeStyle={{
                color: "#FB2E86"
            }}>Доставка</NavLink>
            <NavLink to={PATH.CONTACT} className={style.link} activeStyle={{
                color: "#FB2E86"
            }}>Контакты</NavLink>
            <NavLink to={PATH.GUARANTEE} className={style.link} activeStyle={{
                color: "#FB2E86"
            }}>Гарантия</NavLink>
            <NavLink to={PATH.REVIEWS} className={style.link} activeStyle={{
                color: "#FB2E86"
            }}>Отзывы</NavLink>
        </div>
    );
};

export default Nav;