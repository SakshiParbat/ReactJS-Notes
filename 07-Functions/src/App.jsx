//Example 1: Function without parameters

// const App = () => {
//   function btnClicked(){
//     console.log('Button is Clicked');
//   }
//   return (
//     <div>
//       <button onClick ={btnClicked}>Click Here</button>
//     </div>
//   )
// }
// export default App



//Example 2: 

// const App =  () => {
//   function btnClicked(){
//     console.log('Button Is Clicked');
//   }
//   return (
//     <div>
//       <button onDoubleClick={btnClicked}>Click Here</button>
//     </div>
//   )
// }
// export default App


//Example 3: 

// const App = () => {
//   function btnClicked(){
//     console.log('Button Is Clicked'); 
//   }

//   function mouseEnter(){
//     console.log('Mouse Entered');
//   }
//   return (
//     <div>
//       <button onClick={btnClicked} onMouseEnter={mouseEnter}>Click Here</button>
//     </div>
//   )
// }
// export default App


//Example 4: 

// const App = () => {
//   function btnClicked(){
//     console.log('Button Is Clicked');
//   }
//   return (
//     <div>
//       <button onClick={btnClicked}>Click Here</button>
//       <button onClick={btnClicked}>Explore This</button>
//     </div>
//   )
// }
// export default App


//Example 5: 

// const App = () => {
  
//   return (
//     <div>
//       <button onClick={function(){
//         console.log("Hello Guys");
//       }}>Click Here</button>
//     </div>
//   )
// }
// export default App


//Example 6: 

// const App = () => {
//   return (
//     <div>
//       <button onClick={() => {
//         console.log('Button Clicked');
//       }}>Click Here</button>
//     </div>
//   )
// }
// export default App


//Example 7: 

// const App = () => {
//   function inputChanging(val){
//     console.log(val);
//   }
//   return (
//     <div>
//       <input onChange = {function(elem){
//       inputChanging(elem.target.value);
//       }} type="text" placeholder='Enetr Name'/>
//     </div>
//   )
// }
// export default App

//Example 8: 

// const App = () => {
  
//   return (
//     <div>
//       <div onMouseMove={() => {
//         console.log('Mouse is Moving'); 
//       }}
//       className='box'
//     >

//     </div>
//     </div>
//   )
// }
// export default App


//Example 9: 

// const App = () => {
  
//   return (
//     <div>
//       <div onMouseMove={(elem) => {
//         console.log(elem.clientY); 
//       }}
//       className='box'
//     >

//     </div>
//     </div>
//   )
// }
// export default App


//Example 10: 

// const App = () => {

//   const pageScrolling = (elem) => {
//     console.log('Speed', elem);
//   }
  
//   return (
//     <div onWheel={(elem) => {
//       pageScrolling(elem.deltaY);
//     }}>
//       <div className="page1"></div>
//       <div className="page2"></div>
//       <div className="page3"></div>
//     </div>
//   )
// }
// export default App

//Example 11: 

// const App = () => {

//   const pageScrolling = (elem) => {
//     if(elem>0){
//       console.log('Scrolling Down')
//     }else{
//       console.log('Ultra Scrolling Up'); 
//     }
//   }
  
//   return (
//     <div onWheel={(elem) => {
//       pageScrolling(elem.deltaY);
//     }}>
//       <div className="page1"></div>
//       <div className="page2"></div>
//       <div className="page3"></div>
//     </div>
//   )
// }
// export default App

//Example 12: 

// const App = () => {
//   function btnClicked(){
//     console.log('Button is Clicked');
//   }
  
//   return (
//     <div>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }
// export default App

const App = () => {
  function inputChanging(elem){
    console.log(elem.target.value);
  }
  return (
    <div>
      <input onChange={function(elem){
        inputChanging(elem.target.value);
      }} type="text" placeholder="Enter your name" />
    </div>
  ) 
}
export default App



