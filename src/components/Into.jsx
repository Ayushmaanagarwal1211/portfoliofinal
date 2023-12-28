import React, { useEffect, useState,Suspense } from "react";
import "./intro.css";
import Black from './Black'
import image from "../images/ayush1.png";
// import {textAnimate} from "sheryjs";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
FaGithub,
  FaInstagram,
} from "react-icons/fa6";
export default function Into() {
  const [ismobile,setIsMobile]=useState(false)
  const [startanimate, setStartAnimate] = useState(false);
  const [letter1,setletter1]=useState(false)
  const [letter4,setletter4]=useState(false)
  const [letter3,setletter3]=useState(false)
  const [letter2,setletter2]=useState(false) 
  const [letter5,setletter5]=useState(false)
  const [letter6,setletter6]=useState(false)

  const [startanimate1, setStartAnimate1] = useState(false);
  const [startanimate2, setStartAnimate2] = useState(false);
  const [startanimate3, setStartAnimate3] = useState(false);
  const [startanimate4, setStartAnimate4] = useState(false);
  let v=false
  const [show,setshow]=useState(true)
  useEffect(()=>{
    let value=true;
    setInterval(() => {
      value?setshow(false):setshow(true)
      value?value=false:value=true

    }, 400);
    setTimeout(()=>{
      setletter1(true)
       
      },200)
      
      setTimeout(()=>{
        setletter2(true)
        
      },900)
      setTimeout(()=>{
        setletter3(true)
        
      },1500) 
      setTimeout(()=>{
        setletter4(true)
        
      },2000) 
      setTimeout(()=>{
        setletter5(true)
        
      },2700)
      setTimeout(()=>{
        setletter6(true)
        
      },3400)
     setTimeout(() => {
      setletter1(false)
      setletter2(false)
      setletter3(false)
      setletter5(false)
      setletter4(false)
      setletter6(false)
     },7000);
    setInterval(() => {
      setTimeout(()=>{
      setletter1(true)
      },100)
      
      setTimeout(()=>{
        setletter2(true)
      },900)
      setTimeout(()=>{
        setletter3(true)
      },1500) 
      setTimeout(()=>{
        setletter4(true)

      },2000) 
      setTimeout(()=>{
        setletter5(true)

      },2700)
      setTimeout(()=>{
        setletter6(true)

      },3400)
     setTimeout(() => {
      setletter1(false)
      setletter2(false)
      setletter3(false)
      setletter5(false)
      setletter4(false)
      setletter6(false)
     },7000);
    
    }, 7000);
  },[])
useState(()=>{
  
  if(window.innerWidth<1000){
    setIsMobile(true)
  }else{
    setIsMobile(false)
  }
},[])
  let value1 = 0;
  useEffect(() => {
    delay(200).then(() => {
      setStartAnimate(true);
    });
  },[]);
  useEffect(() => {
    delay(200).then(() => {
      setStartAnimate1(true);
    });
    delay(400).then(() => {
      setStartAnimate2(true);
    });
    delay(600).then(() => {
      setStartAnimate3(true);
    });
    delay(800).then(() => {
      setStartAnimate4(true);
    });
  },[]);
  function delay(n) {
    return new Promise((resolve) => setTimeout(resolve, n));
  }
  
  return (<>
    <div id="intro" className=" h-[93vh] img1   items-center img bg-black text-white  flex  flex-wrap-reverse">
      <div className={`flex test  justify-center   ${!ismobile?"w-[50vw]  h-[60vh]":"w-[100vw]  "}`}>
        <div
          style={{
         
            borderRadius:"20px",
            overflow: "hidden"
          }}
          className={`parentdiv bg-red ${ismobile?"h-[41vh] w-[70vw]":"h-[65vh] w-[415px]"}  relative flex justify-center items-center   overflow-y-scroll `}
        >
          <div className="inline text h-[95%]  w-[95%] z-[20] absolute"></div>
          <div
            className={`${ismobile?"h-[40vh] w-[69vw]  pt-32":"h-[63vh] pt-14 w-[400px]"} pr-4 pl-4 lt-2 pb-2  relative container1   ` }
            style={{ zIndex: "90",overflow:"hidden" }}
          >
            <span
              className={`${ismobile?"text-7xl":"text-4xl"}    font-bold toloweranimate text-target `}
              style={{
                backgroundImage:
                  "linear-gradient(to right, aqua,white, rgb(224, 62, 124));",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Hlo <span style={{display:`${letter1?"":"none"}`,color:"white", backgroundImage:
                  "linear-gradient(to right, aqua,white, rgb(224, 62, 124))",
                WebkitBackgroundClip: "text",
                color: "transparent",}}>I<span className="font-thin " style={{display:`${letter1?letter2?"none":show?"":"none":""}`}}>I</span></span><span style={{display:`${letter2?"":"none"}`,color:"white", backgroundImage:
                "linear-gradient(to right, aqua,white, rgb(224, 62, 124))",
              WebkitBackgroundClip: "text",
              color: "transparent",}}>t<span className="font-thin " style={{display:`${letter2?letter3?"none":show?"":"none":""}`}}>I</span></span><span style={{display:`${letter3?"":"none"}`,color:"white", backgroundImage:
              "linear-gradient(to right, aqua,white, rgb(224, 62, 124))",
            WebkitBackgroundClip: "text",
            color: "transparent",}}>'<span className="font-thin " style={{display:`${letter3?letter4?"none":show?"":"none":""}`}}>I</span></span><span style={{display:`${letter4?"":"none"}`,color:"white", backgroundImage:
            "linear-gradient(to right, aqua,white, rgb(224, 62, 124))",
          WebkitBackgroundClip: "text",
          color: "transparent",}}>s<span className="font-thin " style={{display:`${letter4?letter5?"none":show?"":"none":""}`}}>I</span></span><span  style={{display:`${letter5?"":"none"}`, backgroundImage:
                "linear-gradient(to right, aqua,white, rgb(224, 62, 124))",
              WebkitBackgroundClip: "text",
              color: "transparent",}}>M<span className="font-thin cursoranimate" style={{display:`${letter5?letter6?"none":show?"":"none":""}`}}>I</span></span>
              <span style={{display:`${letter6?"":"none"}`,color:"white", backgroundImage:
                  "linear-gradient(to right, aqua,white, rgb(224, 62, 124))",
                WebkitBackgroundClip: "text",
                color: "transparent",}}>e<span className="font-thin " style={{display:`${letter6?"":"none"}`}}>I</span></span>
            </span>
            <br></br>
            <span
              className={`mt-2 ${ismobile?"text-6xl":"text-4xl"}  font-bold text-target ${
                startanimate ? "torightanimate" : "hidden"
              } `}
            >
              Ayushmaan Agarwal
            </span>
            <br></br>
            <br></br>
            <span className={` ${ismobile?"text-4xl ":"text-lg"} text-target font-bold toupanimate mt-2`}>
              I Am a FullStack web Developer
            </span>
            <br></br> <br></br>
            <span
              className={`mt-2 ${ismobile?"text-3xl ":"text-xl"} ${
                startanimate ? "toleftanimate" : "hidden"
              } text-target1  font-semibold`}
            >
               | Passionate about crafting seamless web experiences. Proficient in front-end and back-end. Eager to contribute technical expertise and innovation to dynamic projects. 
            </span>
            <ul
              className={`${
                startanimate ? "toupanimate" : "hidden"
              } flex list-none flex-row w-[100%] justify-center gap-6 mt-10 `}
            >
              <li className={`${startanimate1 ? "toupanimate1" : "opacity-0"}`}>
              <div className="parentdiv relative flex justify-center items-center   overflow-hidden" style={{borderRadius:"50%"}}> <div className="inline text1 h-[95%]  w-[95%] z-[20]  absolute"></div> <a className="z-[99] h-auto w-auto bg-black   " href="https://github.com/Ayushmaanagarwal1211" style={{borderRadius:"50%",margin:"2px"}}><FaGithub size={`${ismobile?"3.5em":"1.5em"}`} style={{zIndex:"99"}}/></a></div>
              </li>
              <li className={`${startanimate2 ? "toupanimate1" : "opacity-0"}`}>
              <div className="parentdiv relative flex justify-center items-center   overflow-hidden" style={{borderRadius:"50%"}}> <div className="inline text1 h-[95%]  w-[95%] z-[20]  absolute"></div> <a href="https://www.linkedin.com/in/ayushmaan-agarwal-8064a4258/" className="z-[99] h-[auto] w-[auto] overflow-hidden bg-black   " style={{borderRadius:"50%",margin:"2px"}}><FaLinkedin size={`${ismobile?"3.5em":"1.5em"}`}  style={{zIndex:"99"}}/></a></div>              </li>
             
              <li className={`${startanimate4 ? "toupanimate1" : "opacity-0"}`}>
              <div className="parentdiv relative flex justify-center items-center   overflow-hidden" style={{borderRadius:"50%"}}> <div className="inline text1 h-[95%]  w-[95%] z-[20]  absolute"></div> <a href="https://www.instagram.com/ayushmaanagarwal12?igsh=MTlxdmc0MzZsdXowag==" className="z-[99] h-[auto] w-[auto] bg-black   " style={{borderRadius:"50%",overflow:"hidden",margin:"2px"}}><FaInstagram size={`${ismobile?"3.5em":"1.5em"}`}  style={{zIndex:"99",borderRadius:"50%"}}/></a></div>              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={` ${ismobile?"h-[38vh] w-[100vw] justify-center":"ml-36 mb-5 items-center h-[60vh] justify-center"}   flex  bg-transparent`}>
        <img width={'100%'} height={'100%'} className={`imageborder ${ismobile?"relative  h-[80%]":"h-[100%]"}`} src={image} />
      </div>
    </div>
{/* <Suspense fallback={<p className="h-[100vh] w-[100vw]">Loading...</p>}> */}
  <Black />
{/* </Suspense> */}
  </>);
}
