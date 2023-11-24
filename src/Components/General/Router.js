import React from "react";

import Home from './Home';
import Login from '../Login/Login';
import Account from '../Account/Account';
import Admin from '../Admin/Admin';
import Customer from '../Customer/Customer';
import Machine from '../Machine/Machine';
import OperatorUsers from '../OperatorUsers/OperatorUsers';
import Rentals from '../Rentals/Rentals';

import {BrowserRouter, Routes,Route } from "react-router-dom";
import Navegador from "./Navegador";

function Router (){
    return(
        <BrowserRouter>
        <Navegador/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Account" element={<Account/>}></Route>
            <Route path="/Admin" element={<Admin/>}></Route>
            <Route path="/Customer" element={<Customer/>}></Route>
            <Route path="/Machine" element={<Machine/>}></Route>
            <Route path='/OperatorUsers' element={<OperatorUsers/>}></Route>
            <Route path="/Rentals" element={<Rentals/>}></Route>            
        </Routes>
        </BrowserRouter>        
    )
}

export default Router;
