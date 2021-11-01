import React from 'react';
import NavMenuBig, {ItemsType} from "./nav/NavMenuBig";
import style from "./Home.module.css";
import banner1 from "../common/img/baner (1).png";
import banner2 from "../common/img/baner(2).png";

const Home = (props: ItemsType) => {
    return (
        <div className={style.home}>
            <div className={style.homeBlock}>
                <img className={style.banner1} src={banner1} alt="banner1"/>
                <NavMenuBig item={props.item}/>
                <img className={style.banner1} src={banner2} alt="banner2"/>
            </div>
        </div>
    );
};

export default Home;