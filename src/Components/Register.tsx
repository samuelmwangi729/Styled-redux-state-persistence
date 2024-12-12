// Import necessary libraries and components
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


interface formValues {
    fullName: string | null;
    emailAddress: string | null;
    password: string;
    confirmPassword: string;
    agree: boolean
}
const Register: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<formValues>()
    const submitData = (data: any) => {
        console.log(data)
    }
    const password = watch('password', '')
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md px-8 space-y-2 bg-white rounded-lg shadow-md mt-5">
                <h2 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h2>
                <form className="space-y-6" onSubmit={handleSubmit(submitData)}>
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
                            type="text"
                            autoComplete="name"
                            className={`block w-full px-4 py-2 mt-1 border rounded-md shadow-sm ${errors.fullName?"border-red-500 focus:border-red-500 outline-none":"border-gray-300"}`}
                            {...register('fullName', {
                                required: 'The full names are required'
                            })}

                        />
                        {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
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
                            type="email"
                            autoComplete="email"
                            className={`block w-full px-4 py-2 mt-1 border rounded-md shadow-sm ${errors.emailAddress?"border-red-500 focus:border-red-500 outline-none":"border-gray-300"}`}
                            {...register("emailAddress", {
                                required: "The email is required"
                            })}
                        />
                        {errors.emailAddress && <span className="text-red-500">{errors.emailAddress.message}</span>}
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
                            type="password"
                            autoComplete="new-password"
                            className={`block w-full px-4 py-2 mt-1 border rounded-md shadow-sm ${errors.password?"border-red-500 focus:border-red-500 outline-none":"border-gray-300"}`}
                            {...register("password", {
                                required: "This password field is required"
                            })}
                        />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
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
                            type="password"
                            className={`block w-full px-4 py-2 mt-1 border rounded-md shadow-sm ${errors.confirmPassword?"border-red-500 focus:border-red-500 outline-none":"border-gray-300"}`}
                            {...register('confirmPassword', {
                                required: 'Please confirm your password',
                                validate: (val) => val === password || "passwords do not match"
                            })}
                        />
                        {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword.message}</div>}
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-center">
                        <input
                            id="terms"
                            type="checkbox"
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            {...register("agree", {
                                required: "Please accept the terms and conditions"
                            })}
                        />
                        
                        <label
                            htmlFor="terms"
                            className="ml-2 text-sm text-gray-600"
                        >
                            I agree to the{' '}
                            <a href="#" className="font-medium text-primary hover:underline">
                                terms and conditions
                            </a>
                            {errors.agree && <div className="text-red-500">{errors.agree.message}</div>}
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button disabled={errors.confirmPassword?true:false}
                            type="submit"
                            className="w-full disabled:bg-gray-400 disabled:cursor-not-allowed bg-gray-800 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
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