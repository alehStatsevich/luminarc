import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from "../../common/Routes";
import style from "./BasketMenu.module.css";
import compare from "../../common/img/compare.png";
import favorites from "../../common/img/favorites.png";
import basket from "../../common/img/basket.png"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

const BasketMenu = () => {
    const count = useSelector<AppRootStateType, any>(state => state.products.elementsForBasket)
    // useEffect(() => {
    //
    // }, [count])
    return (
        <div>
            <div className={style.block}>
                <NavLink to={PATH.COMPARE} className={style.link} activeStyle={{
                    color: "#FB2E86"
                }}>
                    <img className={style.photo} src={compare} alt="compare"/>
                </NavLink>
                <NavLink to={PATH.FAVORITES} className={style.link} activeStyle={{
                    color: "#FB2E86"
                }}>
                    <img className={style.photo} src={favorites} alt="favorites"/>
                </NavLink>
                <NavLink to={PATH.BASKET} className={style.link} activeStyle={{
                    color: "#FB2E86"
                }}>
                    <img className={style.photo} src={basket} alt="photo"/>
                    <span>{count.length > 0 ? <span>{count.length}</span> : ''}</span>
                </NavLink>
            </div>
            <p>График работы:ежедневно с 9.00 до 21.00</p>
        </div>
    );
};

export default BasketMenu;