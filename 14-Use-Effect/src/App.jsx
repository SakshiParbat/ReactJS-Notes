
//Example : 1

// import { useState } from "react"

// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   useEffect(function(){
//     console.log('Use Effect is Running...')
//   })
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={() => {
//         setNum(10)
//       }}>Click</button>
//     </div>
//   )
// }

// export default App



// Example : 2 



// import { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   useEffect(function(){
//     console.log('Use Effect is Running...')
//   })
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={() => {
//         setNum(num+1)
//       }}>Click</button>
//     </div>
//   )
// }

// export default App


// Example : 3 

// import { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function(){
//     console.log('use effect is running...')
//   }, [num])
  
//   return (
//     <div>
//       <h1>Num {num}</h1>
//       <h1>Num2 {num2}</h1>

//       <button onMouseEnter={() => {
//         setNum(num + 1)
//       }}
//       onMouseLeave={() => {
//         setNum2(num2 + 10)
//       }}
      
//       >Hover</button>
//     </div>
//   )
// }

// export default App


// Example: 4 

import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('A Ki Value Change Ho Gyi')
  }

  function bChanging(){
    console.log('B Ki Value Change Ho Gyi')
  }

  useEffect(function(){
    aChanging()
  }, [a])

  useEffect(function(){
    bChanging()
  }, [b])
  
  return (
    <div>
      <h1>A is{a}</h1>
      <h1>B is{b}</h1>
      <button 
      onClick={() => {
        setA(a + 1)
      }}
      >Change A</button>
      <button 
      onClick={() => {
        setB(b - 1)
      }}>Change B</button>
    </div>
  )
}

export default App