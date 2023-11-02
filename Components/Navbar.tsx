import React from 'react'
import  { Link, useNavigate } from 'react-router-dom'


const Navbar:React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <header className='w-full z-10' >
            <div className='flex w-full mx-auto sm:px-16 pb-5 bg-gray-400 mb-5' onClick={() => {
                navigate("/")
            }}>
                <span className='be__text pt-10 pl-10 rounded-md'>Be</span>
                <span className='safe__text pt-10'>Safe</span>
            </div>

            <nav className='navbar'>
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