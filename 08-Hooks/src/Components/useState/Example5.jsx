import React, { useState } from 'react'

const Example5 = () => {
    
    const [num, setNum] = useState(0)
    function jump5Num(){
        setNum(num + 5)
    }
  return (
    <div className='bg-lime-950 m-5 text-center text-white p-3 text-wrap'>
        <h2 className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>5</h2>
        <div className='flex justify-center items-center gap-x-4'>
            <h1 className='text-4xl text-center   m-8 py-9 w-80  px-8 font-bold bg-lime-300 rounded-xl text-black '>{num}</h1> 
        </div>
        <button className='bg-lime-400 m-2 hover:bg-lime-500/50 text-white font-bold py-2 px-4 rounded' onClick={jump5Num}>Increase by 5</button>

    </div>
  )
}

export default Example5
