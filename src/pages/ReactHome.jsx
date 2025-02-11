import React, { useState } from "react"; // ✅ Import useState
import logo from "../assets/train.png";
import './css/ReactHome.css'; // ✅ Ensure the correct CSS path
import MainLayout from './layouts/MainLayout';

function ReactHome() {
    const [count, setCount] = useState(0); // ✅ Fixed missing import

    return (
        <MainLayout title="ReactHome | MyPage">
            <div className="home-container text-center"> {/* Centering with Bootstrap */}
                <img src={logo} alt="Chew Chew Train Logo" className="logo-fade" /> {/* img-fluid for responsiveness */}
            </div>
        </MainLayout>
    );
}

export default ReactHome;

