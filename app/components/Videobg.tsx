import React from 'react'

function Videobg() {
    return (
        <video className="absolute" autoPlay loop muted>
            <source src="/videobg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default Videobg