"use client"

import {useAuthStore} from "@/store/Auth.store";
import Link from "next/link";
import {AiOutlineUser, AiOutlineHome, AiOutlineLogout} from "react-icons/ai";
import {usePathname, useRouter} from "next/navigation";

const LoginChecker = () => {

    const isLoggedIn = useAuthStore(state => state.isLoggedIn)
    const logout = useAuthStore(state => state.logout)

    const router = useRouter();
    const isLoginPage = usePathname().includes('/login')

    const handleLogout = () => {
        logout()
        router.replace('/')
    }

    if (isLoggedIn) {
        return (
            <div className="flex gap-3">
                <Link
                    href='/dashboard'
                    className='flex items-center space-x-1 uppercase hover:text-red-600'
                >
                    <AiOutlineHome className='h-4 w-4'/>
                    <span>Dashboard</span>
                </Link>
                <button
                    className='flex items-center space-x-1 uppercase hover:text-red-600'
                    onClick={handleLogout}
                >
                    <AiOutlineLogout className='h-4 w-4'/>
                    <span>Logout</span>
                </button>
            </div>
        );
    }
    if (isLoginPage) {
        return (
            <div className='flex items-center space-x-1 uppercase hover:text-red-600 cursor-pointer'>
                <AiOutlineUser className='h-4 w-4'/>
                <span>Login / Register</span>
            </div>
        )
    }
    return (
        <Link
            href='/login-register'
            className='flex items-center space-x-1 uppercase hover:text-red-600'
        >
            <AiOutlineUser className='h-4 w-4'/>
            <span>Login / Register</span>
        </Link>
    );
};

export default LoginChecker;
