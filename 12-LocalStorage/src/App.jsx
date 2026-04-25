const App = () => {

  // Example:1
  // localStorage.setItem('user', 'Sakshi')

  // Example:2
  // const user = localStorage.getItem('user')
  // console.log(user)

  // Example:3
  // localStorage.setItem('age', '18')

  // Example:4
  // const age = localStorage.getItem('age')
  // const user = localStorage.getItem('user')

  // console.log(age, user)

  // Example:4
  // localStorage.removeItem('user')
  // localStorage.removeItem('age')

  // Example:5
  // const user = {
  //   username: 'Sarthak',
  //   age:18,
  //   city:'Pune'
  // }
  // localStorage.setItem('user',JSON.stringify(user))

  //Example:6
  // const user = localStorage.getItem('user')
  // console.log(typeof(user))

  //Example:7
  // const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user)

  return (
    <div>
      App
    </div>
  )
}

export default App
