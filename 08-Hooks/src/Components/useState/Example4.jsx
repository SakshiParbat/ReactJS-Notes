import React, { useState } from 'react'

const Example4 = () => {
    
    const [num, setNum] = useState(0)
    function increaseNum(){
        setNum(num + 1)
    }
    function decreaseNum(){
        setNum(num - 1)
    }
  return (
    <div className='bg-yellow-950 m-5 text-center text-white p-3 text-wrap'>
        <h2 className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>4</h2>
        <div className='flex justify-center items-center gap-x-4'>
            <h1 className='text-4xl text-center   m-8 py-9 w-80  px-8 font-bold bg-yellow-200 rounded-xl text-black '>{num}</h1> 
        </div>
        <button className='bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={increaseNum}>Increase</button>
        <button className='bg-red-500 m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={decreaseNum}>Decrease</button>

    </div>
  )
}

export default Example4
