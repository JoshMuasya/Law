'use client'

import React, { useState, useEffect } from 'react'

import LawyerCard from '../components/LawyerCard';
import Link from 'next/link';

interface CaseType {
  id: number;
  case_number: string;
  case_description: string;
  case_logged: string;
  next_hearing: string;
  lawyer: number;
}

const Home = () => {
  const [casesArray, setCasesArray] = useState<CaseType[]>([])

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const casesPromise = fetch('http://127.0.0.1:8000/cases/cases', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Request failed:", response.status)
          throw new Error('Failed to fetch cases')
        }
      });

      Promise.all([ casesPromise ])
      .then(([ casesData ]) => {
        setCasesArray(casesData);
      })
      .catch(error => {
        console.error('Error:', error.message);
      })
    } else {
      console.log('Check Authentication details');
    }
  }, []);

  const latestCases: CaseType[] = casesArray
  .sort((a, b) => new Date(a.next_hearing).getTime() - new Date(b.next_hearing).getTime())
  .slice(0, 3);

  return (
    <div className='w-full h-full m:h-screen flex flex-col justify-center align-middle items-center back-pic-dark bg-fixed bg-cover pt-16 pb-14'>
      {/* Overlay */}
      <div className='fixed m:h-screen h-fit top-0 left-0 right-0 bottom-0 z-[2] bg-black opacity-70'/>
      {/* Main */}
      <div className='z-10 flex flex-col items-center align-middle justify-center w-4/5 my-24 m:my-5'>
        {/* Top */}
        <div className='flex m:flex-row flex-col items-center align-middle justify-center w-full m:mb-10'>
          {/* Left */}
          <div className="card w-96 bg-primary text-primary-content mb-10 m:mb-0 m:mr-10">
            <div className="card-body flex flex-col justify-center items-center align-middle">
              <h2 className="card-title font-black font-mont text-lg pb-3">LAWYERS</h2>
              <div className='flex flex-col m:flex-row justify-center items-center align-middle font-tinos text-sx'>
                {latestCases.map((latestCase) => (
                  <div key={latestCase.id}>
                    <LawyerCard
                      lawyerName={latestCase.lawyer}
                      caseNumber={latestCase.case_number}
                      nextHearing={latestCase.next_hearing}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="card w-96 bg-primary text-primary-content mb-10 m:mb-0">
            <div className="card-body font-tinos">
              <h2 className="card-title font-black font-mont text-lg pb-3">CASES</h2>
              <p className='font-semibold text-lm'>Add or View Cases</p>
              <div className="card-actions justify-between">
                <Link 
                  href='/home/cases'
                  className="btn"
                >
                    Add Case
                </Link>

                <Link 
                  href='/home/cases/view'
                  className="btn"
                >
                    View Cases
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='flex m:flex-row flex-col items-center align-middle justify-center w-full'>
          {/* Left */}
          <div className="card w-96 bg-primary text-primary-content mb-10 m:mb-0 m:mr-10">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h1 className='card-title'>Card Title</h1>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home