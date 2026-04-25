import axios from "axios"
import { useState } from "react"
const App = () => {

  // Example: 1
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // Example: 2️ 
  // const getData = () => {
  //   const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // Example: 3 
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // Example: 4 
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
  //   const data = await response.json()

  //   console.log(data)
  // }


  // Example:5 
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')//user data api
    
  //   const data = await response.json()

  //   console.log(data)
  // }

  // Example: 6 

  // const getData = async () => {
  //    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  //    console.log(response.data)
  // }

  // Example: 7 
  //  const getData = async () => {
  //    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  //    console.log(data)
  // }

  // Example: 8 
  // const getData = async () => {
  //    const response = await axios.get('https://picsum.photos/v2/list')
  //    console.log(response.data)
  // }

  // Example: 9 

    const [data, setData] = useState([])

    const getData = async () => {

     const response = await axios.get('https://picsum.photos/v2/list')

     setData(response.data)
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){

          return  <h3>Hello, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
