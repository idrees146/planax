'use client'

import React from 'react'
import Link from 'next/link'

const LoginPage = () => {
    return (
        <section className="login-container flex flex-col md:flex-row justify-center items-center gap-10 rounded-2xl my-20 mx-auto p-8 bg-white/20 text-white w-[95%] md:w-[90%] lg:w-[80%]">
            {/* Left Section */}
            <div className="left flex flex-col justify-center items-center w-full md:w-1/2 space-y-5">
                <h1 className="text-3xl font-bold text-center">
                    Login to Your <span className="text-green-400">Dashboard</span>
                </h1>
                <p className="text-center text-gray-200">Plan, Execute and Conquer</p>

                <form className="w-full max-w-sm">
                    {/* Email Input */}
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="p-3 rounded-md text-blue-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="password" className="mb-1 text-sm">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="p-3 rounded-md text-blue-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full p-3 mb-4 rounded-md bg-gradient-to-r from-blue-800 to-purple-800 hover:opacity-90 transition font-semibold"
                    >
                        Sign In
                    </button>

                    <p className="text-center text-sm mb-4">or continue with</p>

                    {/* Sign in with Google */}
                    <Link href="/Dashboard">
                        <button
                            type="button"
                            className="flex items-center w-full p-3 mb-3 rounded-md bg-blue-500 hover:bg-blue-600 transition gap-3"
                        >
                            <div className="bg-white p-2 rounded">
                                <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
                            </div>
                            <span className="flex-1 text-center text-white">Sign in with Google</span>
                        </button>
                    </Link>

                    {/* Sign in with Facebook */}
                    <button
                        type="button"
                        className="flex items-center w-full p-3 rounded-md bg-blue-600 hover:bg-blue-700 transition gap-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
                            <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" />
                        </svg>
                        <span className="flex-1 text-center text-white">Sign in with Facebook</span>
                    </button>
                </form>
            </div>

            {/* Right Section */}
            <div className="right hidden md:flex justify-center w-full md:w-1/2">
                <img
                    src="/loginimg.jpg"
                    alt="Login"
                    className="rounded-2xl object-cover w-full max-w-md h-auto"
                />
            </div>
        </section>
    )
}

export default LoginPage
