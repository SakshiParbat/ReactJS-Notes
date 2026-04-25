import React, { useRef } from "react";

const Example02 = () => {
  const countRef = useRef(0);

  const increase = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };

  return (
    <div className='bg-indigo-950 m-5 text-center text-white p-3 text-wrap'>
        <div className='bg-white text-black text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>
            02
        </div>
      <button className='bg-indigo-400 m-2 hover:bg-indigo-500/50 text-white font-bold py-2 px-4 rounded' 
      onClick={increase}>
        Increase Count
      </button>
    </div>
  );
};

export default Example02;