import React from 'react'

const Area: React.FC<{}> = () => {
    return (
        <div className='flex flex-1 flex-col justify-center items-center mt-6'>
            <p><span className='be__text text-3xl'>Be</span><span className='safe__text text-3xl'>Aware</span></p>
            <p className='hero__text'>Remaining mindful of your surroundings is crucial. 
            Here's a map that provides valuable information about offenders in your vicinity, 
            emphasizing the significance of being informed about local safety concerns.</p>
            <iframe className='w-full' src="https://offenders.io/sex-offenders-map/" width='1920' height='1080'></iframe>
        </div>
    )
}

export default Area;