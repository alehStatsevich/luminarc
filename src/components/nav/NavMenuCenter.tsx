import React from 'react';
import style from "./Nav.module.css";
import NavSmallMenu from "./NavSmallMenu";


const NavMenuCenter = (props: any) => {
    const {active, setActive} = props;
    return (
        <div className={active ? style.active : style.contact} onClick={() => setActive(false)}>
            <NavSmallMenu item={props.item}/>
        </div>
    );
};

export default NavMenuCenter;