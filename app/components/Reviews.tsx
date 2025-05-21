import Image from 'next/image'
import React from 'react'

function Reviews() {
  return (
    <div className='lg:p-32 p-8 bg-gradient-to-br from-primary/25 to-primary'>
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="basis-1/3 bg-white p-8 border-2">
                <div className="rounded-full ">
                    <Image className='rounded-full max-h-[150px] max-w-[150px] overflow-hidden' src={'/reading.jpg'} width={150} height={150} alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews