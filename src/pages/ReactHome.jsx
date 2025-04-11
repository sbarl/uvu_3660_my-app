import React, { useState } from "react";
import logo from "../assets/train.png";
import './css/ReactHome.css';
import MainLayout from './layouts/MainLayout';

function ReactHome() {
    const [count, setCount] = useState(0);

    return (
        <MainLayout title="ReactHome | MyPage">
            <div className="home-container text-center">
                <img src={logo} alt="Chew Chew Train Logo" className="logo-fade" />
            </div>
        </MainLayout>
    );
}

export default ReactHome;

