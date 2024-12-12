// Import necessary libraries and components
import React from "react";
import { loginUser, selectUser } from "../redux/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    const dispatch = useAppDispatch()
    const { loading } = useAppSelector(selectUser)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        let data = {
            user: {
                name: "username here",
                email: "emailhere@email.com"
            },
            token: "123456"
        }
        dispatch(loginUser({ username: "samuelmwangi729", password: "123456" }))
        // loginUser({username: "samuelmwangi729", password: "123456"})
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>
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
                            autoComplete="current-password"
                            required
                            className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-primary focus:border-primary border-gray-300"
                        />
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 text-sm text-gray-600"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link to={"/reset"}
                                className="font-medium text-primary hover:underline"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full disabled:bg-gray-400 disabled:cursor-not-allowed bg-gray-800 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            onClick={e => handleSubmit(e)}
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                {/* Sign Up Link */}
                <p className="text-sm text-center text-gray-600">
                    Don’t have an account?{' '}
                    <Link to={"/register"}
                        className="font-medium text-primary hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;