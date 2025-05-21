import React from 'react'
import BannerText from './BannerText'

function Banner() {
  return (
    <section className="lg:h-screen bg-[url(/bgimage.jpg)] bg-cover overflow-hidden gap-12 flex flex-col text-white text-shadow-amber-50 bg-black justify-center items-center">
       <BannerText />
      </section>
  )
}

export default Banner