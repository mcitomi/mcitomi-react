import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, NotFound, Nekoo } from "./router.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";

import Navbar from "./components/Navbar.jsx";
import MainBar from "./components/MainBar";

export default () => {
    return <Router>
        <MainBar/>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/nekolove" element={<Nekoo></Nekoo>}></Route>

            {/* Anything else--- ⬆️*/}
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    </Router>
}