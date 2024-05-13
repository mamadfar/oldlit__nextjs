"use client"

import {useAuthStore} from "@/store/Auth.store";
import Link from "next/link";
import {AiOutlineUser, AiOutlineHome, AiOutlineLogout} from "react-icons/ai";
import {usePathname, useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {OLD_LIT_RT} from "@/config";
import Cookies from "js-cookie";
import {SilentLoginService} from "@/services/Auth.service";
import {AuthCookieSetter} from "@/utils";

const LoginChecker = () => {

    const {isAuthenticated, setIsAuthenticated} = useAuthStore()
    const logout = useAuthStore(state => state.logout)

    const router = useRouter();
    const isLoginPage = usePathname().includes('/login')

    const {mutate, isSuccess, isError, data} = useMutation({
        mutationKey: ['silentLogin'], mutationFn: async () => {
            const refreshToken = Cookies.get(OLD_LIT_RT)
            if (refreshToken) {
                const {data, status} = await SilentLoginService(JSON.parse(refreshToken))
                if (status === 200) {
                    AuthCookieSetter(data)
                    setIsAuthenticated(true)
                }
                router.replace('/')
            } else {
                router.replace('/login-register')
            }
        }
    });

    const handleLogout = () => {
        logout()
        router.replace('/')
    }

    const handleLogin = () => {
        mutate()
    }

    if (isAuthenticated) {
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
        <button
            onClick={handleLogin}
            className='flex items-center space-x-1 uppercase hover:text-red-600'
        >
            <AiOutlineUser className='h-4 w-4'/>
            <span>Login / Register</span>
        </button>
    );
};

export default LoginChecker;
