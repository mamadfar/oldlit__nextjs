"use client"

import React, {FormEvent} from 'react';
import {Input} from "antd";
import {MdOutlineEmail} from "react-icons/md";
import {FaLock, FaUserPlus} from "react-icons/fa";
import {Button} from "@/components";
import {useRouter} from "next/navigation";
import {RegisterStateForm_Type} from "@/types/auth.type";
import Cookies from "js-cookie";
import {OLD_LIT_U} from "@/config";

const Register = () => {

    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData) as RegisterStateForm_Type;
        Cookies.set(OLD_LIT_U, JSON.stringify(data))
        Cookies.set(OLD_LIT_U, JSON.stringify(data))
        console.log("Register Success")
        router.back()
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <Input placeholder='Email' name="email" prefix={<MdOutlineEmail/>}/>
            <Input.Password placeholder='Password' name="password" prefix={<FaLock/>}/>
            <Input.Password placeholder='Confirm Password' name="confirm_password" prefix={<FaLock/>}/>
            <Button>
                <FaUserPlus className='h-4 w-4'/> Register
            </Button>
        </form>
    );
};

export default Register;
