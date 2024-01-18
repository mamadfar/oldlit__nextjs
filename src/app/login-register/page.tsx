import {Login, Register} from "@/components";

const LoginRegister = () => {
    return (
        <div className='flex flex-col md:flex-row gap-6 md:gap-4 p-8'>
            <div className='flex-1'>
                <p className="font-bold text-2xl border-b pb-2 mb-6">LOGIN</p>
                <div className="border-b md:border-b-0 md:border-r pb-6 md:pb-0 md:pr-4">
                    <Login/>
                </div>
            </div>
            <div className="flex-1">
                <p className="font-bold text-2xl border-b pb-2 mb-6">REGISTER</p>
                <Register/>
            </div>
        </div>
    )
}

export default LoginRegister
