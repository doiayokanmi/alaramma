import {Mail, PhoneIncoming } from 'lucide-react'
import { FaFacebookSquare } from "react-icons/fa";
import Link from 'next/link'
import React from 'react'
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

function Footer() {
    return (
        <div className=' text-white bg-[url(/bgimage.jpg)] bg-cover'>
            <div className='bg-gradient-to-b from-black/75 to-black p-8 lg:p-12'>
                <h1 className="font-bold mb-12 text-4xl">
                    Contact
                </h1>

                <div className="mt-12 flex flex-col gap-4">

                    <Link href={'tel:+2348154605332'} className='flex gap-4'>
                        <PhoneIncoming /> Call Us: 08154605332
                    </Link>

                    <Link href={'mailto:alarama@gmail.com'} className='flex gap-4'>
                        <Mail /> Send Us A Message: alaramma@gmail.com
                    </Link>

                    <div className="flex gap-2">
                        <Link href={'mailto:alarama@gmail.com'}>
                            <FaFacebookSquare size={32} />
                        </Link>

                         <Link href={'mailto:alarama@gmail.com'}>
                            <FaSquareInstagram size={32} />
                        </Link>

                         <Link href={'mailto:alarama@gmail.com'}>
                            <FaSquareXTwitter size={32} />
                        </Link>
                    </div>
                </div>

                <p className="italic text-center font-stretch-50% mt-12">
                    Ar-Rahman Quran Online Academy @ 2025
                </p>
            </div>
        </div>
    )
}

export default Footer