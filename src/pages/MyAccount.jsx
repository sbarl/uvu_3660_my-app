import React, { useState, useContext } from "react";
import MainLayout from "./layouts/MainLayout";
import { AuthContext } from "./AuthContext";


function MyAccount() {
    const { logout } = useContext(AuthContext);

    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        weight: "160 lbs",
        height: "5'10\"",
        goal: "Gain muscle",
    });

    const handleLogout = () => {
        logout();
    };

    return (
        <MainLayout title="My Account">
            <div className="container mt-4">
                <h2 className="text-center">My Account</h2>
                <div className="card p-4 shadow-sm">
                    <h4>{user.name}</h4>
                    <p>Email: {user.email}</p>
                    <hr />
                    <h5>Fitness Stats</h5>
                    <p><strong>Weight:</strong> {user.weight}</p>
                    <p><strong>Height:</strong> {user.height}</p>
                    <p><strong>Goal:</strong> {user.goal}</p>
                    <hr />
                    <button className="btn btn-primary me-2">Edit Profile</button>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </MainLayout>
    );
}

export default MyAccount;
