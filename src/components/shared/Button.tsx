import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

const Button: FC<IButtonProps> = ({children, className, ...props}) => {
    return (
        <button
            className={`flex gap-2 items-center rounded-sm bg-red-600 text-white w-fit px-5 py-2 hover:opacity-80 duration-300 transition-opacity mt-auto ${className ?? ''}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
