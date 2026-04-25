import { useState } from "react"

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted By', title)
    setTitle(' ')
  }

  return (

  <div>
    <div className="bg-pink-950 mx-auto max-w-sm m-3 rounded-xl text-center shadow-lg text-white text-2xl font-bold p-4">
      Example Of Form Handling
    </div>

    <div className='bg-cyan-950 m-5 text-center text-white p-3'>
      <form onSubmit={(e) => {
        submitHandler(e) 
      }}>
        <input
          className='border-2 w-70 p-4'
          type="text"
          placeholder='Enter Your Name'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <button className='bg-cyan-400 m-2 hover:bg-cyan-500/50 text-white font-bold py-2 px-4 rounded'>
          Submit
        </button>
      </form>
    </div>

  </div>

  )
}

export default App