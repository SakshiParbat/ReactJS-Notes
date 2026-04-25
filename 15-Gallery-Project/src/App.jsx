
// Example:1

// import axios from 'axios'

// const App = () => {


//   const getDeta = () => {
//     axios.post('https://picsum.photos/v2/list?page=2&limit=100', 
//       {uasername:'Sakshi', password:'Sakshiishere'})
    
//   }

//   return (
//     <div className='bg-black h-screen p-4 text-white'>
//       <button 
//         onClick={getDeta}
//         className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>
//         Get Data
//       </button>
//     </div>
//   )
// }

// export default App


// Example:2
// import axios from 'axios'
// import { useState } from 'react'

// const App = () => {

//   const [userData, setUaserData] = useState([])

//   const getData = async () => {
//     const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
//     setUaserData(response.data)
//     console.log(response.data)
//   }

//   let printUserData = 'No User Available'
//   if(userData.length>0){
//     printUserData = userData.map(function(){
//       return 'hello'
//     })
//   }

//   return (
//     <div className='bg-black h-screen p-4 text-white'>
//       <button 
//       onClick={getData}
//       className='bg-green-600 active:scale-95 mb-3'>
//         Get Data
//       </button>
//       <div>
//         {printUserData}
//       </div>
//     </div>
//   )
// }

// export default App

// Example: 3 

// import axios from 'axios'
// import { useState } from 'react'

// const App = () => {

//   const [userData, setUaserData] = useState([])

//   const getData = async () => {
//     const response = await axios.get('https://picsum.photos/v2/list?page=4&limit=20')
//     setUaserData(response.data)
//     console.log(response.data)
//   }

//   let printUserData = 'No User Available'
//   if(userData.length>0){
//     printUserData = userData.map(function(elem,idx){
//       return <div key={idx}>
//       <a href={elem.url} target='_black'>
//         <div className='h-40 w-44 overflow-hidden rounded-xl'>
//           <img className='h-full w-full object-cover' src={elem.download_url} alt=""/>
//         </div>
//         <h2 className='font-bold text-lg'>
//           {elem.author}
//         </h2>
//       </a>
//     </div>
//     })
//   }

//   return (
//     <div className='bg-black overflow-auto h-screen p-4 text-white'>
//       <button 
//       onClick={getData}
//       className='bg-blue-400 active:scale-95 mb-3 px-5 py-2 rounded text-white'>
//         Get Data
//       </button>
//       <div className='flex flex-wrap gap-4'>
//         {printUserData}
//       </div>
//     </div>
//   )
// }

// export default App


//Example: 4 

import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card' 

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState([1])

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)

  }

  useEffect(function () {
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
      <Card elem={elem}/>
    </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4 '>

        <button style={{ opacity: index == 1 ? 0.6 : 1 }} className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold' 
        onClick={() => {
          if(index > 1){
            setIndex(index-1) 
            setUserData([])
          }
        }}>
          Previous
        </button>
        <h4>Page{index}</h4>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={() => {
          setUserData([])
          setIndex(index + 1)
        }}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App