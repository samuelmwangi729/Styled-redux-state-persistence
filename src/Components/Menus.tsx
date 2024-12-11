import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { logout, selectUser } from '../redux/userSlice'

const Menus: React.FC = () => {
    const dispatch = useAppDispatch()
    const { loggedIn } = useAppSelector(selectUser)
    return (
        <ul className="flex flex-row font-normal text-gray-600 gap-2 whitespace-nowrap">
            <li className='hover:bg-gray-600 hover:text-white py-2 px-2'>
                <Link to={"/"}>Home</Link>
            </li>
            <li className='hover:bg-gray-600 hover:text-white py-2 px-2'>
                <Link to={"/"}>About Us</Link>
            </li>
            <li className='hover:bg-gray-600 hover:text-white py-2 px-2'>
                <Link to={"/"}>Portfolio</Link>
            </li>
            <li className='hover:bg-gray-600 hover:text-white py-2 px-2'>
                <Link to={"/"}>Our Services</Link>
            </li>
            <li className='hover:bg-gray-600 hover:text-white py-2 px-2'>
                <Link to={"/"}>Contact Us</Link>
            </li>

            {loggedIn ? (
                <>
                    <li className='hover:bg-gray-600 hover:text-white py-2 px-2'>
                        <Link to={"/dashboard"}>My Account</Link>
                    </li>
                    <li className='hover:bg-gray-600 hover:text-white py-2 px-2'>
                        <div onClick={() => dispatch(logout())}>
                            Logout
                        </div>
                    </li>
                </>
            ) : (
                <>
                    <li className='hover:bg-gray-600 hover:text-white py-2 px-2'>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li className='hover:bg-gray-600 hover:text-white py-2 px-2'>
                        <Link to={"/register"}>Register</Link>
                    </li>
                </>
            )}

        </ul>
    )
}

export default Menus
