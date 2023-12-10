"use client";

import React, { useEffect, useState } from "react";

type FormData = {
    caseNo: string;
    caseName: string;
    department: string;
    location: string;
    court: string;
    status: string;
    summary: string;
    loggedBy: string;
};

const AddCases = () => {
    // Convert to HttpOnly
    const tokenLocal =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const [username, setUsername] = useState<string | null>(null);
    // add Errors

    useEffect(() => {
        const fetchUser = async () => {
            const token = `${tokenLocal}`;
            if (token) {
                try {
                    const response = await fetch(
                        "http://127.0.0.1:8000/lawyers/token-auth/",
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Token ${token}`,
                            },
                        }
                    );

                    if (response.ok) {
                        const userData = await response.json();
                        setUsername(userData.user.username);
                    }
                } catch (error) {
                    console.error("Error fetching user information:", error);
                }
            }
        };

        fetchUser();
    }, [tokenLocal]);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            loggedBy: username || "",
        }));
    }, [username]);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");

    const [formData, setFormData] = useState<FormData>({
        caseNo: "",
        caseName: "",
        department: "",
        location: "",
        court: "",
        status: "",
        summary: "",
        loggedBy: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        let value = e.target.value;

        if (e.target.type === "datetime-local") {
            const localDate = new Date(value);
            const utcDate = new Date(
                localDate.getTime() - localDate.getTimezoneOffset() * 60000
            );
            value = utcDate.toISOString().slice(0, 16);
        }

        const updatedValue = e.target.name === "lawyer" ? username || "" : value;

        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: updatedValue,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const response = await fetch("http://127.0.0.1:8000/cases/cases/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': `Token ${token}`
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log("Case Added Successfully");
            resetForm();
            // implement a better routing system
            window.location.href = "../home/cases/view";
        } else {
            console.log("Failed to add Case");
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            caseNo: "",
            caseName: "",
            department: "",
            location: "",
            court: "",
            status: "",
            summary: "",
            loggedBy: "",
        });
    };

    if (username === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center align-middle items-center back-pic-dark bg-fixed bg-cover">
            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] h-screen bg-black opacity-70" />

            {/* Main */}
            <div className="z-10 w-full flex flex-col justify-center align-middle items-center">
                {/* Header */}
                <div className="font-mont font-black text-lm m:text-lg md:text-xl pb-1">
                    Add Cases
                </div>

                <div className="card w-4/5 s:w-2/3 m:w-2/5 bg-base-100 text-neutral-content">
                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="font-tinos py-3 px-1 flex flex-col justify-center align-middle items-center"
                    >
                        <div className="flex flex-col justify-center align-middle items-center">
                            {/* Case Number */}
                            <div className="py-2 px-3">
                                <input
                                    type="text"
                                    name="caseNo"
                                    placeholder="Case Number"
                                    className="input w-full max-w-xs"
                                    value={formData.caseNo}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Case Name */}
                            <div className="py-2 px-3">
                                <input
                                    type="text"
                                    name="caseName"
                                    placeholder="Case Name"
                                    className="input w-full max-w-xs"
                                    value={formData.caseName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Department */}
                            <div className="py-2 px-3">
                                <input
                                    type="text"
                                    name="department"
                                    placeholder="Department"
                                    className="input w-full max-w-xs"
                                    value={formData.department}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Location */}
                            <div className="py-2 px-3">
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Location"
                                    className="input w-full max-w-xs"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Court */}
                            <div className="py-2 px-3">
                                <input
                                    type="text"
                                    name="court"
                                    placeholder="Court"
                                    className="input w-full max-w-xs"
                                    value={formData.court}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Status */}
                            <div className="py-2 px-3">
                                <input
                                    type="text"
                                    name="status"
                                    placeholder="Status"
                                    className="input w-full max-w-xs"
                                    value={formData.status}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Summary */}
                            <div className="py-2 px-3">
                                <textarea
                                    placeholder="Case Summary"
                                    className="input w-full max-w-xs"
                                    name="summary"
                                    value={formData.summary}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Button */}
                            <div className="bg-accent hover:bg-accent-content border-0 w-20 s:w-32 m:w-48 h-6 m:h-10 rounded-ss-3xl rounded-ee-3xl flex justify-center items-center align-middle cursor-pointer">
                                <button
                                    className="font-tinos font-bold text-s m:text-lm"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="loading loading-spinner"></div>
                                    ) : (
                                        "Add Case"
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Errors */}
                        {error && (
                            <div className="pt-5 font-shadow-light text-error font-bold text-sx px-3">
                                The fields can't be empty
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCases;
