import {combineReducers, createStore} from "redux";
import StudentsReducer from "./StudentsReducer";

let rootReducer = combineReducers({
    students: StudentsReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;