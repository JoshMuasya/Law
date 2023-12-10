"use client"

import React, { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

interface DateHistoryType {
    id: number;
    date_name: string;
    date_value: string;
}

interface DropdownProps {
    location: string;
    court: string;
    caseNo: string;
    caseName: string;
    summary: string;
    date_histories: DateHistoryType[];
    case_id: number;
}

interface ViewDropdownProps extends DropdownProps {
    onDataUpdated: () => void;
}

const ViewDropdown: React.FC<ViewDropdownProps> = ({ location, court, caseNo, caseName, summary, date_histories, case_id, onDataUpdated }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [date_name, setDate_name] = useState('');
    const [date_value, setDate_value] = useState('');

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'date_name') {
            setDate_name(value);
        } else if (name === 'date_value') {
            setDate_value(value);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newDateHistory = {
            date_name: date_name,
            date_value: date_value,
            case: case_id,
        };

        console.log("CaseID:", case_id)
        console.log("Date:", date_value)
        console.log("Request Payload:", JSON.stringify(newDateHistory));

        fetch('http://127.0.0.1:8000/cases/date-histories/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDateHistory),
        })
        .then(response => {
            console.log(response);
            if (response.ok) {
                console.log('Date history submitted successfully');

                onDataUpdated();

                setDate_name('')
                setDate_value('')

            } else {
                console.log('Failed to submit, Check Date formart')
            }
        })
        .catch(error => {
            console.error('Error', error);
        })
    }

    return (
        <div className="bg-base-100 p-4 rounded shadow-md text-neutral-content w-full">
            <div className="flex justify-between items-center mb-4 w-full">
                <div className='flex flex-row justify-between items-center align-middle w-full text-lm font-bold'>
                    {/* Location */}
                    <div className=''>
                        {location}
                    </div>

                    {/* Court */}
                    <div>
                        {court}
                    </div>

                    {/* Case Number */}
                    <div>
                        {caseNo}
                    </div>

                    {/* Case Name */}
                    <div>
                        {caseName}
                    </div>
                </div>
                <button
                    className="text-neutral-content hover:text-info"
                    onClick={toggleDetails}
                >
                    {
                        showDetails ? <ArrowDropUpIcon className='text-xl'/> : <ArrowDropDownIcon className='text-xl'/>
                    }
                </button>
            </div>

            {showDetails && (
                <div>
                    <p className="mb-4">
                        {summary}
                    </p>

                    <form onSubmit={handleSubmit} className="mb-4">
                        {/* Date Name */}
                        <label htmlFor="date_name" className="block text-sx font-medium text-primary-content">
                            Date Name:
                        </label>
                        <input
                            type="text"
                            id="date_name"
                            name="date_name"
                            value={date_name}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border rounded w-full"
                        />

                        {/* Date Value */}
                        <label htmlFor="date_value" className="block mt-4 text-sx font-medium text-primary-content">
                            Date Value:
                        </label>
                        <input
                            type="text"
                            id="date_value"
                            name="date_value"
                            placeholder='YYYY-MM-DD'
                            value={date_value}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border rounded w-full"
                        />

                        <button
                            type="submit"
                            className="mt-4 bg-primary text-primary-content px-4 py-2 rounded hover:bg-info"
                        >
                            Submit
                        </button>
                    </form>

                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="border p-2">Date Name</th>
                                <th className="border p-2">Date Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {date_histories.map((history) => (
                                <tr>
                                    <td className="border p-2">
                                        {history.date_name}
                                    </td>
                                    <td className="border p-2">
                                        {history.date_value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ViewDropdown