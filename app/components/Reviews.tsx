import { reviewList } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

function Reviews() {
    return (
        <div className='lg:p-12 p-8'>
            <h2 className="font-extrabold py-2 lg:mb-8 mb-2 capitalize text-primary text-xl lg:text-3xl">
                Student Reviews
            </h2>
            <div className="flex flex-col lg:flex-row gap-12">
                {
                    reviewList.map((review) => (
                        <div key={review.id} className="flex flex-col items-center justify-center text-center gap-4 basis-1/3">

                            <div className="rounded-full overflow-hidden w-[150px] h-[150px]">
                                <Image
                                    className="object-cover"
                                    src="/reading.jpg"
                                    width={150}
                                    height={150}
                                    alt="Reading"
                                />
                            </div>

                            <h2 className="text-primary text-xl text-bold">
                                Hamdallah
                            </h2>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam in deserunt dolore magni officia voluptatem quibusdam ex sequi laborum, eos eius nesciunt accusantium, error repellendus vero rem incidunt cum!
                            </p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reviews