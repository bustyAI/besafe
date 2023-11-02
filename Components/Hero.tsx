import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col  mx-auto w-1/2 my-10'>
            <p className='hero__title'>Objective:</p>
                <p className='purpose__text'>Welcome to <span className=' text-4xl font-extrabold text-blue-700 '>Be</span>
                <span className='text-4xl font-extrabold text-gray-900 '>Safe</span>, your trusted ally
                    in the mission to keep our communities secure. We understand that your child's
                    safety is your top priority, and knowledge is your best defense.
                    At BeSafe, we empower parents with essential information about
                    offenders in your area, ensuring you have the tools to make informed
                    decisions and safeguard your loved ones
                </p>
            </div>
            
        <div className='flex flex-row justify-between items-start w-3/4 mx-auto'>

        <div className='flex flex-1 flex-col mt-12 ml-12 bg-gray-50 items-center'>
                <Image src="/about-us.png" alt='face' height={600} width={600} />
                <p className='about__us text-center'>About us</p>
                <p className='text-2xl text-center mt-3 w-[300px]'>At BeSafe, we believe that awareness is
                    the key to fostering secure and thriving communities. 
                </p>
            </div>
            
            <div className='flex flex-col w-3/5'>
                

                <span className='hero__title_red'>Protecting Vulnerable Populations</span>
                <p className='hero__text'> <span className=' font-bold'>Offender awareness</span> is paramount for
                    safeguarding vulnerable members of our community,
                    especially children and the elderly. By knowing who resides in our vicinity, we can implement
                    necessary precautions and educate our loved ones about potential risks, enabling them to
                    navigate their surroundings with caution</p>

                <span className='hero__title'>Informed Decision Making</span>
                <p className='hero__text'> <span className='font-bold'>Awareness </span>
                    equips us with the information needed to make informed decisions about our living
                    situations. Whether you're moving to a new neighborhood, choosing a school for your child,
                    or planning community events, being aware of offenders in the area empowers you to make
                    choices that prioritize safety and security.</p>

                <span className='hero__title_red'>Preventing Recurrence</span>
                <p className='hero__text'><span className='font-bold'>Knowledge</span> about the presence of offenders encourages accountability.
                    By staying vigilant, we can contribute to the prevention of repeat offenses, creating an environment
                    where offenders are deterred from engaging in harmful activities due to the awareness of community watchfulness</p>

                <span className='hero__title'>Empowering Survivors</span>
                <p className='hero__text'> <span className='font-bold'>For survivors of offenses</span>, awareness signifies validation and acknowledgment.
                    When communities are aware of the challenges survivors face, it creates an atmosphere of understanding, compassion,
                    and support. By raising awareness, we contribute to a culture where survivors are heard, believed,
                    and provided with the resources they need to heal.</p>

            </div>
        
        </div>
        </div>

    )
}

export default Hero