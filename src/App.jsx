import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NotFound } from "./router.js";

import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
    return <Router>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            {/* Anything else--- ⬆️*/}
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    </Router>
}