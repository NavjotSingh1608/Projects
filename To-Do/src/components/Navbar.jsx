import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-500 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-ml mx-8'> Believix </span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all'> Home </li>
            <li className='cursor-pointer hover:font-bold transition-all'> Your Tasks </li>
        </ul>
    </nav>
  )
}

export default Navbar