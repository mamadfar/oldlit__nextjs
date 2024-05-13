"use client"

import {FormEvent, useContext, useEffect} from 'react';
import {useRouter} from "next/navigation";
import {LoginStateForm_Type} from "@/types/Auth.type";
import Cookies from "js-cookie";
import {OLD_LIT_AT, OLD_LIT_RT} from "@/config";
import {Input} from "antd";
import {FaLock, FaLockOpen, FaUser} from "react-icons/fa";
import {Button} from "@/components";
import {useMutation} from "@tanstack/react-query";
import {LoginService} from "@/services/Auth.service";
import {AuthCookieSetter} from "@/utils";
import {ModalContext} from "@/contexts/Modal.context";
import {useAuthStore} from "@/store/Auth.store";

const Login = () => {

    const {setIsAuthenticated} = useAuthStore()
    const router = useRouter()
    const {setModalOpen} = useContext(ModalContext)
    const {mutate, data} = useMutation({mutationKey: ['login'], mutationFn: async (payload: LoginStateForm_Type) => {
        try {
            const {data, status} = await LoginService(payload)
            if (status === 200) {
                AuthCookieSetter(data)
                setIsAuthenticated(true)
                setModalOpen(false)
                router.replace('/')
            }
        } catch (e: any) {
            return e
        }
        }})

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData) as LoginStateForm_Type;
        mutate(payload)
    }

    useEffect(() => {
        const token = Cookies.get(OLD_LIT_AT);
        const refreshToken = Cookies.get(OLD_LIT_RT);
        if (token && refreshToken) {
            router.replace('/')
        }
    }, []);

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 h-full'>
            <Input id="email" placeholder='Username' name="email" prefix={<FaUser/>}/>
            <Input.Password id="password" placeholder='Password' name="password" prefix={<FaLock/>}/>
            <Button>
                <FaLockOpen className='h-4 w-4'/> Login
            </Button>
        </form>
    );
};

export default Login;
