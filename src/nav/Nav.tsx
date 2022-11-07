import React from 'react';
import style from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={style.navBlock}>
            <div className={style.navProfile}>
                <Link to="/profile">Профиль</Link>
            </div>
            <div className={style.nav}>
                <Link to="/table">Расписание</Link>
                <Link to="/journal">Ведомости</Link>
                <Link to="/students">Учащиеся</Link>
            </div>

        </div>
    );
};

export default Nav;