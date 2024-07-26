import React from 'react';
import { Outlet } from 'react-router-dom';
import '../css/common.css'
function Main(){
    return(
        <>
        <div className='w-full p-3 bg-gray-900 h-screen'>
            Main
            <Outlet />
        </div>
        </>
    )

}

export default Main;