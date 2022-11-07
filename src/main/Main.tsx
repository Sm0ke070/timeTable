import React from 'react';
import style from './Main.module.css'

type MainPropsType={}

const Main = (props:any) => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
               123
            </div>

        </div>
    );
};

export default Main;