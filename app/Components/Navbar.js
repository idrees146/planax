"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Gotham from './Gotham'
import { supaBase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'






const Navbar = () => {

const router = useRouter();

    const [session, setSession] = useState(null)

    useEffect(() => {
        // Get initial session
        const getSession = async () => {
            const { data: { session } } = await supaBase.auth.getSession()
            setSession(session)
        }

        getSession()

        // Listen to session changes (login/logout)
        const {
            data: { subscription },
        } = supaBase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])


    useEffect(() => {
        if (!session) {
            router.push('/Login')
        }
    }, [session])


    //SideBar logic


    const [sideBar, setSideBar] = useState('-left-[100vw]')






    const handleSideBar = () => {

        if (sideBar == "-left-[100vw]") {
            setSideBar('left-0')

        }

        if (sideBar == "left-0") {
            setSideBar("-left-[100vw]")

        }

    }



    //Sidebar Effectivity


    const closeSidebar = () => {
        setSideBar("-left-[100vw]")
    }


    const [isOpen, setIsOpen] = useState(false)

    const [Drive, setDrive] = useState(false)
    //Drive To Gotham

    const driveCar = () => {
        setDrive(true)
        setIsOpen(true)
        window.scrollTo({ top: 0, behaviour: "smooth" })



    }


    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <>

{showDropdown && (
                    <div ref={dropdownRef} className='absolute group top-20 md:top-25 right-0 md:right-10  bg-white text-black rounded-lg shadow-md p-3 w-40 z-50'>
                        <ul className='space-y-2'>
                            <li className='hover:bg-gray-100 p-2 rounded cursor-pointer'>Profile</li>
                            <li className='hover:bg-gray-100 p-2 rounded cursor-pointer'>Settings</li>
                            <li
                                onClick={async () => {
                                    await supaBase.auth.signOut()
                                    setSession(null)
                                    setShowDropdown(false)
                                }}
                                className='hover:bg-gray-100 p-2 rounded cursor-pointer text-red-600'
                            >
                                Logout
                            </li>
                        </ul>
                    </div>
                )}

            <Gotham isOpen={isOpen} setIsOpen={setIsOpen} setDrive={setDrive} />


            <div className={`Navbar   backdrop-blur-lg mx-auto flex items-center  justify-between rounded-lg  bg-white/20 md:w-[92vw] h-20 md:mt-4`}>

                <div className="left flex items-center justify-center">


                    <button onClick={handleSideBar}>  <svg xmlns="http://www.w3.org/2000/svg" className='ml-10 md:hidden' height="40px" viewBox="0 -960 960 960" width="40px" fill="#75FBFD"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg></button>


                    <Image

                        src="/logo2.png"
                        width={180}
                        height={100}
                        alt='Logo Planax'
                    />

                </div>


                <div className="center">


                    <ul className='flex gap-3 lg:gap-7 font-bold text-white'>

                        {!session && (
                            <Link href="/">    <li className='cursor-pointer hidden md:block hover:underline transition duration-400'>Home</li></Link>
                        )}

                        {session && (
                            <Link href="/Dashboard">    <li className='cursor-pointer hidden md:block hover:underline transition duration-400'>Dashboard</li></Link>
                        )}
                        <Link href="/Pricing">  <li className='cursor-pointer hidden md:block hover:underline transition duration-400'> Pricing</li></Link>


                        <Link href="/About"><li className='cursor-pointer hidden md:block hover:underline transition duration-400'>About</li></Link>


                        <Link href="/Contact">  <li className='cursor-pointer hidden md:block hover:underline transition duration-400'>Contact</li></Link>



                    </ul>

                </div>


                <div className="right  flex gap-4 mr-4 text-white">


                    {!session && (

                        <Link href="/Login">  <button className='bg-gradient-to-r  from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600   hover:bg-blue-500 cursor-pointer rounded-lg p-2'>Sign in</button></Link>
                    )}

                    {session && (
                        <button onClick={driveCar} className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600   hover:bg-blue-500 cursor-pointer rounded-lg p-2'>Map</button>
                    )}

                    {session && (
                        <button onClick={() => setShowDropdown(!showDropdown)} className='    cursor-pointer w-10 flex justify-center rounded-full bg-white/30'> <img width={30} height={30} src="user.svg" alt="" /></button>


                    )}





                </div>



               
 
            </div>









            {/* Side bar component  */}

            <div className={`sidebar md:hidden transition-all duration-300   bg-gradient-to-r from-blue-900 to-purple-800  w-2/3 pb-6 z-50  absolute top-0 ${sideBar}`}>


                <div className="flex items-center justify-between">
                    <img width={180} src="logo2.png" alt="" />

                    <button onClick={handleSideBar} className="mr-3 ">


                        <svg xmlns="http://www.w3.org/2000/svg" className='' height="40px" viewBox="0 -960 960 960" width="40px" fill="#75FBFD"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" /></svg>


                    </button>

                </div>




                <ul className=' my-14 ml-10 flex flex-col font-bold text-white'>

                    <Link href="/"> <button onClick={closeSidebar}><li className='cursor-pointer mt-3 flex items-center gap-2   hover:underline transition duration-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#75FBFD"><path d="M140-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h180v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H140v480Zm240-540h200v-100H380v100ZM140-180v-480 480Z" /></svg>

                        Home</li> </button> </Link>

                    <Link href="/Pricing">  <button onClick={closeSidebar}>   <li className='cursor-pointer mt-3 flex items-center gap-2   hover:underline transition duration-400'>

                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#75FBFD"><path d="M880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33ZM146.67-634h666.66v-99.33H146.67V-634Zm0 139.33v268h666.66v-268H146.67Zm0 268v-506.66 506.66Z" /></svg>

                        Plans and Pricing</li> </button></Link>


                    <Link href="/About">   <button onClick={closeSidebar}>   <li className='cursor-pointer mt-3 flex items-center gap-2  hover:underline transition duration-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#75FBFD"><path d="M448.67-280h66.66v-240h-66.66v240Zm31.32-316q15.01 0 25.18-9.97 10.16-9.96 10.16-24.7 0-15.3-10.15-25.65-10.16-10.35-25.17-10.35-15.01 0-25.18 10.35-10.16 10.35-10.16 25.65 0 14.74 10.15 24.7 10.16 9.97 25.17 9.97Zm.19 516q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" /></svg>

                        About me</li> </button>  </Link>


                    <Link href="/Contact">  <button onClick={closeSidebar}> <li className='cursor-pointer mt-3 flex items-center gap-2  hover:underline transition duration-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#75FBFD">
                            <path d="M113.27-240Q83-240 61.5-261.56 40-283.12 40-313.39q0-30.28 21.5-51.78 21.49-21.5 51.68-21.5 5.49 0 10.32.34 4.83.33 11.83 2.33l194-194q-2-7-2.33-11.83-.33-4.84-.33-10.33 0-30.18 21.56-51.68 21.55-21.49 51.83-21.49 30.27 0 51.77 21.59 21.5 21.59 21.5 51.9 0 1.84-2.66 21.84L578-470.67q7-2 11.83-2.33 4.84-.33 10.17-.33t10.17.33q4.83.33 11.83 2.33l154-154q-2-7-2.33-11.83-.34-4.83-.34-10.32 0-30.19 21.56-51.68 21.55-21.49 51.83-21.49 30.27 0 51.77 21.56 21.5 21.56 21.5 51.83 0 30.28-21.5 51.78-21.49 21.5-51.68 21.5-5.49 0-10.32-.34-4.83-.33-11.83-2.33l-154 154q2 7 2.33 11.83.33 4.84.33 10.33 0 30.18-21.56 51.68-21.55 21.49-51.83 21.49-30.27 0-51.77-21.49-21.5-21.5-21.5-51.68 0-5.49.33-10.33.33-4.83 2.33-11.83L422-529.33q-7 2-11.83 2.33-4.84.33-10.34.33-1.83 0-21.83-2.66l-194 194q2 7 2.33 11.83.34 4.83.34 10.32 0 30.19-21.56 51.68-21.56 21.5-51.84 21.5Z" />
                        </svg>


                        Contact us</li> </button></Link>


                </ul>

            </div>


        </>
    )
}

export default Navbar