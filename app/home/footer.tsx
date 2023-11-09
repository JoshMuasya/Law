import React from 'react';

import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 bg-neutral text-secondary w-full z-10'>
        {/* copyright */}
        <div className='w-full flex flex-row px-5 py-2 justify-end font-shadow-light text-sx m:text-l'>
            {/* copy */}
            <div>
              Copyright
            </div>

            {/* Icon */}
            <div>
              <CopyrightIcon />
            </div>

            {/* Company */}
            <div>
              Digimatic 2023
            </div>
        </div>
    </div>
  )
}

export default Footer