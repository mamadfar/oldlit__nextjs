import {FC} from 'react';
import {Button, Register} from "@/components";
import {AuthState_Type} from "@/types/Auth.type";

interface IRegisterStateProps {
    setState: (state: AuthState_Type) => void
}

const RegisterState: FC<IRegisterStateProps> = ({setState}) => {

    return (
        <div className='flex gap-4'>
            <div className='flex-1'>
                <div className="flex flex-col justify-center h-full">
                    <b className='text-lg'>Already have an account?</b>
                    <Button
                        className="mt-1"
                        onClick={() => {
                            setState('LOGIN')
                        }}
                    >
                        Login
                    </Button>
                </div>
            </div>
            <div className='flex-1 border-r pr-4'>
                <Register/>
            </div>
        </div>
    );
};

export default RegisterState;
