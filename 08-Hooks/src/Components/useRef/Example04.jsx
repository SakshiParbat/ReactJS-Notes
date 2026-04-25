import { useRef } from "react";

const Example04 = () => {

  const textRef = useRef();

  const changeColor = () => {

    const colors = ["red", "blue", "green", "orange", "purple"];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    textRef.current.style.color = randomColor;
  };

  return (
    <div className='bg-purple-950 m-5 text-center text-white p-3 text-wrap'>
        <h2 className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>04</h2>
        <div className='flex justify-center items-center gap-x-5'>
            <h2 
            className='text-4xl text-center   m-8 py-9 w-160  px-8 font-bold bg-purple-200 rounded-xl text-black' 
            ref={textRef}>Hello React</h2>
        </div>

      <button className='bg-purple-400 m-2 hover:bg-purple-500/50 text-white font-bold py-2 px-4 rounded' onClick={changeColor}>
        Change Color
      </button>

    </div>
  );
};

export default Example04;