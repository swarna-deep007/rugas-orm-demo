import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from "../assets/register.webp";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); // Added missing email state
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("User Registered:", {name,email,password})
    }

    return (
        <div className="flex">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
                <form  onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
                    <div className="flex justify-center mb-6">
                        <h2 className="text-xl font-medium">RuugasOrder</h2>
                    </div>
                    <h2 className="text-2xl font-medium text-center mb-6">
                        Hey There! 👋🏽
                    </h2>
                    <p className="text-center mb-6">Enter your details to register</p>

                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Register
                    </button>

                    <p className='mt-6 text-center text-sm'>
                        Already have an account?{" "}
                        <Link to="/login" className='text-blue-500'>
                            Login
                        </Link>
                    </p>
                </form>
            </div>
            
            {/* Image Section */}
            <div className='hidden md:block w-1/2 bg-gray-800'>
                <div className='h-full flex flex-col justify-center items-center'>
                    <img src={login} alt="Login to Account"
                        className='h-[750px] w-full object-cover' />
                </div>
            </div>
        </div>
    );
};

export default Register;
