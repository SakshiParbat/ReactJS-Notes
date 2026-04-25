import React, { useState } from 'react'

const Example9 = () => {
    
    const [num, setNum] = useState({user:'Shriniwas', age:23})
    const btnClicked = () => {

        setNum(prev => ({...prev, age:24}))
    }
  return (
    <div className='bg-cyan-950 m-5 text-center text-white p-3 text-wrap'>
        <h2 className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>9</h2>
        <div className='flex justify-center items-center gap-x-5'><h1 className='text-4xl text-center   m-8 py-9 w-160  px-8 font-bold bg-cyan-200 rounded-xl text-black'>{num.user}, {num.age}</h1></div> 
        <button className='bg-cyan-400 m-2 hover:bg-cyan-500/50 text-white font-bold py-2 px-4 rounded' onClick={btnClicked}>Click</button>

    </div>
  )
}

export default Example9

