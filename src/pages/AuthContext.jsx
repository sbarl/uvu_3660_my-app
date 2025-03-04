import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            const parsedToken = JSON.parse(storedToken);

            if (parsedToken.expiration < new Date().getTime()) {
                logout();
            } else {
                setIsLoggedIn(true);
                setToken(parsedToken);
            }
        }
    }, []);

    const login = (username, password) => {
        const now = new Date();
        const expiration = now.getTime() + 1000 * 60 * 60; // Example expiration time
        const faketoken = {
            username,
            expiration
        };
        localStorage.setItem("token", JSON.stringify(faketoken));
        setIsLoggedIn(true);
        setToken(faketoken);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


/*
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);



    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            const parsedToken = JSON.parse(storedToken);

            if (parsedToken.expiration < new Date().getTime()) {
                logout();
            } else {
                setIsLoggedIn(true);
                setToken(parsedToken);
            }
        }
    }, []);


    const login = (username, passowrd) => {
        const now = new Data();
        const expiration = now, getTime() + 3600 * 1000;
        const faketoken = {
            username, expiration
        }


        const logout = () => {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
            setToken(null);
        };


        return (
            <AuthContext.Provider value={{ isLoggedIn, token, logout }}>
                {children}
            </AuthContext.Provider>
        );
    };
};
*/