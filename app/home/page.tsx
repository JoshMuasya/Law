'use client'

import React, { useState, useEffect } from 'react'

import LawyerCard from '../components/LawyerCard';

const Home = () => {
  const [lawyerNames, setLawyerNames] = useState<string[]>([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      fetch('http://127.0.0.1:8000/lawyers/lawyers', {
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
        }
      })
      .then(data => {
        if (data && Array.isArray(data)) {
          const lawyers = data.filter(item => item.rank.toLowerCase() === 'owner');
          setLawyerNames(lawyers.map(lawyer => lawyer.username));
        }
        console.log('Data:', data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
    } else {
      console.log('Check Authentication details');
    }
  }, []);

  const getRandomLawyerNames = () => {
    if (lawyerNames.length < 4) {
      return lawyerNames
    }

    const randomIndices: number[] = [];
    while (randomIndices.length < 4) {
      const randomIndex = Math.floor(Math.random() * lawyerNames.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    return [
      lawyerNames[randomIndices[0]], 
      lawyerNames[randomIndices[1]], 
      lawyerNames[randomIndices[2]], 
      lawyerNames[randomIndices[3]],
    ]
  };

  const [randomLawyerName1, randomLawyerName2, randomLawyerName3, randomLawyerName4] = getRandomLawyerNames();

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
                <div>
                  <LawyerCard
                    lawyerName={randomLawyerName1}
                    caseNumber='001'
                    nextHearing='0800 30.01.2024'
                  />

                  <LawyerCard
                    lawyerName={randomLawyerName2}
                    caseNumber='002'
                    nextHearing='0800 30.02.2024'
                  />
                </div>

                <div>
                  <LawyerCard
                    lawyerName={randomLawyerName3}
                    caseNumber='003'
                    nextHearing='0800 30.03.2024'
                  />

                  <LawyerCard
                    lawyerName={randomLawyerName4}
                    caseNumber='004'
                    nextHearing='0800 30.04.2024'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="card w-96 bg-primary text-primary-content mb-10 m:mb-0">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
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