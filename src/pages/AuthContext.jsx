import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        console.log("Checking for stored token..."); // Debug log
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            console.log("Token found in localStorage:", storedToken); // Debug log
            const parsedToken = JSON.parse(storedToken);

            if (parsedToken.expiration < new Date().getTime()) {
                console.log("Token is expired. Logging out..."); // Debug log
                logout();
            } else {
                console.log("Token is valid. Logging in..."); // Debug log
                setIsLoggedIn(true);
                setToken(parsedToken);
            }
        } else {
            console.log("No token found in localStorage."); // Debug log
        }
    }, []);

    const login = (username, password) => {
        console.log("Logging in with username:", username); // Debug log
        const now = new Date();
        const expiration = now.getTime() + 1000 * 60 * 60; // Example expiration time
        const faketoken = {
            username,
            expiration
        };
        console.log("Generated token:", faketoken); // Debug log
        localStorage.setItem("token", JSON.stringify(faketoken));
        setIsLoggedIn(true);
        setToken(faketoken);
        console.log("User is now logged in."); // Debug log
    };

    const logout = () => {
        console.log("Logging out..."); // Debug log
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setToken(null);
        console.log("User is now logged out."); // Debug log
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

