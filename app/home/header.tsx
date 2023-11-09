'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='p-5 fixed top-0 left-0 z-20 flex flex-row justify-between w-full bg-black s:bg-transparent opacity-70'>
      {/* Logo */}
      <div>
          <Image 
              src='/logo.png'
              alt='Logo'
              width={65}
              height={56}
          />
      </div>

      {/* Links */}
      <div>
          Sign Out
      </div>
    </div>
  )
}

export default Header