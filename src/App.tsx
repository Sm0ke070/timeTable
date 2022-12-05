import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./nav/profile/Profile";
import Table from "./nav/table/Table";
import Journal from "./nav/journal/Journal";
import Students from "./nav/students/Students";
import Layout from "./layout/Layout";


function App(props:any) {
    return (

        <div className="App">
            <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/table'} element={<Table/>}/>
                        <Route path={'/journal'} element={<Journal/>}/>
                        <Route path={'/students'} element={<Students/>}/>
                    </Route>
            </Routes>
        </div>
    );
}
export default App;
