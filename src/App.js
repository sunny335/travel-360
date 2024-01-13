import React, { useState } from "react";


import { Route, Router, Routes } from 'react-router-dom';
import SingIn from './pages/Auth/SingIn';
import SingUp from './pages/Auth/SingUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import NewPassword from './pages/Auth/NewPassword';
import ListingDetail from './pages/ListingDetail/ListingDetail';
import Home from './pages/Home/Home';



function App() {


  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/home"  element={<Home/>}></Route>
        <Route path="/sign-in"  element={<SingIn/>}></Route>
        <Route path="/sign-up"  element={<SingUp/>}></Route>
        <Route path="/forgot-password"  element={<ForgotPassword/>}></Route>
        <Route path="/new-password"  element={<NewPassword/>}></Route>
        <Route path="/listing-detail"  element={<ListingDetail/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
