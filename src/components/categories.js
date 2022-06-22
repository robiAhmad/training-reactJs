import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <>
            <div>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <Link to="/category/beef">Beef</Link> |{" "}
                    <Link to="/category/seafood">Seafood</Link> |{" "}
                    <Link to="/category/chicken">Chicken</Link> |{" "}
                </nav>
            </div>
        </>
    );
};

export default Categories;
