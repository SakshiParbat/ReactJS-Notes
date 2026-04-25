import React, { useState } from 'react'

const Example3 = () => {
    const [a, setA] = useState(50)
    const [username, setUsername] = useState('Sakshi')
    function changeNum(){
        setA(100)
        setUsername('Sakshi Hatte')
    }
  return (
    <div className='bg-amber-950 m-5 text-center text-white p-3 text-wrap'>
              <h2 className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>3</h2>
       <h2 className=' font-semibold text-2xl text-white'>Value of A is {a} <br/> Value of user is {username}</h2>
      <p>Count: {a}</p>
      <button className='bg-amber-400 m-2 hover:bg-amber-500/50 text-white font-bold py-2 px-4 rounded' onClick={changeNum}>Click</button>
    </div>
  )
}

export default Example3
