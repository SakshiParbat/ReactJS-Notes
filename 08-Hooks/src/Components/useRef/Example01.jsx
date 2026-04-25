import React, { useRef } from "react";
const Example01 = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };
// textRef.current.style.color = "orange";
//             textRef.current.style.color = "amber";
//                 textRef.current.style.color = "green";
//                     textRef.current.style.color = "emerald"; 
  

  return (
    <div 
    className='bg-blue-950 m-5 text-center text-white p-3 text-wrap'>
        <div>
            <h2 
            className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>
              01
              </h2>
        </div>
      <input 
      className='box-border size-10 border-2 w-70 p-4' 
      ref={inputRef} 
      type="text" 
      placeholder="Enter name" />

      <button 
      className='bg-blue-400 m-2 hover:bg-blue-500/50 text-white font-bold py-2 px-4 rounded' 
      onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
};

export default Example01