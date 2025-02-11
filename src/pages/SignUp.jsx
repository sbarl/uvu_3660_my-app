import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signing up with:", name, email, password);
    };

    return (
        <MainLayout title="Sign Up | MyPage">
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
                    <h2 className="text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
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
                        <button type="submit" className="btn btn-success w-100">
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center mt-3">
                        Already have an account? <Link to="/signin">Sign In</Link>
                    </p>
                </div>
            </div>
        </MainLayout>
    );
};

export default Signup;
