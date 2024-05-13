"use client"

import React, {FormEvent} from 'react';
import {Input, message} from "antd";
import {MdOutlineEmail} from "react-icons/md";
import {FaLock, FaUserPlus} from "react-icons/fa";
import {Button} from "@/components";
// import {useRouter} from "next/navigation";
import {RegisterStateForm_Type} from "@/types/Auth.type";
// import Cookies from "js-cookie";
// import {OLD_LIT_AT, OLD_LIT_RT} from "@/config";
import {useMutation} from "@tanstack/react-query";
import {RegisterService} from "@/services/Auth.service";

const Register = () => {

    const [messageApi, contextHolder] = message.useMessage();

    // const router = useRouter()

    const {mutate, data, isSuccess, isPending} = useMutation({mutationKey: ['register'], mutationFn: async (payload: RegisterStateForm_Type) => RegisterService(payload)})

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        messageApi.open({
            key: 'updatable',
            type: 'loading',
            content: 'Loading...',
        });
        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData) as RegisterStateForm_Type;
        mutate(payload)
        // isSuccess && router.back()
    }
        isSuccess && messageApi.success({
            content: 'Register Success',
            duration: 2,
            key: 'updatable',
        });

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            {contextHolder}
            <Input placeholder='Email' name="email" prefix={<MdOutlineEmail/>}/>
            <Input.Password placeholder='Password' name="password1" prefix={<FaLock/>}/>
            <Input.Password placeholder='Confirm Password' name="password2" prefix={<FaLock/>}/>
            <Button disabled={isPending} className={isPending ? 'cursor-not-allowed' : ''}>
                <FaUserPlus className='h-4 w-4'/> Register
            </Button>
        </form>
    );
};

export default Register;
