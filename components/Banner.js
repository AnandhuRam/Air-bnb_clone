import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px]  lg:h-[500px] xl:h-[600] 2xl:h-[700]">
            image loaded ??
            <Image
            src="/airb2.png"
            layout="fill"
            objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center"> 
                <p className="text-sm sm:text-lg">Not sure where to go?Perfect</p>
                <button className="text-purple-500 bg-white py-4 px-10 shadow-md rounded-full 
                font-bold my-3
                hover:shadow-xl active:scale-90 transition duration-150
                ">I'am flexible</button>
            </div>
        </div>
    )
}

export default Banner