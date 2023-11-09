import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <div className='bg-accent hover:bg-accent-content border-0 w-20 s:w-32 m:w-48 h-6 m:h-10 rounded-ss-3xl rounded-ee-3xl flex justify-center items-center align-middle cursor-pointer'>
        <button className='font-tinos font-bold text-s m:text-lm' onClick={onClick}>
            SIGNUP
        </button>
    </div>
    );
};

export default Button;