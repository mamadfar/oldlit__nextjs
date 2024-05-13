import {FC} from 'react';
import {Button, Login} from "@/components";
import {AuthState_Type} from "@/types/Auth.type";

interface ILoginStateProps {
    setState: (state: AuthState_Type) => void
}

const LoginState: FC<ILoginStateProps> = ({setState}) => {
    return (
        <div className='flex gap-4'>
            <div className='flex-1 border-r pr-4'>
                <Login/>
            </div>
            <div className='flex-1'>
                <div className="mb-4">
                    <b className='text-lg'>New Here?</b>
                    <br/>
                    <small>Registration is free and easy!</small>
                    <ul className="list-disc list-inside">
                        <li>
                            <small>Faster checkout</small>
                        </li>
                        <li>
                            <small>Save multiple shipping addresses</small>
                        </li>
                        <li>
                            <small>View and track orders and more</small>
                        </li>
                    </ul>
                </div>
                <Button
                    onClick={() => {
                        setState('REGISTER')
                    }}
                >
                    Create New Account
                </Button>
            </div>
        </div>
    );
};

export default LoginState;
