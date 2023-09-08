import React from 'react'
import imagen from '../assets/alfonzo-rivas-cia-logo-244A80E66E-seeklogo.com.png'
import trabajador from '../assets/download.jpg'

function Navbar() {
    return (
        <div className="navbar bg-white shadow-md h-[7rem] flex items-center px-8">
            <div className="flex-1">
                <img className='h-20' src={imagen} alt='Logo' />
            </div>
            <div className="avatar">
                <div className="w-24 h-24 rounded-full border overflow-hidden">
                    <img className='w-full h-full object-cover' src={trabajador} alt="Avatar" />
                </div>
            </div>
        </div>
    );
}


export default Navbar