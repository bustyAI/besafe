import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <header className='w-full z-10' >
            <div className='flex w-full mx-auto sm:px-16 pb-5'>
                <span className=' text-7xl font-extrabold text-red-500 flex pt-10 pl-10'>Be</span>
                <span className=' text-7xl font-extrabold text-yellow-500 flex pt-10'>Safe</span>
            </div>

            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-10'>
            </nav>
        </header>
    )
}

export default Navbar