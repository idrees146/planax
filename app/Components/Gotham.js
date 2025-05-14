"use client"

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
 

const Gotham = ({ isOpen, setIsOpen, setDrive }) => {

    

     const closeGotham = () => {
            setDrive(false)
            setIsOpen(false)
    
        }

  return (
   <>
   
   
   <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <div className=" map-father  rounded-xl   w-[95vw] h-[60vh]     md:w-[90vw] lg:w-[80vw] md:h-[80vh]   ">


                            <div className="map text-white text-sm md:text-md relative w-[95vw] h-[60vh]  md:h-[80vh]  md:w-[90vw] lg:h-[80vh] lg:w-[80vw] border    rounded-xl border-white   bg-gradient-to-r from-blue-900 backdrop:shadow-2xl backdrop:shadow-white to-purple-950">

                                <div className="assignments absolute xl:top-[1%] top-[8%] hover:scale-105 transition-all duration-300 cursor-pointer left-[1%]">
                                    <img src="assignments.png" className='md:w-28 w-20 xl:w-32 mx-auto' alt="" />

                                    <div className='w-1/2 text-center mx-auto'>


                                        <span className='text-center  '>Assignments Arena</span>

                                    </div>
                                </div>



                                <div className="main-road w-[100%] absolute h-[6%] top-[40%] md:top-[50%] bg-gray-200 text-center text-gray-800 text-sm">Gotham Central Highway</div>


                                <img src="home1.png" className='md:w-12 w-8 absolute top-[10%]  left-[36%]  md:left-[27%]' alt="" />
                                <img src="home1.png" className='md:w-12 w-8 absolute top-[17%] left-[46%]  md:left-[36%]' alt="" />

                                <img src="tree.png" className='md:w-12 w-8 absolute top-[15%] left-[32%] md:left-[30%]' alt="" />
                                <img src="tree.png" className='md:w-12 w-8 absolute top-[24%] left-[45%]  md:left-[34%]' alt="" />



                                <img src="home1.png" className='md:w-12 w-8 absolute md:top-[20%]  md:right-[27%]' alt="" />
                                <img src="home1.png" className='md:w-12 w-8 absolute md:top-[27%] hidden md:block md:right-[36%]' alt="" />
                                <img src="tree.png" className='md:w-12 w-8 absolute md:top-[15%] hidden md:block md:right-[36%]' alt="" />


                                <div className="main-road w-[1%] absolute h-[50%] top-[0%] hidden md:block left-[20%] bg-gray-200 text-center text-gray-800 text-sm"></div>
                                <div className="main-road w-[1%] absolute h-[50%] top-[0%] hidden md:block left-[43%] bg-gray-200 text-center text-gray-800 text-sm"></div>
                                <div className="main-road w-[1%] absolute h-[40%] md:h-[50%] md:top-[0%] right-[38%] md:right-[22%] bg-gray-200 text-center text-gray-800 text-sm"></div>


                                <div className="assignments absolute top-[8%] hover:scale-105 transition-all duration-300 cursor-pointer right-[4%]">
                                    <img src="freelance.png" className='md:w-28 w-20 mx-auto xl:w-32' alt="" />
                                    <span className='text-center'>Personal Notes</span>
                                </div>

                                <div className="assignments z-50 absolute bottom-[16%] hover:scale-105 transition-all duration-300 cursor-pointer left-[4%]">
                                    <img src="diaryn.png" className='md:w-28 w-20 mx-auto xl:w-32' alt="" />
                                    <span className='text-center z-50'>Freelance Tower</span>
                                </div>

                                <div className="assignments absolute bottom-[28%] hover:scale-105 transition-all duration-300 cursor-pointer left-[40%] md:left-[30%]">
                                    <img src="admin.png" className='md:w-28 w-20 mx-auto xl:w-32' alt="" />
                                    <span className='text-center'>Admin Tower</span>
                                </div>
                                <img src="tree.png" className='md:w-12 w-8 absolute bottom-[10%] left-[30%]' alt="" />
                                <img src="tree.png" className='md:w-12 w-8 absolute bottom-[2%] left-[32%]' alt="" />
                                <img src="tree.png" className='md:w-12 w-8 absolute bottom-[6%] left-[39%]' alt="" />

                                <div className="assignments absolute bottom-[18%] hover:scale-105 transition-all duration-300 cursor-pointer right-[2%] md:right-[27%]">
                                    <img src="Quizzes.png" className='md:w-28 w-20 mx-auto xl:w-32' alt="" />
                                    <span className='text-center'>Quizzes Hub</span>
                                </div>
                                <div className="main-road w-[1%] absolute h-[46%] hidden md:block top-[54%] md:right-[45%] bg-gray-200 text-center text-gray-800 text-sm"></div>
                                <div className="main-road w-[24%] absolute h-[2%] hidden md:block top-[5%]  left-[20%] bg-gray-200 text-center text-gray-800 text-sm"></div>


                                <img src="tree.png" className='md:w-12 w-8 absolute bottom-[10%] left-[18%]' alt="" />
                                <div className="main-road w-[1%] absolute h-[50%] hidden md:block top-[50%] left-[25%] bg-gray-200 text-center text-gray-800 text-sm"></div>


                                <img src="home1.png" className='md:w-12 w-8 absolute hidden md:block bottom-[20%] right-[10%]' alt="" />
                                <img src="home1.png" className='md:w-12 w-8 absolute hidden md:block bottom-[27%] right-[15%]' alt="" />

                                <img src="home1.png" className='md:w-12 w-8 absolute bottom-[3%] md:bottom-[10%] right-[16%]' alt="" />
                                <img src="home1.png" className='md:w-12 w-8 absolute bottom-[10%] md:bottom-[15%] right-[20%]' alt="" />
                                <img src="tree.png" className='md:w-12 w-8 absolute bottom-[10%] right-[3%]' alt="" />
                                <img src="tree.png" className='md:w-12 w-8 absolute bottom-[10%] right-[8%]' alt="" />

                                <button onClick={closeGotham} className=' p-1 cursor-pointer hover:bg-blue-500 rounded-md  absolute bg-blue-600 top-2 right-2'><img width={25} src="close.svg" alt="" /></button>

                            </div>






                        </div>
                    </motion.div>
                )}
            </AnimatePresence>



   
   </>
  )
}

export default Gotham