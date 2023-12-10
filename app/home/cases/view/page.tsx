'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ViewDropdown from '@/app/components/ViewDropdown'

interface CaseType {
  id: number;
  caseNo: string;
  caseName: string;
  court: string;
  location: string;
  summary: string;
  status: string;
}

interface DateHistoryType {
  id: number;
  date_name: string;
  date_value: string;
  case: number;
}

interface ExtendedCaseType extends CaseType {
  date_histories: DateHistoryType[];
}

const ViewCases = () => {
  const [caseArray, setCaseArray] = useState<ExtendedCaseType[]>([]);

    useEffect(() => {
      fetchCases()        
    }, []);

    const fetchCases = () => {
      // Use Token to make Request
      const casesPromise = fetch('http://127.0.0.1:8000/cases/cases/', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.log("Request failed:", response.status);
            throw new Error('Failed to fetch cases')
        }
    });

    Promise.all([ casesPromise ])
    .then(([ casesData ]) => {
        setCaseArray(casesData);
    })
    .catch(error => {
        console.log("Error:", error.message);
    })
    }

    const handleDataUpdate = () => {
      fetchCases()
    }

  return (
    <div className='w-full h-full flex flex-col justify-center align-middle items-center back-pic-dark bg-fixed bg-cover pt-16 pb-14'>
      {/* Overlay */}
      <div className='fixed m:h-screen h-full top-0 left-0 right-0 bottom-0 z-[2] bg-black opacity-70'/>
      {/* Main */}
      <div className='z-10 flex flex-col items-center align-middle justify-center my-24 w-full'>
        {/* Title */}
        <div>
          <h2 className="card-title font-black font-mont text-lg pb-3">
            VIEW CASES
          </h2>
        </div>

        {/* Content */}
        {caseArray.map((singleCase) => (
          <div key={singleCase.id} className='my-3 w-4/5'>
            <ViewDropdown 
              location={singleCase.location}
              court={singleCase.court}
              caseNo={singleCase.caseNo}
              caseName={singleCase.caseName}
              summary={singleCase.summary}
              date_histories={singleCase.date_histories}
              case_id={singleCase.id}
              onDataUpdated={handleDataUpdate}
            />          
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewCases