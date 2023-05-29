"use client";

import {useEffect, useState} from "react";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";

const DarkMode = () => {

    const [userTheme, setUserTheme] = useState<string | null>(null);
    const [systemTheme, setSystemTheme] = useState<boolean>(false);

    // * Handle switch theme
    const themeSwitch = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setUserTheme("light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setUserTheme("dark");
        }
    }

    // * Initial user theme based on localStorage
    useEffect(() => {
        if (localStorage.getItem("theme")) setUserTheme(localStorage.getItem("theme"))
    }, []);


    // * Initial theme check
    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setSystemTheme(true);
            setUserTheme(localStorage.getItem("theme") || "dark");
        }
    }, []);

    // * Add 'dark' class to 'html' tag if there is 'theme' key in the localStorage
    useEffect(() => {
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add("dark");
        }
    }, [userTheme, systemTheme]);

    return (
        <div onClick={themeSwitch} className="fixed right-3 sm:right-5 bottom-3 sm:bottom-5 bg-black dark:bg-white p-3 rounded-full cursor-pointer">
            {(userTheme === "dark") ? (
                <BsFillSunFill className="dark:text-black"/>
            ) : (
                <BsFillMoonFill className="text-white"/>
            )}
        </div>
    );
};

export default DarkMode;
