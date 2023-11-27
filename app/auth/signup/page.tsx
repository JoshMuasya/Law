"use client"

import React, { useState } from 'react';

type FormData = {
    username: string;
    email: string;
    phone_number: string;
    rank: string;
    password: string;
    password_confirmation: string;
};

const Signup = () => {  
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        phone_number: '',
        rank: '',
        password: '',
        password_confirmation: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)

        const response = await fetch('http://127.0.0.1:8000/lawyers/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('Signup Successful');
            resetForm();
            window.location.href = '../auth/login'
        } else {
            console.log('Signup Failure');
        };
    };

    const resetForm = () => {
        setFormData({
            username: '',
            email: '',
            phone_number: '',
            rank: '',
            password: '',
            password_confirmation: '',
        });
    };

  return (
    <div className='w-full h-screen flex flex-col justify-center align-middle items-center back-pic-dark bg-fixed bg-cover'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[2] h-screen bg-black opacity-70'/>

        {/* Main */}
        <div className='z-10 w-full flex flex-col justify-center align-middle items-center'>
            {/* Header */}
            <div className='font-mont font-black text-lm m:text-lg md:text-xl pb-1'>
                SIGNUP
            </div>

            <div className='card w-4/5 s:w-2/3 m:w-2/5 bg-base-100 text-neutral-content'>
                {/* Form */}
                <form 
                    onSubmit={handleSubmit}
                    className='font-tinos py-3 px-1 flex flex-col justify-center align-middle items-center'
                >
                    <div className='flex flex-col justify-center align-middle items-center'>
                        {/* Username */}
                        <div className='py-2 px-3'>
                            <input 
                                type="text" 
                                name='username'
                                placeholder="Username"
                                className="input w-full max-w-xs" 
                                value={formData.username}
                                onChange={handleChange}
                            />                       
                        </div>

                        {/* Email */}
                        <div className='py-2 px-3'>
                            <input 
                                type="email" 
                                placeholder="Email"
                                className="input w-full max-w-xs" 
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />                       
                        </div>

                        {/* Phonenumber */}
                        <div className='py-2 px-3'>
                            <input 
                                type="text" 
                                placeholder="Phone Number"
                                className="input w-full max-w-xs" 
                                name='phone_number'
                                value={formData.phone_number}
                                onChange={handleChange}
                            />                       
                        </div>

                        {/* Rank */}
                        <div className='py-2 px-3'>
                            <input 
                                type="text" 
                                placeholder="Rank"
                                className="input w-full max-w-xs" 
                                name='rank'
                                value={formData.rank}
                                onChange={handleChange}
                            />                       
                        </div>

                        {/* Password */}
                        <div className='py-2 px-3'>
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

                        {/* Confirm Password */}
                        <div className='py-2 px-3'>
                            <div>
                                <input 
                                    type="password" 
                                    placeholder="Confirm Password"
                                    className="input w-full max-w-xs"
                                    name='password_confirmation'
                                    value={formData.password_confirmation}
                                    onChange={handleChange} 
                                />                       
                            </div>
                        </div>

                        {/* Button */}
                        <div className='bg-accent hover:bg-accent-content border-0 w-20 s:w-32 m:w-48 h-6 m:h-10 rounded-ss-3xl rounded-ee-3xl flex justify-center items-center align-middle cursor-pointer'>
                            <button 
                                className='font-tinos font-bold text-s m:text-lm'
                                type='submit'
                                disabled={isLoading}
                            >
                                {isLoading ? <div className='loading loading-spinner'></div> : 'SIGNUP'}
                            </button>
                        </div>
                    </div>

                    {/* Errors */}
                    {error && (
                        <div className='pt-5 font-shadow-light text-error font-bold text-sx px-3'>
                            The fields can't be empty
                        </div>
                    )}
                </form>
            </div>
        </div>
    </div>
  )
};

export default Signup;