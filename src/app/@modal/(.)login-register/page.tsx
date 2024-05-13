'use client'

import {useContext, useState} from 'react'
import Modal from '@/app/@modal/modal'
import {PiUserRectangleFill} from 'react-icons/pi'
import {LoginState, RegisterState} from "@/components";
import {AuthState_Type} from "@/types/Auth.type";

const Login = () => {
    const [state, setState] = useState<AuthState_Type>('LOGIN')

    return (
        <Modal
            title={
                <div className='flex items-center gap-2'>
                    <PiUserRectangleFill className='h-7 w-7'/>
                    <p>Sign In or Register</p>
                </div>
            }
            classNames={{
                header: '!bg-red-600 [&>div]:!text-white !p-3',
                content: '!p-0 login-register-modal-content',
                body: '!p-4',
            }}
        >
            {state === 'LOGIN' ? (
                <LoginState setState={setState}/>
            ) : (
                <RegisterState setState={setState}/>
            )}
        </Modal>
    )
}

export default Login
