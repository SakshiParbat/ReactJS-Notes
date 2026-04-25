import React, { useState } from 'react'

const Example8 = () => {
    
    const [num, setNum] = useState([10,20,30,40,50,60,70,80])
    const btnClicked = () => {
        const newNum = [...num];
        newNum.push(90)
        setNum(newNum)
    }
  return (
    <div className='bg-teal-950 m-5 text-center text-white p-3 text-wrap'>
        <h2 className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>8</h2>
        <div className='flex justify-center items-center gap-x-5'>
          <h1 className='text-4xl text-center   m-8 py-9 w-160  px-8 font-bold bg-teal-200 rounded-xl text-black'>[{num.join(', ')}]</h1></div> 
        <button className='bg-teal-400 m-2 hover:bg-teal-500/50 text-white font-bold py-2 px-4 rounded' onClick={btnClicked}>Click</button>

    </div>
  )
}

export default Example8


























