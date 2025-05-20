import { supportList } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

function Solutions() {


  return (
    <div className='bg-primary/25 p-24'>
      <div className="flex gap-4">

        {
          supportList.map((item) => (
            <div key={item.id} className="basis-1/4 bg-white border-4 rounded-br-2xl rounded-tl-2xl">
              <div className="max-h-[250px] overflow-hidden">
                <Image className='rounded-tl-2xl' src={item.image} height={300} width={300} alt='' />
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

export default Solutions