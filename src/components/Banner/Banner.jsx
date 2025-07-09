import React from 'react'
import "./Banner.css"
import Typical from 'react-typical'

const Banner = () => {
  return (
    <>
     <div className='div1'>
        <h1 id="user-detail-name">Hello, I am Ruchi Agrawal </h1>
                  <p> <Typical
         steps={["I'm a full stack developer", 1000,"I'm a frontend developer", 3000]}
         loop={Infinity}
       wrapper="p"
       /> </p>
     </div>
    </>
  )
}

export default Banner