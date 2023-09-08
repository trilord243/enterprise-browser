import React from 'react'
import imagen from '../assets/kisspng-barcode-scanners-stock-photography-label-barcode-scanner-5b23783931ad21.9003898115290511932035.jpg'

function Hero() {
    return (
        <div className='h-screen w-full flex justify-center items-center bg-gradient-to-br from-sky-300 to-sky-500'>
            <div className='flex w-9/12 h-24 rounded-3xl bg-white shadow-xl items-center justify-between p-6'>
                <h1 className='text-4xl font-bold'>Comenzando lectura</h1>
                <span className="loading loading-dots loading-lg mt-1"></span>
            </div>
        </div>
    );
}


export default Hero