import React from 'react';
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {ItemsType, ItemType} from "./NavMenuBig";

const NavSmallMenu = (props:ItemsType) => {
    return (
        <div className={style.NavSmallMenu} >
            {props.item.map((item:ItemType) => {
                return <div className={style.smallMenu} >
                    <img className={style.photo} src={item.photos.small}/>
                    {/*<NavLink to={item.href} className={style.link} activeStyle={{*/}
                    {/*    color: "#FB2E86"*/}
                    {/*}}>{item.title}</NavLink>*/}
                    <NavLink to={`/products/${item.title}`} className={style.link} activeStyle={{
                        color: "#FB2E86"
                    }}>{item.title}</NavLink>
                </div>
            })}
        </div>
    );
};

export default NavSmallMenu;