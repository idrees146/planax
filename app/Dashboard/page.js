
"use client"
import React from 'react'
import { AnimatePresence, motion, vw } from 'framer-motion'
import { useState, useEffect } from 'react'
import StopWatch from '../Components/StopWatch'
import Gotham from '../Components/Gotham'
import { supaBase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Calendar from '../Components/Calendar'
import Tasks from '../Components/Tasks'




const Page = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [Drive, setDrive] = useState(false)
    //Drive To Gotham

    const driveCar = () => {
        setDrive(true)
        setIsOpen(true)
        window.scrollTo({ top: 0, behaviour: "smooth" })


    }




    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize(); // check initially
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supaBase.auth.getUser()
            if (!user) {
                router.push('/Login') // not logged in, redirect
            } else {
                setUser(user)
            }
        }
        getUser()
    }, [])



    // State Lifting nhi blke Date Lifting hai bhai ye tho 

    const [selectedDate, setSelectedDate] = useState(new Date().getDate());
    const [month, setMonth] = useState(new Date().getMonth()+1)
    const [year, setYear] = useState(new Date().getFullYear());



    return (
        <section className="main text-white flex flex-col lg:flex-row justify-center  lg:items-start items-center   gap-5 px-4 py-8">








            {/* Left Section */}
            <div className="left w-full  bg-white/20 rounded-2xl md:w-3/4  xl:ml-10 lg:w-2/3  ">


                <Calendar setSelectedDate={setSelectedDate} setYear={setYear} setMonth={setMonth} />






            </div>


            <div className="center   w-full lg:h-[90vh] bg-white/20 rounded-2xl ">

            <div className="flex items-center mt-4 gap-5 ml-4">
                    <img src="plan.png" className='w-10' alt="" />

                    <h3 className='text-xl font-bold'> Tasks For: <span className="text-green-300 font-bold"> {`${selectedDate + "-" + month + "-" + year}`} </span> </h3>
                </div>

                <hr className='my-5 w-[95%] mx-auto' />

                <div className='overflow-y-auto w-full  lg:h-[73vh]   rounded-2xl custom-scrollbar '>
                <Tasks year={year} selectedDate={selectedDate} month={month} />
                </div>
                

            </div>






            {/* Right Section */}
            <div className="right flex lg:h-screen flex-col items-center w-1/3    gap-12">

                {/* Image and Button */}
                <div className="flex flex-col items-center  gap-10">

                    <div className=' md:w-[70vw]   lg:w-96 w-[85vw] z-0 '>




                        <motion.div


                            initial={{ y: 0, x: 0 }}
                            className=''
                            animate={{
                                y: Drive ? 0 : [0, -20, 0],
                                x: Drive ? (isMobile ? 0 : "-60vw") : 0,




                            }} exit={{ opacity: 0 }}
                            transition={{
                                y: {
                                    repeat: Drive ? 0 : Infinity,
                                    duration: 2,
                                    ease: "easeInOut"
                                },
                                x: {
                                    duration: 2,
                                    type: "spring",
                                    stiffness: 50
                                }
                            }
                            }





                        >


                            <img src="batmob.png" className={`md:w-80 mx-auto w-[90vw]    drop-shadow-xl drop-shadow-gray-300 transition-all duration-500`} alt="Batmobile" />
                        </motion.div>



                    </div>









                </div>







                {/* Deep Focus Box */}
                <div className="box cursor-pointer     bg-white/20 border border-white rounded-2xl p-2   h-64 w-[90vw] md:w-96 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                            <img width={35} src="diary.png" alt="Notes" />
                            <h2 className="font-bold">Quick Notes</h2>
                        </div>
                        <button className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-800 to-purple-800 hover:to-purple-500 text-white p-2 rounded-md text-sm">
                            <img width={20} src="add.svg" alt="Add" />
                            Add
                        </button>
                    </div>
                    <hr className="border-white mb-2" />
                    <textarea placeholder="Enter your short notes here" className="bg-slate-950 text-white p-2 rounded-xl text-sm  2xl:h-40 h-36 resize-none"></textarea>
                </div>





            </div>




        </section >
    )
}

export default Page
