'use client';
 
import "./globals.css"; // make sure you import your CSS here
import Image from "next/image";
 
import { motion } from "framer-motion";
 

export default function Home() {


  //Our Javascript Logic Here


  const handleScroll = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' })


  }






 


  return (
    <>
 

     

      <div onClick={handleScroll} className="move sticky w-10 float-right top-[86vh] right-[20px] rounded-lg  cursor-pointer bg-black">
        <img src="up.svg" alt="" />

      </div>




      <motion.div


        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}


      >






        {/* Hero Section */}
        <section className="relative slideIn hero-section w-full h-[600px] md:h-[80vh] flex items-center justify-center overflow-hidden ">








          {/* Left Half Circle */}
          <div className="absolute -left-[250px] top-[100px] h-[500px] w-[500px] bg-gradient-to-r rounded-full from-[#00FFFF] via-[#18BFF6] to-[#9B51E0] opacity-20 clip-left"></div>


          {/* Center Content */}


          <div className="text-white absolute md:top-[50px] top-[70px]  text-center z-10 w-[95vw] md:w-3/4 mx-auto md:mt-10">
            <p className="text-lg">Plan, Execute and Conquer</p>
            <h1 className="md:text-6xl text-4xl mt-6 mb-6 font-bold">
              Planax helps people organize, track <span className="text-[#36C3FF]"> And get Things Done</span>
            </h1>
            <p className="text-md w-[90vw] md:w-2/3 mx-auto">
              Your all-in-one productivity app to boost up your productivity and help you manage your day-to-day tasks effectively.
            </p>

            <button className='  bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 mx-auto mt-10 hover:bg-blue-500 cursor-pointer rounded-lg p-3 flex gap-2 items-center justify-center'>
              <img src="task-actions.png" width={30} alt="" />
              Launch Planax</button>
          </div>





          {/* Right Half Circle */}
          <div className="absolute -right-[250px] top-[100px] h-[500px] w-[500px] bg-gradient-to-r rounded-full from-[#9B51E0] to-[#00FFFF] opacity-20 clip-right"></div>





        </section>

      </motion.div>


      {/* Convincing section 
       */}





      <section className="md:my-28 my-20 md:flex-row flex flex-col justify-center item-center line text-white gap-10">


        <motion.div



          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}

        >




          <div className="left  ">

            <Image

              className="w-[90vw] ml-6 md:w-[500px]"

              src="/batmob.png"
              width={500}
              height={280}
              alt="Batmob"

            />

          </div>

        </motion.div>




        <motion.div



          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}


        >







          <div className="right w-[95vw] mx-auto md:w-[500px]">

            <p className="mt-4 text-center md:text-left">About Planax</p>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold leading-10 text-center md:text-left">How Planax Can Accelerate Your Journey?</h2>
            <p className="mt-4 text-center md:text-left leading-7">Planax Provides a complete Ecosystem to Freelancers, Small Agencies, and Students To manage all their tasks, plannings and activities from a single Dashboard</p>

            <div className="points flex gap-7 items-center mt-7 ml-10">

              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FBFD"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-488q86 0 176.5-26.5T773-694q-27-32-117.5-59T480-780q-88 0-177 26t-117 60q28 35 116 60.5T480-608Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29v-155q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180-618v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35v-125q-28 16-63 28.5T643.5-352q-38.5 9-80 13.5T479-334q-43 0-85-4.5T313.5-352q-38.5-9-72.5-21.5T180-402v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z" /></svg>

              <span className="leading-7 md:leading-6">Synchronized Data Across the Web and mobile app</span>

            </div>


            <div className="points flex gap-7 items-center mt-4 ml-10">

              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FBFD"><path d="M480-80q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-84 30.5-157T195-764q54-54 127-85t158-31q75 0 140 24t117 66l-43 43q-44-35-98-54t-116-19q-145 0-242.5 97.5T140-480q0 145 97.5 242.5T480-140q145 0 242.5-97.5T820-480q0-30-4.5-58.5T802-594l46-46q16 37 24 77t8 83q0 85-31 158t-85 127q-54 54-127 84.5T480-80Zm-59-218L256-464l45-45 120 120 414-414 46 45-460 460Z" /></svg>

              <span className="leading-7 md:leading-6">Top Class Customer Support</span>

            </div>



            <div className="points flex gap-7 items-center mt-4 ml-10">

              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FBFD"><path d="m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" /></svg>

              <span className="leading-7 md:leading-6">Enhanced Productivity in Tasks items-center</span>

            </div>

            <div className="buttons flex gap-4 md:ml-10 justify-center md:justify-start my-4 items-center">

              <button className='  bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600  hover:bg-blue-500 cursor-pointer rounded-lg p-3'>Join Planax</button>


              <button className='  bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600  hover:bg-blue-500 cursor-pointer rounded-lg p-3'>See Demo</button>



            </div>


          </div>


        </motion.div>
      </section>




      {/* Features Secion  */}


      <section id="features" className="md:my-28 my-20 text-white">

        <h2 className="md:text-4xl text-2xl font-bold text-white text-center">Main <span className="text-[#36C3FF]">Features</span></h2>
        <p className="text-center md:w-[50vw] mt-4 mx-auto leading-7">The Following Features of Planax differentiate it from other productivity apps available on the Internet</p>



        <div className="boxes1 mt-5 flex md:flex-row flex-col gap-7 items-center justify-center ">



          <motion.div

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}

          >
            <div className="box text-center md:my-7 cursor-pointer hover:shadow-white hover:shadow-md md:hover:my-3 transition-all duration-500 flex flex-col bg-gradient-to-r from-[#030D4D] via-[#381566] to-[#4d72cf]  items-center justify-center rounded-xl md:h-[250px] md:w-[300px] w-[90vw] h-[250px]   p-4 ">

              <img src="pricing.png" width={45} alt="" />

              <h3 className="text-2xl mt-4 font-bold">Cheapest Pricing</h3>
              <p className="leading-7 mt-4">Planax Pricing starts from as much low as PKR 100 per Month</p>

            </div></motion.div>




          <motion.div

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}

          >
            <div className="box md:my-7 text-center cursor-pointer hover:shadow-white hover:shadow-md md:hover:my-3 transition-all duration-500 flex flex-col bg-gradient-to-r from-[#030D4D] via-[#381566] to-[#4d72cf]  items-center justify-center rounded-xl md:h-[250px] md:w-[300px] w-[90vw] h-[250px]   p-4 ">

              <img src="plan.png" width={45} alt="" />

              <h3 className="text-2xl mt-4 cursor-pointer font-bold">Weekly Plannings</h3>
              <p className="leading-7 mt-4">A place where you can easily Plan your whole week or month</p>

            </div>
          </motion.div>




          <motion.div

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: true }}

          >
            <div className="box text-center md:my-7 cursor-pointer hover:shadow-white hover:shadow-md md:hover:my-3 transition-all duration-500 flex flex-col bg-gradient-to-r from-[#20285e] via-[#381566] to-[#4d72cf]  items-center justify-center rounded-xl md:h-[250px] md:w-[300px] w-[90vw] h-[250px]   p-4 ">

              <img src="dashboard.png" width={45} alt="" />

              <h3 className="text-2xl mt-4 font-bold">Single Dashboard</h3>
              <p className="leading-7 mt-4">Now Manage all your activities from a single Dashboard</p>

            </div>
          </motion.div>



        </div>








        {/* Second line of boxes  */}





        <div className="boxes2 mt-5 flex md:flex-row flex-col gap-7 items-center justify-center ">




          <motion.div

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            viewport={{ once: true }}

          >

            <div className="box text-center md:my-7 cursor-pointer hover:shadow-white hover:shadow-md md:hover:my-3 transition-all duration-500 flex flex-col bg-gradient-to-r from-[#030D4D] via-[#381566] to-[#4d72cf]  items-center justify-center rounded-xl md:h-[250px] md:w-[300px] w-[90vw] h-[250px]    p-4 ">

              <img src="assignment.png" width={45} alt="" />

              <h3 className="text-2xl mt-4 font-bold"> Assignments Tracker</h3>
              <p className="leading-7 mt-4">Add subjects, assignments and deadlines and receive smart reminders.</p>

            </div>


          </motion.div>




          <motion.div

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
            viewport={{ once: true }}

          >

            <div className="box md:my-7 text-center cursor-pointer hover:shadow-white hover:shadow-md md:hover:my-3 transition-all duration-500 flex flex-col bg-gradient-to-r from-[#030D4D] via-[#381566] to-[#4d72cf]  items-center justify-center rounded-xl md:h-[250px] md:w-[300px] w-[90vw] h-[250px]    p-4 ">

              <img src="freelancer.png" width={45} alt="" />

              <h3 className="text-2xl mt-4 cursor-pointer font-bold">Project Management</h3>
              <p className="leading-7 mt-4">Add clients, projects, deadlines, and payment statuses. Get invoice notifications and project phase breakdowns.</p>

            </div>

          </motion.div>


          <motion.div

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
            viewport={{ once: true }}

          >

            <div className="box text-center md:my-7 cursor-pointer hover:shadow-white hover:shadow-md md:hover:my-3 transition-all duration-500 flex flex-col bg-gradient-to-r from-[#20285e] via-[#381566] to-[#4d72cf]  items-center justify-center rounded-xl md:h-[250px] md:w-[300px]  w-[90vw] h-[250px]   p-4 ">

              <img src="dashboard.png" width={45} alt="" />

              <h3 className="text-2xl mt-4 font-bold">Personal Diary</h3>
              <p className="leading-7 mt-4">Write quick notes or daily reflections, with optional tagging and categorization.</p>

            </div>

          </motion.div>


        </div>

      </section>




      {/* Marketing Session 

*/}



      <section className="text-white my-20 md:my-28 flex flex-col md:flex-row   gap-10 justify-center items-center">

        <div className="left md:w-1/2">

          <p className="text-center md:text-start">Enhance Your Productivity</p>

          <h2 className=" text-center md:text-start md:text-4xl text-2xl font-bold text-white">Join Planax, <span

            className="text-[#36C3FF]">Be The Top 1 %</span> </h2>




          <div className="flex flex-col md:flex-row mt-10 gap-5  justify-center items-center">

            <div className="flex mt-5 w-[90vw] md:w-1/2 justify-center gap-5 ">


              <div className="line md:h-[130px] w-[1px] bg-white "></div>



              <div>
                <h1 className="font-bold text-2xl">Beat The Competition</h1>
                <p className="mt-3">Be Productive in your work and beat your competition Now</p>
              </div>

            </div>


            <div className="flex mt-5 w-[90vw] md:w-1/2 justify-center gap-5 ">


              <div className="line md:h-[130px] w-[1px] bg-white "></div>



              <div>
                <h1 className="font-bold text-2xl">Stay Ahead of the Curve</h1>
                <p className="mt-3">Bring our the true Master planner in you and stay ahead of the curve</p>
              </div>

            </div>


          </div>









          <div className="flex flex-col md:flex-row md:mt-10 gap-5  justify-center items-center">

            <div className="flex mt-5 w-[90vw] md:w-1/2 justify-center gap-5 ">


              <div className="line md:h-[130px] w-[1px] bg-white "></div>



              <div>
                <h1 className="font-bold text-2xl">Keep your Level High</h1>
                <p className="mt-3">With Planax, keep your level high by having potentials of productivity in your day to day life</p>
              </div>

            </div>


            <div className="flex mt-5 w-[90vw] md:w-1/2 justify-center gap-5 ">


              <div className="line md:h-[130px] w-[1px] bg-white "></div>



              <div>
                <h1 className="font-bold text-2xl">Join the Change-Makers</h1>
                <p className="mt-3">Join Planax and be the Change Maker in your life.</p>
              </div>

            </div>


          </div>













        </div>

        <div className="right">
          <img className="md:w-100 w-72" src="worker.png" alt="" />
        </div>

      </section>



    </>
  );
}
