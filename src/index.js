import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/custom-css.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Category from "./pages/category/category";
import DetailCategory from "./pages/category/detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/category" element={<Category />}>
                <Route path=":cat" element={<DetailCategory />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
