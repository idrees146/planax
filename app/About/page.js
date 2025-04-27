import React from 'react'
 


const page = () => {
    return (
        <>


            <section className='text-white   my-20'>




                <div className="flex gap-8 flex-col md:flex-row justify-center items-center">




                    



                        <div className="left w-[90vw] md:w-1/2">

                            <h1 className=' font-bold md:text-4xl    text-2xl'>A little of my Story</h1>


                            <p className='leading-7 mt-5'>This is <span className='font-bold text-green-400'>Muhammad Idrees</span> , a passionate Web Developer, always busy in creating some fun and interesting projects. Currently, I am studying Bachelors in Software Engineering From Comsats University Islamabad.
                            </p>


                            <p className='leading-7 mt-5'>
                                I started my Career as a freelance writer back in 2019, during covid Pandemic and have achieved significant growth so far Alhmdulillah (Abviously downfalls too hahah). I've been working with clients both international and local, helping me to build a strong portfolio and reputation
                            </p>

                            <p className='leading-7 mt-5'>
                                With the passage of time, I started my youtube Channel on the name <span className='font-bold text-green-400'>Alinaid Institution</span>, where I used to teach practical ways to make money using freelance writing and Web Development. Currently, I also have a digital startup <span className='font-bold text-green-400'>ShaziSoft Solutions</span>
                            </p>



                        </div>

          

                    
                    <div className="right">
                        <img className='md:w-72 w-[90vw] rounded-xl' src="me.jpeg" alt="" />
                    </div>

                </div>




            </section>




            <hr className="w-full h-[0.3px] my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700" />




            <section className='text-white mt-28  f'>




                <div className='flex flex-col md:flex-row justify-center items-center gap-8'>





                    <div className="right">

                        <img className=' md:w-72 w-[90vw] rounded-xl' src="worker.png" alt="" />

                    </div>





                    <div className="left md:w-1/2 w-[90vw]">





                        <h2 className='font-bold text-2xl md:text-4xl   md:text-start'>About Planax</h2>



                        <p className='mt-5'>Planax is one of the best productivity apps for students and freelancers who need a reliable platform to manage their activities.</p>

                        <p className='mt-5'>The layouts and app structure is designed and developed in a clean and interactive way, that allow users to make the most effective use of their time.</p>



                        <p className='mt-5'>So whether, you are a student or a freelancer, maybe a small agency, Planax can be a perfect choice to provide you an upper edge on your competitors. All you need to do is to create your account and use the application, whether you prefer the web version or mobile version.</p>


                    </div>






                </div>
            </section>





            <hr className="w-full h-[0.3px] my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700" />



            <section className='text-white   my-20'>




                <div className="flex gap-8 flex-col md:flex-row justify-center items-center ">

                    <div className="left w-[90vw] md:w-1/2">

                        <h1 className=' font-bold md:text-4xl    text-2xl'>About Shazisoft</h1>


                        <p className='leading-7 mt-5'> <span className='text-green-400 font-bol'>Shazisoft</span> is a startup I have founded, where we work in different domains such as Wordpress Development, Graphic Designing, Content Writing and MERN Development.
                        </p>

                        <p className='leading-7 mt-5'>Most of our projects are related to Wordpress, UI/UX and Content writing, So If you're someone who is interested to get some projects done in any of these domains, you can contact us for a high quality solution</p>




                    </div>


                    <div className="right">
                        <img className='md:w-72 w-[90vw] rounded-xl' src="logo.png" alt="" />
                    </div>

                </div>




            </section>

        </>
    )
}

export default page