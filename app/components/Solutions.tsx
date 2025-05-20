import Image from 'next/image'
import React from 'react'

function Solutions() {
  return (
    <div className='bg-primary/25 p-24'>
      <div className="flex gap-4">
        <div className="basis-1/4 border-4 rounded-r-2xl">
          <Image src={"/public/alarammao.png"} height={200} width={300} alt='' /> 
        </div>
       
      </div>
    </div>
  )
}

export default Solutions