import React from 'react'

interface LawyerCardProps {
    lawyerName: string;
    caseNumber: string;
    nextHearing: string;
}

const LawyerCard: React.FC<LawyerCardProps> = ({ lawyerName, caseNumber, nextHearing }) => {
  return (
    <div className='pb-3'>
        <h1 className='text-lm font-bold'>{lawyerName}</h1>
        <div className='card-actions justify-end'>
            <p>Case No. {caseNumber} Lorem Ipsum</p>
            <p>Next Hearing: {nextHearing}</p>
        </div>
    </div>
  );
};

export default LawyerCard