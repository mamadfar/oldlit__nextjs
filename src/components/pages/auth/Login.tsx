"use client"

import {FormEvent} from 'react';
import {useRouter} from "next/navigation";
import {useAuthStore} from "@/store/Auth.store";
import {LoginStateForm_Type, RegisterStateForm_Type} from "@/types/auth.type";
import Cookies from "js-cookie";
import {Is_Logged_In, OLD_LIT_U} from "@/config";
import {Input} from "antd";
import {FaLock, FaLockOpen, FaUser} from "react-icons/fa";
import {Button} from "@/components";

const Login = () => {

    const router = useRouter()
    const setIsLoggedIn = useAuthStore(state => state.setIsLoggedIn)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData) as LoginStateForm_Type;
        const user = Cookies.get(OLD_LIT_U);
        if (user) {
            const userData = JSON.parse(user) as RegisterStateForm_Type;
            if (userData.email === data.username && userData.password === data.password) {
                console.log("Login Success")
                setIsLoggedIn(true);
                Cookies.set(Is_Logged_In, 'true')
                router.back()
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 h-full'>
            <Input placeholder='Username' name="username" prefix={<FaUser/>}/>
            <Input.Password placeholder='Password' name="password" prefix={<FaLock/>}/>
            <Button>
                <FaLockOpen className='h-4 w-4'/> Login
            </Button>
        </form>
    );
};

export default Login;
