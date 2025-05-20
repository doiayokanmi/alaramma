import React from 'react'

function Story() {
    return (
        <div className='p-4 lg:p-24 bg-linear-to-t from-sky-500 to-indigo-500 text-white'>
           <div className='mb-4 lg:mb-8'>
             <h2 className="text-center lg:text-start font-extrabold text-xl lg:text-3xl border-b-2 border-dotted py-2 lg:inline-block">
                Our Mission
            </h2>
            <p className='text-center lg:text-start py-2 lg:py-4 text-sm lg:text-xl'>
                To provide accessible, high-quality Quranic education to learners around the world through expert instruction, personalized support, and a nurturing online environment that fosters spiritual growth and a deeper connection to the Quran.
            </p>
           </div>

            <div>
             <h2 className="text-center lg:text-start font-extrabold text-xl lg:text-3xl border-b-2 border-dotted py-2 lg:inline-block">
                Our Vision
            </h2>
            <p className='text-center lg:text-start py-2 lg:py-4 text-sm lg:text-xl'>
                To become a leading global platform for Quranic learning—empowering individuals of all ages and backgrounds to engage with the Quran, live by its teachings, and carry its light into their daily lives.
            </p>
           </div>
        </div>
    )
}

export default Story