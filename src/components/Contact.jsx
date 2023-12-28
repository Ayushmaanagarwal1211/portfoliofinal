import React, { useEffect, useState,useNavigation, useRef } from 'react'
import { HiPaperAirplane } from "react-icons/hi2";
import { FaGithub, FaPhoneVolume } from "react-icons/fa6";
import { FaFacebook,FaLinkedin,FaWhatsapp,FaInstagram } from "react-icons/fa6";
import   './contact.css'
export default function Contact() {
    const [ismobile,setIsMobile]=useState(false)
    const [line2,setLine2]=useState(false)
    const [line3,showLine3]=useState(false)
    const [submitted,setSubmitted]=useState(false)
    const [line4,showLine4]=useState(false)
let name=useRef()
let message=useRef()
let email=useRef()
let subject=useRef()
    const [line,showLine]=useState(false)
    useEffect(()=>{
        if(window.innerWidth<1000){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    })

const [text,settext]=useState('')
function handlefocus(e){
    console.log(e.target.id)
    if(e.target.id=='1'){
showLine(true);setLine2(false);showLine3(false);showLine4(false)
    }
    else if(e.target.id=='2'){
        showLine(false);setLine2(true);showLine3(false);showLine4(false)
    }
    
    else if(e.target.id=='3'){
        showLine(false);setLine2(false);showLine3(true)
        showLine4(false)
    }
    
    else if(e.target.id=='4'){
        showLine(false);setLine2(false);showLine3(false);showLine4(true)
    }
    // else if()

}
async function handlesendmessage(e){
    e.preventDefault()
    if(!email.current.value){
        setSubmitted(true)
        settext("Please Enter Email")
console.log("TRUE")
setTimeout(() => {
    setSubmitted(false)
}, 1000);
return
    }
    else if(!name.current.value){
        setSubmitted(true)
        settext("Please Enter Name")
console.log("TRUE")
setTimeout(() => {
    setSubmitted(false)
}, 1000);
return
    }
 fetch('https://backend-dsro.onrender.com',{
    method:"POST",
    headers:{'Content-type':"application/json"},
    body:JSON.stringify({
        name:name.current.value,
        message:message.current.value,
        email:email.current.value
    })
})
name.current.value=""
message.current.value=""
email.current.value=""
setSubmitted(true)
settext("Submitted")
console.log("TRUE")
setTimeout(() => {
    setSubmitted(false)
}, 1000);
}
  return (
    <>
        <div className='w-[100vw] h-[100vh] flex bg-black flex-wrap  text-white contact overflow-clip ' id='contact'>
        <div className={`${ismobile?"h-[50vh] w-[100vw]":"w-[50%]"} justify-center items-center flex flex-col gap-12`}> 
            <h1 className={`${ismobile?"text-9xl":"text-6xl"} font-bold`}>Contact Me</h1>
            <div className='flex w-[100%] items-center gap-8 flex-col'>
                <div className='flex items-start flex-col gap-4'>
                <div className='flex flex-row gap-3 items-center'>
<HiPaperAirplane color='black'/><span className={`${ismobile?"text-5xl":"text-3xl"}`} style={{color:"white"}}>agarwalayushmaan88@gmail.com</span>
                </div>
                <br></br>
                <div className='flex flex-row gap-3 items-center'>
<FaPhoneVolume color='black'/><span className={`${ismobile?"text-5xl":"text-3xl"}`} style={{color:"white"}}>7078377472</span>
                </div></div>
                <br></br>
                <div className='flex flex-row gap-3 w-[100%] justify-center'>
                   <a href='https://github.com/Ayushmaanagarwal1211'> <FaGithub href='https://github.com/Ayushmaanagarwal1211' size={`${ismobile?"5.5em":"2rem"}`}/>
                   </a>
                   <a href='https://www.linkedin.com/in/ayushmaan-agarwal-8064a4258/'> <FaLinkedin  size={`${ismobile?"5.5em":"2rem"}`} />
                   </a>
<a href='https://www.instagram.com/ayushmaanagarwal12?igsh=MTlxdmc0MzZsdXowag=='>                    <FaInstagram size={`${ismobile?"5.5em":"2rem"}`}/>
</a>
                </div>
            </div>
        </div>
        <div className={`${ismobile?"h-[600px] w-[100vw]":"w-[50vw] h-[100vh] overflow-clip"} overflow-hidden flex-col flex justify-center items-center relative bottom-10 gap-10`}>

            <form action="" style={{borderRadius:"20px"}} className={` mb-3 flex   bg-red          gap-8 w-[50%] items-center justify-center ${ismobile?"h-[100%]":"h-[48%]"} overflow-hidden relative`}>
                <div className='inline text h-[92%]  w-[92%] z-[20] absolute'></div>
              <div style={{borderRadius:"20px"}} className='w-[99%] h-[99%] overflow-hidden flex justify-center items-center flex-col gap-8 bg-black  z-50'>
              <div className='relative bg-black  mt-16'  >  
              <input id='1' type="text" ref={name} className={`input text-lg text-white`}   onClick={handlefocus} style={{borderBottom:"none"}}  placeholder='Enter Name' />
               {line && <p className=' h-[2px]  text-red-500  z-50 absolute bottom-[-3px] aa' style={{backgroundImage:"linear-gradient(to right,red,aqua)"}}> asasa</p>} </div>
               <div className='relative bg-black' >  
              <input id='2' type="text" ref={email} className={`input text-lg text-white`}   onClick={handlefocus} style={{borderBottom:"none"}}   placeholder='Enter Your Email' />
               {line2 && <p className=' h-[2px]  text-red-500  z-50 absolute bottom-[-3px] aa' style={{backgroundImage:"linear-gradient(to right,red,aqua)"}}> asasa</p>} </div>
   
                <div className='relative'>

<textarea rows={5} color={40} className='textarea text-lg'  id='4' ref={message} placeholder='Enter Your Message' onFocus={handlefocus}></textarea>
{line4&& <p className=' h-[2px]  text-red-500  z-50 absolute bottom-[-3px] aa' style={{backgroundImage:"linear-gradient(to right,red,aqua)"}}> asasa</p>} </div>

</div>
  
   </form><button className='rounded-sm p-2  bg-black' onClick={handlesendmessage} style={{border:"solid white 2px",borderRadius:"8px"}}>Submit</button>
        </div>
        </div>
   {submitted && <p className='text-white showsubmit text-xl fixed left-[45%] bottom-12'>{text}</p>} 
    </>
  )
}
