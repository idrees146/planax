import React from 'react'

const Footer = () => {
    return (
        <footer className='flex md:flex-row flex-col text-center md:text-start md:mt-28  pb-10 bg-gradient-to-r from-blue-800 to-purple-800   mt-20 justify-between text-white items-center'>

            <div className="logo-section md:w-[400px] md:ml-20">

                <img className='md:w-60 mt-5 cursor-pointer  ' src="logo2.png" alt="" />


                <p className='md:ml-10 w-[90vw] md:w-full mx-auto mt-5'>Planax is one of the best productivity Application Designed and Developed by ShaziSoft</p>
                <p className='md:ml-10 mt-5'>Join Our Community</p>


                <div className="socials mt-5 gap-4 md:ml-10
  flex justify-center md:justify-start items-center">

                    <img width={45} className='cursor-pointer hover:scale-105 transition-all' src="fb.png" alt="" />
                    <img width={60} className='cursor-pointer hover:scale-105 transition-all' src="insta.png" alt="" />
                </div>
            </div>

            <div className="navigations flex flex-col j justify-start items-center my-10 md:items-start gap-4">


              <button className='cursor-pointer hover:underline'>About us</button> 
              <button className='cursor-pointer hover:underline'>Contact us</button>
              <button className='cursor-pointer hover:underline'>Become Partner</button>
              <button className='cursor-pointer hover:underline'> Get Started</button>
            
                
               


            </div>



            <div className="searchbar md:mr-10">

                <input type="text" className="search md:w-full bg-white text-blue-900 p-2 rounded-lg " placeholder='Search This Site' />
            </div>


        </footer>
    )
}

export default Footer