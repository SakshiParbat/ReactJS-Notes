import React, { useState } from 'react'

const Example10 = () => {
    
    const [num, setNum] = useState(100)
    const btnClicked = () => {

        setNum(prev => (prev + 100))
        setNum(prev => (prev + 100))
        setNum(prev => (prev + 100))
    }
  return (
    <div className='bg-sky-950 m-5 text-center text-white p-3 text-wrap'>
        <h2 className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>10</h2>
        <div className='flex justify-center items-center gap-x-5'><h1 className='text-4xl text-center   m-8 py-9 w-160  px-8 font-bold bg-sky-200 rounded-xl text-black'>{num}</h1></div> 
        <button className='bg-sky-400 m-2 hover:bg-sky-500/50 text-white font-bold py-2 px-4 rounded' onClick={btnClicked}>Click</button>

    </div>
  )
}

export default Example10

