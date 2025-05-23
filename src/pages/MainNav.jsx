import React from "react";
import { Link } from "react-router-dom"


const MainNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <span className="ms-2">Chew Chew Train</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">
                                Sign In
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logwork">
                                Log workout
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myaccount">
                                My Accountt
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/exercises">
                                Exercise (bootstrap)
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default MainNav;