import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }

  return (

  <div >
    <div className="bg-pink-950 mx-auto max-w-sm m-3  rounded-xl text-center shadow-lg outline gap-x-4 text-white text-2xl font-bold decoration-solid p-4">
      Example Of Form Handling
    </div>

    <div className='bg-cyan-950 m-5 text-center text-white p-3 text-wrap'>
      <form onSubmit={(e) => {
      submitHandler(e)
    }}>
      <input className='box-border size-10 border-2 w-70 p-4' type="text" placeholder='Enter Your Name'/>
      <button className='bg-cyan-400 m-2 hover:bg-cyan-500/50 text-white font-bold py-2 px-4 rounded'>Submit</button>
    </form>
    </div>

  </div>

  )
}

export default App
