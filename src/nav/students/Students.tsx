import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/redux-store";
import {studentType} from "../../store/StudentsReducer";
import Student from "./student/Student";


const Students = () => {

    const students = useSelector<AppRootStateType, studentType[]>(state => state.students.students)

    return (
        <div>
            Учащиеся:
            {students.map(el => <Student key={el.id}
                                         firstName={el.firstName}
                                         lastName={el.lastName}
                                         age={el.age}
                                         grade={el.grade}/>)}

        </div>
    );
};

export default Students;