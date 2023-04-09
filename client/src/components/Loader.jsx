import React from 'react'
import animatedLoader from '../assets/animated-loader.gif'
function Loader() {
  return (
    <div className='bg-zinc-900 bg-opacity-80 h-[100vh] w-[100vw] z-[100000] grid  overflow-hidden fixed top-0 left-0'>
      <img src={animatedLoader} alt="" height={'150'} width={'150'} className='m-auto'/>
    </div>
  )
}

export default Loader