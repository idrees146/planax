'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { supaBase } from '@/lib/supabaseClient' // ✅ make sure this is the correct named export
import { useRouter } from 'next/navigation'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleSignUp = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const { data, error } = await supaBase.auth.signUp({
            email,
            password,
            
            options: {
                emailRedirectTo: `${window.location.origin}/Dashboard`
              }
        })

        if (error) {
            setError(error.message)
        } else {
            // ✅ optional: check if user needs to confirm their email
            if (data.user?.email_confirmed_at) {
                router.push('/Dashboard')
            } else {
                router.push('/VerifyEmail') // if you're using email confirmation flow
            }
        }

        setLoading(false)
    }

    return (
        <section className="login-container flex flex-col md:flex-row justify-center items-center gap-10 rounded-2xl my-20 mx-auto p-8 bg-white/20 text-white w-[95%] md:w-[90%] lg:w-[80%]">
            {/* Left Section */}
            <div className="left flex flex-col justify-center items-center w-full md:w-1/2 space-y-5">
                <h1 className="text-3xl font-bold text-center">
                    Create <span className="text-green-400">New Account</span>
                </h1>

                <form onSubmit={handleSignUp} className="w-full max-w-sm">
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
                            required
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
                            required
                        />
                    </div>

                    {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full p-3 mb-4 cursor-pointer rounded-md bg-gradient-to-r from-green-600 to-green-900 hover:opacity-90 transition font-semibold"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>

                  <Link href="/Login">  <p className="text-center text-sm mb-4">Already Have account? Sign In</p></Link>

                    {/* Sign in with Google */}
                    <button
                        type="button"
                        onClick={() => supaBase.auth.signInWithOAuth({ provider: 'google' })}
                        className="flex cursor-pointer items-center w-full p-2 mb-3 rounded-md bg-gradient-to-r from-blue-800 to-purple-800 hover:to-purple-950 transition gap-3"
                    >
                        <div className="bg-white p-2 rounded-full">
                            <img src="google.svg" alt="Google" className="w-6 h-6" />
                        </div>
                        <span className="flex-1 text-center text-white">Sign up with Google</span>
                    </button>

                    {/* Sign in with Facebook */}
                    <button
                        type="button"
                        onClick={() => supaBase.auth.signInWithOAuth({ provider: 'facebook' })}
                        className="flex cursor-pointer items-center w-full p-2 rounded-md bg-gradient-to-r from-blue-800 to-purple-800 hover:to-purple-950 transition gap-3"
                    >
                        <div className="bg-white p-2 rounded-full">
                            <img src="facebook.svg" alt="Facebook" className="w-6 h-6" />
                        </div>
                        <span className="flex-1 text-center text-white">Sign up with Facebook</span>
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

export default SignUp
