import { useRef } from "react";

const Example05 = () => {

  const textRef = useRef();

  const changeColor = (color) => {
    textRef.current.style.color = color;
  };

  return (
    <div className='bg-fuchsia-950 m-5 text-center text-white p-3 text-wrap'>
         <h2 className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>05</h2>
        <div className='flex justify-center items-center gap-x-5'>
            <h2 className='text-4xl text-center   m-8 py-9 w-160  px-8 font-bold bg-fuchsia-200 rounded-xl text-black' 
             ref={textRef}>Hello React</h2>
        </div>

      <button className='bg-red-400 m-2 hover:bg-red-500/50 text-white font-bold py-2 px-4 rounded' onClick={() => changeColor("red")}>Red</button>
      <button className='bg-blue-400 m-2 hover:bg-blue-500/50 text-white font-bold py-2 px-4 rounded' onClick={() => changeColor("blue")}>Blue</button>
      <button className='bg-green-400 m-2 hover:bg-green-500/50 text-white font-bold py-2 px-4 rounded' onClick={() => changeColor("green")}>Green</button>

    </div>
  );
};

export default Example05;