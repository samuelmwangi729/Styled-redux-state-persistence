import React from 'react'
import { Link } from 'react-router-dom'
import Menus from './Menus'

const Nav: React.FC = () => {
  return (
    <nav className='flex flex-row justify-between items-center gap-2 px-4 bg-slate-100 h-10 font-bold shadow-pink-500 shadow-sm w-full fixed'>
      <div className='flex flex-row text-2xl'>
        <Link to={"/"}>
          <span>Sample</span><span className='text-pink-600 underline underline-offset-2'>Company</span>
        </Link>
      </div>
      <div>
        <Menus />
      </div>
    </nav>
  )
}

export default Nav
