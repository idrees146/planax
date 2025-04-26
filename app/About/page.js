import React from 'react'


const page = () => {
    return (
        <>


            <section className='text-white   mt-20'>

            


                <div className="flex gap-8 flex-col md:flex-row justify-center items-center">

                    <div className="left w-[95vw] md:w-1/2">

                    <h1 className=' font-bold md:text-4xl    text-2xl'>A little of my Story</h1>


                        <p className='leading-7 mt-5'>This is Muhammad Idrees, a passionate Web Developer, always busy in creating some fun and interesting projects. My story begins the day when I started studying Software Engineering from Comsats Universty Islamabad.
                        </p>


                        <p className='leading-7 mt-5'>That Day was a deciding one to pave a way for my aspirations that where I want to see myself in the next 10 years. Web Development is something that used to make me really immersed in my creations, building attractive layouts and adding functionalities was more than a fun for me.

                        </p>
                    </div>


                    <div className="right">
                        <img className='md:w-72 rounded-xl' src="me.jpeg" alt="" />
                    </div>

                </div>




            </section>



            <section className='text-white mt-28  flex flex-col md:flex-row justify-center items-center gap-8'>


                <div className="left md:w-1/2 w-[95vw]">





                    <h2 className='font-bold text-2xl md:text-4xl   md:text-start'>About Planax</h2>



                    <p className='mt-5'>InveNexus was basically our Semester project for our course, Software Engineering Concepts, but I wanted to take it to a next level and make it more than a course project. The project is build entirely in Next Js Framework, along with additional tools such as Tailwind CSS, Chart JS for attractive charts, Next Auth for user Authentication and MongoDB as a Database.</p>


                    <p className='mt-5'>The use of AI forecasting is another amazing feature that informs the user about stocks and make inventory management much convenient in real time</p>



                    <p className='mt-5'>If You are a store owner, a manager in a mart, or someone working in a Software house, you can get in touch through the given email or whatsapp and I can give this project to you who to Benefit from it.</p>


                </div>



                <div className="right">

                    <img className=' w-98' src="worker.png" alt="" />

                </div>
            </section>


        </>
    )
}

export default page