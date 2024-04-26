import React from 'react'
import { useSelector } from 'react-redux'

const Intro = () => {
 

  return (
   <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 '>
    <h1 className='text-white '> Hi , I am</h1>
<h1 className='text-secondary text-7xl sm:text-3xl font-semibold'> Ashish Anjan Jha</h1>
    <h1 className=' text-white text-6xl sm:text-3xl  font-semibold'>Ready to dive into the Web</h1>
    <p className='text-white w-2/3'>I am a MernStack web developer .with great passion in the web development,always ready to take up the challenge </p>
    <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
   </div>
  )
}

export default Intro