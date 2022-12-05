import React from 'react';
import style from './student.module.css'

type StudentPropsType = {
    firstName: string
    lastName: string
    age: number
    grade: string
}

const Student = (props: StudentPropsType) => {
    const {firstName, lastName, age, grade} = props
    return (
        <div className={style.studentBlock}>
            <div className={style.studentContainer}>
                <p>Имя: {firstName} </p>
                <p>Фамилия: {lastName}</p>
                <p>Возраст: {age} </p>
                <p>Класс: {grade}</p>
            </div>
        </div>
    );
};

export default Student;