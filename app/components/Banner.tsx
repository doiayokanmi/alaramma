import React from 'react'
import Videobg from './Videobg'
import BannerText from './BannerText'

function Banner() {
  return (
    <section className="h-screen overflow-hidden relative gap-12 flex flex-col text-white text-shadow-amber-50 bg-black justify-center items-center">
        <Videobg />

        <BannerText />
      </section>
  )
}

export default Banner