import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <p className='text-base text-gray-700'>
                        BeSafe 2023
                    </p>
                    <p className='text-base text-gray-700'>
                        All right reserved &copy;
                    </p>
                </div>
                <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
                    <div className='flex flex-row gap-10 text-base min-w-[170px]'>
                        
                        <Link href="/">
                            <Image src='/twitter.png' alt='twitter' height={86} width={86} className=' object-contain' />
                        </Link>
                        <Link href='/'>
                            <Image src='/linkedin.png' alt='twitter' height={86} width={86} className=' object-contain' /></Link>
                        <Link href='/'>
                            <Image src='/facebook.png' alt='twitter' height={86} width={86} className=' object-contain' /></Link>


                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-6 py-10'>
                <p>@2023 BeSafe. All Right Reserved</p>
                <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10;'>
                    <Link href='/' className=' px-6 text-gray-500'>Privacy Policy</Link>
                    <Link href='/' className=' px-8 text-gray-500'>Terms of Use</Link>

                </div>
            </div>
        </footer>
    )
}

export default Footer