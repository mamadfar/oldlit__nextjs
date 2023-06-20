"use client";

import Link from "next/link";
import Image from "next/image";
import {DarkLogo, WhiteLogo} from "@/assets/images";
import useDarkMode from "@/hooks/useDarkMode";
import {useEffect, useState} from "react";

const Logo = () => {
    // Todo: fix the change logo

    // const [isDarkMode, setIsDarkMode] = useState(false);
    //
    // useEffect(() => {
    //     document.documentElement.classList.contains("dark") ? setIsDarkMode(true) : setIsDarkMode(false);
    //     console.log(localStorage.getItem("theme"))
    // }, []);

    return (
        <Link href="/" className="mr-9">
            {/*<Image src={isDarkMode ? WhiteLogo : DarkLogo } alt="Logo" width={70} height={50}/>*/}
            <Image src={DarkLogo } alt="Logo" width={70} height={50}/>
        </Link>
    );
};

export default Logo;
