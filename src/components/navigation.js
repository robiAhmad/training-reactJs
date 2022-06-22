import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/category">Category</Link>
                </nav>
            </div>
        </>
    );
};

export default Navigation;
