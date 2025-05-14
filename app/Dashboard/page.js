
"use client"
import React from 'react'
import { AnimatePresence, motion, vw } from 'framer-motion'
import { useState, useEffect } from 'react'
import StopWatch from '../Components/StopWatch'
 import Gotham from '../Components/Gotham'
 import { supaBase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

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

    return (
        <section className="main text-white flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 px-4 py-8">






            {/* Left Section */}
            <div className="left flex flex-col gap-6 w-full lg:h-screen xl:ml-10 lg:w-2/3 xl:w-1/2">

                {/* Upper Boxes */}


                <AnimatePresence>

                    {!Drive && (



                        <motion.div

                            initial={{ y: 0, opacity: 1 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}


                        >
                            <div className="upper flex flex-col md:flex-row items-center justify-center gap-6">

                                {/* Weekly Assignments */}
                                <div className="box cursor-pointer  w-full md:w-1/2 bg-white/20 border border-white rounded-2xl p-4 overflow-auto h-60">
                                    <div className="flex items-center gap-3 mb-2">
                                        <img width={35} src="assignment.png" alt="Assignment" />
                                        <h2 className="font-bold">Weekly Assignments</h2>
                                    </div>
                                    <hr className="border-white mb-2" />
                                    <p>DSA Assignment3 - 24 April 2025</p>
                                    <p>DSA Assignment3 - 24 April 2025</p>
                                    <p>DSA Assignment3 - 24 April 2025</p>
                                </div>

                                {/* Weekly Quizzes */}
                                <div className="box cursor-pointer   shadow-lg w-full md:w-1/2 bg-white/20 border border-white rounded-2xl p-4 overflow-auto h-60">
                                    <div className="flex items-center gap-3 mb-2">
                                        <img width={35} src="plan.png" alt="Quiz" />
                                        <h2 className="font-bold">Weekly Quizzes</h2>
                                    </div>
                                    <hr className="border-white mb-2" />
                                    <p>DSA Assignment3 - 24 April 2025</p>
                                    <p>DSA Assignment3 - 24 April 2025</p>
                                    <p>DSA Assignment3 - 24 April 2025</p>
                                </div>

                            </div>


                        </motion.div>

                    )}
                </AnimatePresence>

                {/* Lower Boxes */}




                <AnimatePresence>

                    {!Drive && (



                        <motion.div

                            initial={{ y: 0, opacity: 1 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 10, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}


                        >
                            <div className="lower flex flex-col md:flex-row items-center justify-center gap-6">

                                {/* Project Deadlines */}
                                <div className="box cursor-pointer   w-full md:w-1/2 bg-white/20 border border-white rounded-2xl p-4 overflow-auto h-60">
                                    <div className="flex items-center gap-3 mb-2">
                                        <img width={35} src="freelancer.png" alt="Project" />
                                        <h2 className="font-bold">Project Deadlines</h2>
                                    </div>
                                    <hr className="border-white mb-2" />
                                    <p>DSA Assignment3 - 24 April 2025</p>
                                    <p>DSA Assignment3 - 24 April 2025</p>
                                    <p>DSA Assignment3 - 24 April 2025</p>
                                </div>

                                {/* Quick Notes */}
                                <div className="box cursor-pointer    w-full md:w-1/2 bg-white/20 border border-white rounded-2xl p-4 h-60 flex flex-col justify-between">
                                    <div className="flex justify-between items-center mb-2">
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
                                    <textarea placeholder="Enter your short notes here" className="bg-slate-900 text-green-300 p-2 rounded-xl text-sm h-28 resize-none"></textarea>
                                </div>

                            </div>



                        </motion.div>

                    )}
                </AnimatePresence>

            </div>






            {/* Right Section */}
            <div className="right flex md:h-screen flex-col items-center w-full lg:w-1/3  gap-8">

                {/* Image and Button */}
                <div className="flex flex-col items-center gap-4">

                    <div className=' md:w-96  z-0 '>




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


                            <img src="batmob.png" className={`md:w-80 mx-auto     drop-shadow-xl drop-shadow-gray-300 transition-all duration-500`} alt="Batmobile" />
                        </motion.div>



                    </div>




                    <AnimatePresence>

                        <motion.div

                            initial={{ x: 0, opacity: 1 }}
                            animate={{ x: 0, opacity: Drive ? 0 : 1 }}
                        >


                           



                        </motion.div>
                    </AnimatePresence>


                </div>



                <AnimatePresence>

                    <motion.div

                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: 0, opacity: Drive ? 0 : 1 }}
                    >



                        {/* Deep Focus Box */}
                        <StopWatch />



                    </motion.div>
                </AnimatePresence>

            </div>




        </section >
    )
}

export default Page
