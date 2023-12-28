import React, { useEffect, useState } from 'react'
import './navigation.css'
import LocomotiveScroll from 'locomotive-scroll'
export default function Navigationbar() {
  let object={x:"asasas",y:"ASASSs"}
  
  const [startanimate,setStartAnimate]=useState(false)
  const [startanimate1,setStartAnimate1]=useState(false)
  const [startanimate2,setStartAnimate2]=useState(false)

  const [isClick1,setIsClick]=useState(false)
  const [isMobile,setIsMobile]=useState(false)
  function isClick(){
    isClick1?setIsClick(false):setIsClick(true)
  }
  useEffect(()=>{
    delay(200).then(()=>{setStartAnimate(true)})
    delay(400).then(()=>{setStartAnimate1(true)})
    delay(600).then(()=>{setStartAnimate2(true)})

  },[])
  function introScroll(){
    setTimeout(()=>{
      const scroll = new LocomotiveScroll({
        getSpeed:true,
        multiplier:"0.1"
      });
      const target = document.querySelector('#intro');
      
      scroll.scrollTo(target);
      },200)
  }
  function contactScroll(){
    setTimeout(()=>{
      const scroll = new LocomotiveScroll({
        getSpeed:true,
        multiplier:"0.1"
      });
      const target = document.querySelector('#contact');
      
      scroll.scrollTo(target);
      },200)
  }
  function toscroll(){
console.log("Insdie skdsnd")
setTimeout(()=>{
const scroll = new LocomotiveScroll({
  getSpeed:true,
  multiplier:"0.1"
});
const target = document.querySelector('#about');

scroll.scrollTo(target);
},200)

  }
  function delay(n){
    return new Promise(resolve=>setTimeout(resolve,n))
  }
  useEffect(()=>{
    if(window.innerWidth<768){
      setIsMobile(true)
      console.log("less than ")
    }
    else{
      setIsMobile(false)
    }
    window.addEventListener('resize',()=>{
      if(window.innerWidth<768){
        setIsMobile(true)
        console.log("less than ")
      }else{
        setIsMobile(false)
      }
    })
  },[])
  
  return (
  <nav  className='sticky h-[7vh] w-[100vw]  bg-black  flex  mt-0  text-white pl-8 lg:pr-8 '  style={{backdropFilter:"blur(10px)",borderBottom:"solid white 0.3px",minHeight:"40px"}} >
    <div className='lg:flex-[6] sm:flex-[2] flex items-center'>
      <h1 className='text-3xl font-bold'>Portfolio</h1>
    </div>
  {!isMobile ?(<div className='flex-[4] flex justify-end items-center'>
      <ul className='flex flex-row gap-[3vw]'>
      <li  className={`list-none li cursor-pointer ${startanimate?"tonavupanimate":"opacity-0 "}`} onClick={introScroll} >Home</li>
      <li className={`list-none cursor-pointer li ${startanimate1?"tonavupanimate":"opacity-0"}`}  onClick={toscroll} >About</li>
      <li className={`list-none cursor-pointer li ${startanimate2?"tonavupanimate":"opacity-0"}`}  onClick={contactScroll}>Contact</li>
      </ul>
    </div>):(<>
     <div className='flex-[8] ml-2 flex justify-center items-center z-[1]'><ul className={`flex justify-center items-center ${isClick1?"navanimateleft relative":"hidden"}  z-0 flex-row gap-[3vw] justify-self-end self-center`} >
        <li  className='list-none' id='home' onClick={toscroll}>Home</li>
        <li className='list-none' id='about' onClick={toscroll}>About</li>
        <li className='list-none' id='contact' onClick={toscroll}>Contact</li>
      </ul>
     
    </div>
    <div  className='flex-[2] bg-inherit grid z-40'>      <button className='text-white  w-5  self-center absolute mr-0 justify-self-start h-14 z-[99] bg-inherit' onClick={isClick}>{'>'} </button>
</div> </>)}

</nav>
  )
}
