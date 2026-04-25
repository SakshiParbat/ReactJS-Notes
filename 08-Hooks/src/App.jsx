// useState

import Example1 from './Components/useState/Example1'
import Example2 from './Components/useState/Example2'
import Example3 from './Components/useState/Example3'
import Example4 from './Components/useState/Example4'
import Example5 from './Components/useState/Example5'
import Example6 from './Components/useState/Example6'
import Example7 from './Components/useState/Example7'
import Example8 from './Components/useState/Example8'
import Example9 from './Components/useState/Example9'
import Example10 from './Components/useState/Example10'


// useRef

import Example01 from './Components/useRef/Example01'
import Example02 from './Components/useRef/Example02'
import Example03 from './Components/useRef/Example03'
import Example04 from './Components/useRef/Example04'
import Example05 from './Components/useRef/Example05'


const App = () => {
  return (
    <div>

      {/* useState */}

      <div className="bg-gray-900 mx-auto max-w-sm m-3  rounded-xl text-center shadow-lg outline gap-x-4 text-white text-2xl font-bold underline decoration-solid p-4">
        Hooks : useState
      </div>
      <Example1/>
      <div style={{marginTop:'20px'}}>
        <Example2/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example3/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example4/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example5/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example6/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example7/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example8/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example9/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example10/>
      </div>


      {/* useRef */}

      <div className="bg-gray-900 mx-auto max-w-sm m-3  rounded-xl text-center shadow-lg outline gap-x-4 text-white text-2xl font-bold underline decoration-solid p-4">
        Hooks : useRef
      </div>
      <Example01/>
      <div style={{marginTop:'20px'}}>
        <Example02/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example03/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example04/>
      </div>
      <div style={{marginTop:'20px'}}>
        <Example05/>
      </div>


    </div>
  )
}

export default App