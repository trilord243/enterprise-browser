import React from 'react'
import imagen from '../assets/kisspng-barcode-scanners-stock-photography-label-barcode-scanner-5b23783931ad21.9003898115290511932035.jpg'

function Hero() {
    return (
        <div className='h-screen w-full  flex mt-32 justify-center '>



            <div className=' flex w-9/12 h-16 rounded-3xl bg-sky-400  items-center text-center justify-center content-center '>
                <h1 className=' text-4xl font-bold '>Comenzando lectura</h1>
                <span className="loading loading-dots loading-lg mt-6 ml-3 "></span>



            </div>
        </div>


    )
}

export default Hero