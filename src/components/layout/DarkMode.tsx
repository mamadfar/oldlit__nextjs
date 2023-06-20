"use client";

import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
import useDarkMode from "@/hooks/useDarkMode";

const DarkMode = () => {

    const {themeSwitch, userTheme} = useDarkMode();

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
