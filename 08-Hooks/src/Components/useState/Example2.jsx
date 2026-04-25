import React, { useState } from 'react'

const Example2 = () => {
    const [a, setA] = useState(50)
    function changeNum(){
        setA(100)
    }
  return (
    <div className='bg-orange-950 m-5 text-center text-white p-3 text-wrap'>
              <h2 className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>2</h2>
       <h2 className='font-semibold text-2xl text-white'>Value of A is</h2>
      <p>Count: {a}</p>
      <button className='bg-orange-400 m-2 hover:bg-orange-500/50 text-white font-bold py-2 px-4 rounded' onClick={changeNum}>Click</button>
    </div>
  )
}

export default Example2
