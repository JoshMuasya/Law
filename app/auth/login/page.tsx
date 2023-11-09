"use client"

import React, { useState } from 'react';

type FormData = {
    username: string;
    password: string;
};

type User = {
    id: number;
    username: string;
    password: string;
    email: string;
    phone_number: string;
    rank: string;
};

type LoginResponse = {
    token: string;
    user: User;
}

const Login = () => {

    const [formData, setFormData] = useState<FormData> ({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:8000/lawyers/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data: LoginResponse = await response.json();
            const { token } = data;
            console.log('Login Successful');
            console.log('Token:', token);

            localStorage.setItem('token', token);
            
            resetForm();

            if (token) {
                window.location.href = '../home'
            }
        } else {
            console.log('Login Failed');
            resetForm();
        };
    };

    const resetForm = () => {
        setFormData({
            username: '',
            password: '',
        });
    };

  return (
    <div className='w-full h-screen flex flex-col justify-center align-middle items-center back-pic-dark bg-fixed bg-cover'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[2] h-screen bg-black opacity-70'/>

        {/* Main */}
        <div className='z-10 w-full flex flex-col justify-center align-middle items-center'>
            {/* Header */}
            <div className='font-mont font-black text-l m:text-xl md:text-xxl pb-5'>
                LOGIN
            </div>

            <div className='card w-4/5 s:w-2/3 m:w-2/5 bg-base-100 text-neutral-content'>
                {/* Form */}
                <form 
                    onSubmit={handleSubmit}
                    className='font-tinos py-5 px-1 flex flex-col justify-center align-middle items-center'
                >
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Username */}
                        <div className='py-5 px-3'>
                            <input 
                                type="text" 
                                placeholder="Username"
                                className="input w-full max-w-xs" 
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                            />                       
                        </div>

                        {/* Password */}
                        <div className='py-5 px-3'>
                            <div>
                                <input 
                                    type="password" 
                                    placeholder="Password"
                                    className="input w-full max-w-xs" 
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                />                       
                            </div>
                        </div>

                        {/* Button */}
                        <div 
                        className='bg-accent hover:bg-accent-content border-0 w-20 s:w-32 m:w-48 h-7 m:h-12 rounded-ss-3xl rounded-ee-3xl flex justify-center items-center align-middle cursor-pointer '
                        >
                            <button
                                className='font-tinos font-bold text-s m:text-l'
                                type='submit'
                            >
                                LOGIN
                            </button>
                        </div>
                    </div>

                    {/* Errors */}
                    {error && (
                        <div 
                        className='pt-5 font-shadow-light text-error font-bold text-sx px-3'>
                            The fields can't be empty
                        </div>
                    )}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login