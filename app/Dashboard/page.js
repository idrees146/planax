import React from 'react'

const Page = () => {
    return (
        <section className="main text-white flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 px-4 py-8">
            
            {/* Left Section */}
            <div className="left flex flex-col gap-6 w-full xl:ml-10 lg:w-2/3 xl:w-1/2">
                
                {/* Upper Boxes */}
                <div className="upper flex flex-col md:flex-row items-center justify-center gap-6">
                    
                    {/* Weekly Assignments */}
                    <div className="box  w-full md:w-1/2 bg-white/20 border border-white rounded-2xl p-4 overflow-auto h-60">
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
                    <div className="box  w-full md:w-1/2 bg-white/20 border border-white rounded-2xl p-4 overflow-auto h-60">
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

                {/* Lower Boxes */}
                <div className="lower flex flex-col md:flex-row items-center justify-center gap-6">
                    
                    {/* Project Deadlines */}
                    <div className="box  w-full md:w-1/2 bg-white/20 border border-white rounded-2xl p-4 overflow-auto h-60">
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
                    <div className="box  w-full md:w-1/2 bg-white/20 border border-white rounded-2xl p-4 h-60 flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <img width={35} src="diary.png" alt="Notes" />
                                <h2 className="font-bold">Quick Notes</h2>
                            </div>
                            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-800 to-purple-800 hover:to-purple-500 text-white p-2 rounded-md text-sm">
                                <img width={20} src="add.svg" alt="Add" />
                                Add
                            </button>
                        </div>
                        <hr className="border-white mb-2" />
                        <textarea placeholder="Enter your short notes here" className="bg-slate-900 text-white p-2 rounded-xl text-sm h-28 resize-none"></textarea>
                    </div>

                </div>

            </div>

            {/* Right Section */}
            <div className="right flex flex-col items-center w-full lg:w-1/3  gap-8">
                
                {/* Image and Button */}
                <div className="flex flex-col items-center gap-4">
                    <img src="batmob.png" className=" md:w-96 " alt="Batmobile" />
                    <button className="bg-gradient-to-r from-blue-800 to-purple-800 hover:to-purple-500 text-white p-2 rounded-md">
                        Drive To Gotham
                    </button>
                </div>

                {/* Deep Focus Box */}
                <div className="box bg-white/20 border flex flex-col justify-center items-center border-green-400 rounded-2xl p-6 w-full h-[300px] md:h-[200px] lg:w-[30vw] text-center">
                    <p className="text-lg mb-2">Deep Focused <span className="text-green-400">Work Session</span></p>
                    <h2 className="font-bold text-3xl">12 : 01 : 00 : 00</h2>


                    <div className="btns flex justify-center gap-5 my-10 items-center md:gap-5 md:my-7 text-white">
                        <button className='bg-white/20 p-2 rounded-md'>Start</button>
                        <button className='bg-[#50CEFB] p-2 rounded-md'>Stop</button>
                        <button className='bg-[#FB6F4C] p-2 rounded-md'>Reset</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Page
