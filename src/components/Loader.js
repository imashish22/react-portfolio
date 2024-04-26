import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
        <div className="flex gap-5 text-6xl sm:text-3xl font-semibold">
            <h1 className='text-secondary k'>A</h1>
            <h1 className='text-white a'>A</h1>
            <h1 className='text-tertiary j'>J</h1>
        </div>
    </div>
  )
}

export default Loader