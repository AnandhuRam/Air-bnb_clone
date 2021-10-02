import React from 'react'
import Image from 'next/image'

function Largecard({img,title,description,buttontext}) {
    return (
        <div className='relative py-6 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image
                    src = {img}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-xl'
                    
                />
            </div>
            <div className='absolute top-32 left-16' >
                <h2 className='text-4xl mb-3 w-64'>{title}</h2>
                <p>{description}</p>
                <button className='text-sm bg-gray-900 text-white rounded-lg px-4 py-2'>{buttontext}</button>
            </div>
        </div>
    )
}

export default Largecard
