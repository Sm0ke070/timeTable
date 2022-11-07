import React from 'react';
import style from "../nav/Nav.module.css";
import {Link, Outlet} from "react-router-dom";
import Header from "../header/Header";
import styles from './Layout.module.css'


const Layout = () => {
    return (
        <>
            <Header>
                <div className={style.navProfile}>
                    <Link to="/profile">Профиль</Link>
                </div>
                <div className={style.nav}>
                    <Link to="/table">Расписание</Link>
                    <Link to="/journal">Ведомости</Link>
                    <Link to="/students">Учащиеся</Link>
                </div>
            </Header>
            <div className={styles.mainBlock}>
                <Outlet/>
            </div>


        </>

    );
};

export default Layout;