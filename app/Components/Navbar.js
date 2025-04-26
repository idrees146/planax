import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='Navbar hidden backdrop-blur-lg mx-auto md:flex items-center justify-between rounded-lg  bg-white/20 md:w-[92vw] h-20 mt-4'>

            <div className="left">
                <Image

                    src="/logo2.png"
                    width={180}
                    height={100}
                    alt='Logo Planax'
                />

            </div>


            <div className="center">


                <ul className='flex gap-7 font-bold text-white'>

                    <li className='cursor-pointer hover:underline transition duration-400'>How it Works</li>

                    <li className='cursor-pointer hover:underline transition duration-400'>Plans and Pricing</li>


                    <li className='cursor-pointer hover:underline transition duration-400'>About us</li>


                    <li className='cursor-pointer hover:underline transition duration-400'>Road map</li>


                </ul>

            </div>


            <div className="right flex gap-4 mr-4 text-white">

                <button className='bg-blue-200/30 hover:bg-white/40 cursor-pointer rounded-lg px-2 py-1'>Demo</button>
                <button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600   hover:bg-blue-500 cursor-pointer rounded-lg px-2 py-1'>Join Now</button>

            </div>


        </div>
    )
}

export default Navbar