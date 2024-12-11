// Import necessary libraries and components
import React from "react";
import { Link } from "react-router-dom";

const Reset: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Reset Your Password</h2>
                <form className="space-y-6">
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
                            className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800 border-gray-300"
                        />
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        >
                            Send Reset Link
                        </button>
                    </div>
                </form>

                {/* Back to Login Link */}
                <p className="text-sm text-center text-gray-600">
                    Remembered your password?{' '}
                    <Link to={"/login"}
                        className="font-medium text-gray-800 hover:underline"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Reset;
