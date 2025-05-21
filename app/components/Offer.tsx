import { offerList } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

function Offer() {
    return (
        <div className="bg-gradient-to-r from-yellow-500 to-pink-500 p-8 lg:p-12">
            <h2 className="font-extrabold py-2 border-b-2 border-dashed lg:mb-12 mb-8 capitalize text-white text-xl lg:text-3xl">
                what we offer
            </h2>
            <div className="flex flex-col lg:flex-row gap-4">
                {
                    offerList.map((item) => (
                        <div key={item.id} className="basis-1/4 bg-white border-4 rounded-br-2xl rounded-tl-2xl">
                            <div className="max-h-[150px] overflow-hidden">
                                <Image className='rounded-tl-2xl min-h-1' src={item.image} height={300} width={400} alt='' />
                            </div>
                            <div className="p-4">
                                <h2 className="font-bold text-center text-lg text-primary">
                                    {item.title}
                                </h2>

                                <p className="text-sm text-center py-4">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Offer