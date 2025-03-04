import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import MainLayout from "./layouts/MainLayout";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        navigate("/myaccount");//not sure if this is correct
    };

    return (
        <MainLayout title="Sign In | MyPage">
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
                    <h2 className="text-center">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Sign In
                        </button>
                    </form>
                    <p className="text-center mt-3">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </MainLayout>
    );
};

export default SignIn;



/*import React from "react";
import MainLayout from "./layouts/MainLayout";

import { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", email, password);
        // TODO: Add authentication logic
    };


    return (
        <MainLayout title="Sign In | MyPage">
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
                    <h2 className="text-center">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Sign In
                        </button>
                    </form>
                    <p className="text-center mt-3">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </MainLayout>
    );
};

export default Signin;
*/
