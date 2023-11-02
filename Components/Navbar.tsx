import React from 'react'
import  { Link, useNavigate } from 'react-router-dom'


const Navbar:React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <header className='w-full z-10' >
            <div className='flex w-full mx-auto sm:px-16 pb-5' onClick={() => {
                navigate("/")
            }}>
                <span className=' text-7xl font-extrabold text-red-500 flex pt-10 pl-10'>Be</span>
                <span className=' text-7xl font-extrabold text-yellow-500 flex pt-10'>Safe</span>
            </div>

            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-10'>
            <Link to="/Offenders" className='flex'>
                        <span className='nav__text py-4'>Offenders</span>
                    </Link>
                    <Link to="/Area" className='flex'>
                        <span className='nav__text'>Area</span>
                    </Link>
                    <Link to="/" className='flex'>
                        <span className='nav__text'>Homepage</span>
                    </Link>
                    <Link to="/Login" className='flex'>
                        <span className='nav__text'>Login</span>
                    </Link>
            </nav>
        </header>
    )
}

export default Navbar