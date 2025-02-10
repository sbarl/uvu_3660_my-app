import React from "react";
import { Link } from "react-router-dom"

//const WORDPRESS_IMAGES

const MainNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fuild">
                <Link className="navbar-brand" to="/">

                </Link>{/* 
                <button
                    className="navbar-toggle"
                    type="button"
                    data-bs-toggle="collagpse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expands="false"
                    aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>*/}
                {/*<h1>My Website</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
    </ul>*/}
            </div>
        </nav >
    )
}

export default MainNav;