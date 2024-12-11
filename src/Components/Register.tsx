// Import necessary libraries and components
import React from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h2>
                <form className="space-y-6">
                    {/* Full Name Input */}
                    <div>
                        <label
                            htmlFor="full-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            id="full-name"
                            name="full-name"
                            type="text"
                            autoComplete="name"
                            required
                            className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-primary focus:border-primary border-gray-300"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-primary focus:border-primary border-gray-300"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-primary focus:border-primary border-gray-300"
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div>
                        <label
                            htmlFor="confirm-password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            required
                            className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-primary focus:border-primary border-gray-300"
                        />
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            required
                        />
                        <label
                            htmlFor="terms"
                            className="ml-2 text-sm text-gray-600"
                        >
                            I agree to the{' '}
                            <a href="#" className="font-medium text-primary hover:underline">
                                terms and conditions
                            </a>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-gray-800 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                {/* Login Link */}
                <p className="text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login"
                        className="font-medium text-primary hover:underline"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;