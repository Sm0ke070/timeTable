import {v1} from "uuid";

export const initialState: stateType = {
    students: [
        {id: v1(), firstName: "nikita", lastName: "pulkin", age: 27, grade: "1a"},
        {id: v1(), firstName: "nikita", lastName: "pulkin", age: 27, grade: "1a"},
        {id: v1(), firstName: "nikita", lastName: "pulkin", age: 27, grade: "1a"},
        {id: v1(), firstName: "nikita", lastName: "pulkin", age: 27, grade: "1a"},
        {id: v1(), firstName: "nikita", lastName: "pulkin", age: 27, grade: "1a"},


    ]
}
export type studentType = {
    id: string,
    firstName: string
    lastName: string
    age: number
    grade: string
}
type stateType = {
    students: studentType[]
}

const StudentsReducer = (state: stateType = initialState, action: any): stateType => {
    switch (action.type) {
        case"ADD-STUDENT": {
            return {
                ...state,
                students: [...state.students, {
                    id: v1(),
                    firstName: action.firstName,
                    lastName: action.lastName,
                    age: action.age,
                    grade: action.grade
                }]
            }
        }


    }
    return state
};


const addStudentAC = (firstName: string, lastName: string, age: number, grade: string) => {
    return {type: "ADD-STUDENT", firstName, lastName, age, grade} as const
}
export default StudentsReducer;