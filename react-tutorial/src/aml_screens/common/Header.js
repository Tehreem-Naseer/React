import React from 'react';
import '../css/common.css'
import { FaBars } from "react-icons/fa6";
function Header(){
    return(
        <>
        <div className='bg-gray-800 border-b border-b-[#888] text-white flex'>
          <button className='ml-3'><FaBars size={20}/></button>
           <a href='#' className='flex px-3 py-3 items-center'>
            <img src="https://placeholder.co/40x40" className='rounded-full' alt=''/>
            <span className='ml-4 text-xl font-semibold'>Remote Div</span>
            </a>
        </div>
        </>
    )

}

export default Header;