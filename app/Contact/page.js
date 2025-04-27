"use client"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'; // make sure you have imported emailjs
import { useState } from 'react';

const Page = () => {

    const form = useRef();


    const [brightness, setBrightness] = useState("opacity-100")
    const [isModalVisible, setIsModalVisible] = useState(false);

    //Email Sending Main logic
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zgdql9o', 'template_ywt829k', form.current, 'ApAXpVdtTrh9E0hjU')
            .then((result) => {
                setIsModalVisible(true)
                setBrightness("opacity-20")
            })
            .catch(( ) => {
              
                alert('Failed to send message. Please try again.');
            });




    };

  
    const closeModal = () => {
        setIsModalVisible(false); // Close the modal when clicked
        setBrightness("opacity-100")
    };



    return (
        <>



            <div className={`form ${brightness}`}>




                <section className="text-white mt-28">
                    <h1 className='text-2xl font-bold md:text-4xl text-center'>Get in Touch</h1>
                    <div className="quote">
                        <p className='text-center my-6'>
                            <span className='text-green-400 font-bold'>Send us your Queries,</span> And we will contact you as soon as possible
                        </p>
                    </div>
                </section>

                <section className="dark:bg-gray-900">
                    <div className="py-2 px-4 mx-auto max-w-screen-md">
                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Whatsapp</label>
                                <input
                                    type="text"
                                    id="whatsapp"
                                    name="whatsapp"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Enter Your Whatsapp Number"
                                    required
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-white">Your message</label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    name="message"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave your message here..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 mx-auto mt-10 hover:bg-blue-500 text-white cursor-pointer rounded-lg p-3 flex gap-2 items-center justify-center"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </section>


            </div>


            {/* Modal code */}
            {isModalVisible && (
                <div id="popup-modal" tabIndex="-1" className="absolute top-0 flex z-50  justify-center items-center w-full h-full bg-opacity-50">

                    <div className="relative  p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <button
                                type="button"
                                className="absolute cursor-pointer top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={closeModal}
                            >
                                <svg className="w-3  h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                <svg className="mx-auto mb-4  text-green-500 w-12 h-12 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Your message has been delivered successfully!</h3>
                                <button
                                    data-modal-hide="popup-modal"
                                    type="button"
                                    className="text-white cursor-pointer bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                    onClick={closeModal}
                                >
                                    Great!
                                </button>
                                <button
                                    data-modal-hide="popup-modal"
                                    type="button"
                                    className="py-2.5 px-5 ms-3 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Page;
