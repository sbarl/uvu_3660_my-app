import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        height: "",
        weight: "",
        activityLevel: "",
        fitnessGoal: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign Up Data:", formData);
        // TODO: Add form validation & authentication logic
    };

    return (
        <MainLayout title="Sign Up | MyPage">
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-sm" style={{ width: "400px" }}>
                    <h2 className="text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Height */}
                        <div className="mb-3">
                            <label className="form-label">Height (in inches)</label>
                            <input
                                type="number"
                                className="form-control"
                                name="height"
                                value={formData.height}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Weight */}
                        <div className="mb-3">
                            <label className="form-label">Weight (in lbs)</label>
                            <input
                                type="number"
                                className="form-control"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Activity Level */}
                        <div className="mb-3">
                            <label className="form-label">Activity Level</label>
                            <select
                                className="form-select"
                                name="activityLevel"
                                value={formData.activityLevel}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Activity Level</option>
                                <option value="sedentary">Sedentary (little to no exercise)</option>
                                <option value="light">Lightly active (1-3 days per week)</option>
                                <option value="moderate">Moderately active (3-5 days per week)</option>
                                <option value="very">Very active (6-7 days per week)</option>
                                <option value="super">Super active (athlete level)</option>
                            </select>
                        </div>

                        {/* Fitness Goal */}
                        <div className="mb-3">
                            <label className="form-label">Fitness Goal</label>
                            <select
                                className="form-select"
                                name="fitnessGoal"
                                value={formData.fitnessGoal}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Goal</option>
                                <option value="lose">Lose weight</option>
                                <option value="maintain">Maintain weight</option>
                                <option value="gain">Gain muscle</option>
                                <option value="endurance">Improve endurance</option>
                                <option value="strength">Increase strength</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-100">
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
