import React from 'react'
import imagen from '../assets/alfonzo-rivas-cia-logo-244A80E66E-seeklogo.com.png'
import trabajador from '../assets/download.jpg'

function Navbar() {
    return (
        <div className="navbar  shadow-md h-[7rem] items-center px-">
            <div className="flex-1">
                <img className='' src={imagen} alt='asda' />
            </div>

            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={trabajador} alt="hola" />
                </div>
            </div>





        </div>
    )
}

export default Navbar