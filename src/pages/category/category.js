import React from "react";
import { Outlet } from "react-router-dom";

import NavCategories from "../../components/categories";

const Category = () => {
    return <div>
        <h1>Category</h1>
        <NavCategories/>
        <Outlet />
    </div>;
};

export default Category;
