"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

function BannerText() {
    return (
        <div className="absolute text-white bg-black/75 px-8 py-24 lg:px-32 gap-12 h-full w-full">
            <motion.div 
                initial={{ x: 2000 }} 
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex h-full flex-col gap-12"
            >
                <p className='text-center lg:text-start lg:text-3xl font-extrabold'>
                    ALARAMMA ONLINE <br /> QURAN ACADEMY
                </p>

                <p className='text-xl text-center lg:text-start lg:text-4xl lg:border-l-4 border-red-600 px-4 font-extrabold text-white' translate='no'>
                    قال(ﷺ): من سلك طريقًا يلتمس فيه علما سهل الله له به طريقًا إلى الجنة
                </p>

                <div className="lg:border-l-4 shadow border-primary px-2">
                    <p className='lg:text-2xl text-center lg:text-start font-bold text-white'>
                        He (peace and blessings be upon him) said: Whoever takes a path in search of knowledge, Allah will make easy for him a path to Paradise.
                    </p>
                </div>

                <div className="flex gap-8 p-8 font-bold justify-between lg:justify-start items-center">
                    <Link target='_blank' href={'https://wa.me/+2348057896279'} className="p-4 bg-primary text-white rounded-full hover:bg-primary/90 transition">
                        Get in touch
                    </Link>
                    <Link target='_blank' href={'https://wa.me/+2348057896279'} className="p-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
                        Give Us A trial
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default BannerText