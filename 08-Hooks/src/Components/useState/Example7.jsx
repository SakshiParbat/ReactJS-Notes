import React, { useState } from 'react'

const Example7 = () => {
    
    const [num, setNum] = useState({user: 'Sakshi', age:23})
    const btnClicked = () => {
        const newNum = {...num};
        newNum.age += 5;
        newNum.user = 'Sakshi Parbat';
        setNum(newNum);
         console.log(num);
    }
  return (
    <div className='bg-emerald-950 m-5 text-center text-white p-3 text-wrap'>
        <h2 className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>7</h2>
        <div className='flex justify-center items-center gap-x-4'>
          <h1 className='text-4xl text-center   m-8 py-9 w-90  px-8 font-bold bg-emerald-200 rounded-xl text-black '>{num.user}, {num.age}</h1></div> 
        <button className='bg-emerald-400 m-2 hover:bg-emerald-500/50 text-white font-bold py-2 px-4 rounded' onClick={btnClicked}>Click</button>

    </div>
  )
}

export default Example7


























