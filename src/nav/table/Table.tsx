import React from 'react';
import style from './Table.module.css'

const Table = () => {
    return (
        <div className={style.btnBlock}>
            <div className={style.btnContainer}>
                <div className={style.btn}><a href="">Хоровое</a></div>
                <div className={style.btn}><a href="">Инструментальное</a></div>
                <div className={style.btn}><a href="">Хореографическое</a></div>
                <div className={style.btn}><a href="">Художественное</a></div>
                <div className={style.btn}><a href="">Раннее развитие</a></div>
            </div>
        </div>
    );
};

export default Table;