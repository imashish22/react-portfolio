import React from 'react'

const LeftSider = () => {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:hidden'>
   <div className='flex flex-col items-center'>
   <div className='flex flex-col gap-3 '>
            <a href='https://www.instagram.com/ashish_22_03/' target='/'>
        <i class="ri-instagram-line text-gray-600 text-xl">  </i>
            </a>
      
        

        <a href='https://github.com/imashish22' target='/'>
        <i class="ri-github-fill text-gray-600 text-xl"></i>
        </a>

        <a href='https://www.linkedin.com/in/ashish-jha-512913250/' target='/' >
        <i class="ri-linkedin-fill text-gray-600 text-xl"></i>
        </a>
        
        </div>
        <div className='w-[1px] h-52 bg-[#125f63]'>

        </div>
   </div>
    </div>
  )
}

export default LeftSider