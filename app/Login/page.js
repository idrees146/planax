'use client'

import React from 'react'
import Link from 'next/link'
import { supaBase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useEffect } from 'react'


const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const { data, error } = await supaBase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
        } else {
            router.push('/Dashboard')
        }

        setLoading(false)
    }

    const mew = () => {
        console.log("I am your cat okay, feed me ")
    }


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
        if (session) {
            router.push('/Dashboard')
        }
    }, [session])
     


    return (
        <section className="login-container flex flex-col md:flex-row justify-center items-center gap-10 rounded-2xl my-20 mx-auto p-8 bg-white/20 text-white w-[95%] md:w-[90%] lg:w-[80%]">
            {/* Left Section */}
            <div className="left flex flex-col justify-center items-center w-full md:w-1/2 space-y-5">
                <h1 className="text-3xl font-bold text-center">
                    Login to Your <span className="text-green-400">Dashboard</span>
                </h1>
                <p className="text-center text-gray-200">Plan, Execute and Conquer</p>

                <form onSubmit={handleLogin} className="w-full max-w-sm">
                    {/* Email Input */}
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-3 rounded-md text-blue-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full p-3 mb-4 cursor-pointer rounded-md bg-gradient-to-r from-blue-800 to-purple-800 hover:opacity-90 transition font-semibold"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}

                    </button>

                    <Link href="/signUp">  <p className="text-center text-sm mb-4">New to Planax? Create Account</p></Link>

                    {/* Sign in with Google */}
                    <Link href="/Dashboard">
                        <button
                            type="button"
                            className="flex cursor-pointer items-center w-full p-2 mb-3 rounded-md bg-gradient-to-r from-blue-800 to-purple-800 hover:to-purple-950    transition gap-3"
                        >
                            <div className="bg-white p-2 rounded-full">
                                <img src="google.svg" alt="Google" className="w-6 h-6" />
                            </div>
                            <span className="flex-1 text-center text-white">Sign in with Google</span>
                        </button>
                    </Link>

                    {/* Sign in with Facebook */}
                    <button
                        type="button"
                        className="flex cursor-pointer items-center w-full p-2 rounded-md bg-gradient-to-r from-blue-800 to-purple-800 hover:to-purple-950   transition gap-3"
                    >
                        <div className="bg-white p-2 rounded-full">
                            <img src="facebook.svg" alt="Facebook" className="w-6 h-6" />
                        </div>
                        <span onFocus={mew} className="flex-1 text-center text-white">Sign in with Facebook</span>
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
