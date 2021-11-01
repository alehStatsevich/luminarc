import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Nav.module.css";



type PhotosType = {
    big: string
    small: string
}
export type ItemType = {
    // href: string
    photos: PhotosType
    title: string
}
export type ItemsType = {
    item: Array<ItemType>
}
const NavMenuBig = (props: ItemsType) => {
    return (
        <div className={style.NavMenuBig}>
            {props.item.map((item: ItemType) => {
                return <div className={style.bigLink}>
                    <img className={style.photo} src={item.photos.big}/>
                    <NavLink to={`/products/${item.title}`} className={style.linkBig}
                             activeStyle={{
                                 color: "#FB2E86"
                             }}>
                        {item.title}
                    </NavLink>
                </div>
            })}
        </div>
    );
};

export default NavMenuBig;
