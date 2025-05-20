import React from 'react'

function Story() {
    return (
        <div className='p-24 bg-linear-to-t from-sky-500 to-indigo-500 text-white'>
           <div className='mb-8'>
             <h2 className="font-extrabold text-3xl border-b-2 border-dotted py-2 inline-block">
                Our Mission
            </h2>
            <p className='py-4 text-xl'>
                To provide accessible, high-quality Quranic education to learners around the world through expert instruction, personalized support, and a nurturing online environment that fosters spiritual growth and a deeper connection to the Quran.
            </p>
           </div>

            <div>
             <h2 className="font-extrabold text-3xl border-b-2 border-dashed py-2 inline-block">
                Our Vision
            </h2>
            <p className='py-4 text-xl'>
                To become a leading global platform for Quranic learning—empowering individuals of all ages and backgrounds to engage with the Quran, live by its teachings, and carry its light into their daily lives.
            </p>
           </div>
        </div>
    )
}

export default Story