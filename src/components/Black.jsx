import React, { useEffect, useRef, useState,Suspense } from 'react';
import Game from './Game';
export default function Black() {
  const [show, setShow] = useState(false);

  


  function handleclick(){
    setShow(true)
  }

  useEffect(() => {
    
  }, []);

  return (
    <>
      {!show ? (
        <div id='about'  className='blackimg h-[100vh] w-[100vw]' style={{backgroundColor: "none;",zIndex:'1' }}>
          <div className='flex justify-center items-center h-[100vh] w-[100vw]' style={{ backgroundColor: "rgba(0,0,0,0.8)" ,zIndex:"99"}}>
            <div className='h-[200px] w-[400px] text-center justify-center items-center flex text-white flex-col text-4xl' style={{ color: "white" }}>
              <span style={{ color: "white" }}>Click</span><span><button className='p-3' style={{border:"solid 2px white",marginBottom:"10px",marginTop:"10px"}} onClick={handleclick}>Start</button></span><span style={{color:"white"}}>To Play</span>
              <span className='mt-5' style={{ color: "white" }}>Game Instructions</span>
              <span className='mt-5' style={{ color: "white" }}>
                <span style={{ color: "white" }}>Press &rarr; to move Left</span>
                <span style={{ color: "white" }}> Press &rarr; to move Right</span>
              </span>
            </div>
          </div>
          <div className='hidden'><Game /></div>
        </div>
      
      ) : (

        <Game />
      )}
    </>
  );
}
