import React, { useEffect } from "react";
import MainNav from "../MainNav";
import MainFooter from "../MainFooter";


const MainLayout = ({ children, title }) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title])
    return (

        <div
            className="d-flex flex-column vh-100"

            style={{
                background: 'linear-gradient(to bottom, #f7c6e0, #fff)', // Soft pink to white gradient
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}
        >
            <MainNav />
            <main className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                {children}
            </main>
            <MainFooter />
        </div>

    );
};

export default MainLayout;