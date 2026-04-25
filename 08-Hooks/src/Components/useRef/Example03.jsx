

import React, { useState, useRef, useEffect } from 'react'

const Example03 = () => {

  const [count, setCount] = useState(0)

  const prevCount = useRef()

  useEffect(() => {
    prevCount.current = count
  }, [count])

  return (
    <div className='bg-violet-950 m-5 text-center text-white p-3 text-wrap'>
        <h2 
            className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>
              03
        </h2>
    <div className='flex justify-center items-center gap-x-4'>
        <h2 className='text-4xl text-center   m-7 py-5 w-120  px-8 font-bold bg-violet-200 rounded-xl text-black'>
        Current: {count}
      </h2>
      <h2 className='text-4xl text-center   m-7 py-5 w-120  px-8 font-bold bg-violet-200 rounded-xl text-black'>
        Previous: {prevCount.current}
      </h2>
    </div>
      <button className='bg-violet-400 m-2 hover:bg-violet-500/50 text-white font-bold py-2 px-4 rounded'  onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Example03