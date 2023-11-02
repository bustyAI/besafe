import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col'></div>
            <p className='hero__title'>Purpose:</p>
            <p className='hero__text'>Welcome to BeSafe, your trusted ally
                in the mission to keep our communities secure. We understand that your child's
                safety is your top priority, and knowledge is your best defense.
                At BeSafe, we empower parents with essential information about
                offenders in your area, ensuring you have the tools to make informed
                decisions and safeguard your loved ones
            </p>

            <div className='flex flex-col'>
                <p className='hero__title'>Why Offender Awareness Matters:</p>

                <div className='text-center rounded-xl'>

                    <span className='hero__suptitle'>Protecting Vulnerable Populations</span>
                    <p className='hero__text'> offender
                        awareness is paramount for safeguarding vulnerable members of our community,
                        especially children and the elderly. By knowing who resides in our vicinity, we can implement
                        necessary precautions and educate our loved ones about potential risks, enabling them to
                        navigate their surroundings with caution</p>

                </div>

                <span className='hero__suptitle'>Informed Decision Making</span>
                <p className='hero__text'> Awareness
                    equips us with the information needed to make informed decisions about our living
                    situations. Whether you're moving to a new neighborhood, choosing a school for your child,
                    or planning community events, being aware of offenders in the area empowers you to make
                    choices that prioritize safety and security.</p>

                <span className='hero__suptitle'>Preventing Recurrence</span>
                <p className='hero__text'>Knowledge about the presence of offenders encourages accountability.
                    By staying vigilant, we can contribute to the prevention of repeat offenses, creating an environment
                    where offenders are deterred from engaging in harmful activities due to the awareness of community watchfulness</p>

                <span className='hero__suptitle'>Empowering Survivors</span>
                <p className='hero__text'>For survivors of offenses, awareness signifies validation and acknowledgment.
                    When communities are aware of the challenges survivors face, it creates an atmosphere of understanding, compassion,
                    and support. By raising awareness, we contribute to a culture where survivors are heard, believed,
                    and provided with the resources they need to heal.</p>
            </div>
        </div>

    )
}

export default Hero