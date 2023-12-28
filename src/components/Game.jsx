import React, {  useEffect, useState } from "react";
import "./game.css";
import cartoonimage from "../images/game11.png";
import cartoon1image from "../images/game111.png";
import begnerimage from '../images/skillbeginner.png'
import ayushmaanimage from '../images/ayushmaan.png'
import agarwalimage from '../images/agarwal.png'
import hotairballoonimg from '../images/hotairballoon.png'
import i1 from "../images/1.png";
import i2 from "../images/2.png";
import i3 from "../images/3.png";
import i71 from '../images/7.1.png'
import i81 from '../images/8.1.png'

import i4 from "../images/4.png";
import i5 from "../images/5.png";
import ocean from '../images/ocean (2).mp4'
import i6 from "../images/6.png";
import i7 from "../images/7.png";
import i8 from "../images/8.png";
import i9 from "../images/9.png";

import casefeature1image from '../images/casefeature1.png'
import school from "../images/school.png";
import hometownimage from "../images/hometown.png";
import tempo from '../images/temporary.png'
import casefeature2image from '../images/casefeature2.png'
import class10image from "../images/class10.png";
import class12image from "../images/class12.png";
import level2image from "../images/level2.png";
import cap from "../images/college.png";
import intermediateskillsimg from "../images/skilsintermediate.png";
import monkeyimage from '../images/monkey1.png'
import level3image from '../images/level3.png'
import featurestextimage from '../images/inkpx-word-art.png'
import lavavideoimg from '../images/lava.mp4'
import finishimg from '../images/finish.png'
export default function Game() {
  var value = 0;
  const [count1,setCount]=useState(0)
  const [ayushmaan,setName1]=useState(false)
  const [ismobile,setIsMobile]=useState(false)
  const [agarwal,setagarwal]=useState(false)
const [cartoon,setCartoon]=useState(true)
const [cartoon1,setCartoon1]=useState(false)
  const [translate, setTranslate] = useState(0);
  const [jump, setJump] = useState(false);
  const [showschool, setShowSchool] = useState(false);
  const [hometown, setHometown] = useState(false);
  const [class10, setClass10] = useState(false);
 
  const [caps, setCaps] = useState(false);
  const [class12, setClass12] = useState(false);

  const [casefeature1, setCaseFeature1] = useState(false);
  const [casefeature2, setcasefeature2] = useState(false);
  const [intermediateskills, setintermediateskills] = useState(false);

  const [bullets, setbullets] = useState(false);
  const [count2,setCount2]=useState(0)
  const [htmlskills, sethtmlskills] = useState(false);
  const [finish, setfinish] = useState(0);
  const [monkey, setmonkey] = useState(false);

  const [left,setleft]=useState(false)
  const [hotairballoon, sethotairballoon] = useState(false);
  const [level2,setlevel2]=useState(false)
  const [helper,sethelper]=useState(true)
  
  const [helper1,sethelper1]=useState(false)
  const [helper2,sethelper2]=useState(false)
  
const [level3, ssetlevel3] = useState(false);
  const [features,setfeatures]=useState(false)
  const [featurestext,setfeaturestext]=useState(false)
  const [isupper,setisupper]=useState(false)
  const [beginerskills,setbeginerskills]=useState(false)
const [video,setvideo]=useState(false)
const [lavavideo,setlavavideo]=useState(false)
  const [innerwidth,setinnerwidth]=useState(0)
const [ischarachter,setischarachter]=useState(false)
const [ispause,setispause]=useState(false)
useEffect(()=>{
  if(translate!=0){
    setTimeout(() => {
      cartoon?setCartoon(false):setCartoon(true)
    }, 100);
  }


},[translate])
useEffect(()=>{
  window.document.addEventListener('keyup',()=>{
    setCartoon(false)
  },3000)
  window.document.getElementById("moveright").addEventListener('touchend',()=>{
    setCartoon(false)
  },200)
  window.document.getElementById("pause").addEventListener('click',()=>{
    setCartoon(false)
  },200)
  return ()=>{

    window.document.removeEventListener("keyup",()=>{
      setCartoon(false)
    })
    window.document.getElementById("moveright").removeEventListener('touchend',()=>{
      setCartoon(false)
    })
  }
},[translate])
useEffect(()=>{
  setTimeout(()=>{
    sethelper(false)
    sethelper1(true)
  },2000)
},[])
  useEffect(()=>{
    if(window.innerWidth<1000){
      setIsMobile(true)
    }
  },[])
useEffect(()=>{
  setinnerwidth(Number(window.innerWidth))
},[])
  useEffect(() => {
    let handlekeydown = (e) => {

      if (e.key == "ArrowRight" ) {
        e.preventDefault()
        
        setleft(false)

     if(value>=-15650){
        value = value -  80;
        if(value<-10400 && value>-11200){
          setisupper(true)
          sethelper2(true)
          sethelper(false)
          sethelper1(false)
        }
        
        if( -13300>value && value >=-13800){      
          setJump(true)
          setTimeout(()=>{
            setJump(false)
          },200)
          value=value-450
        }if(!(value<-10400 && value>-11200)){
          setisupper(false)
          sethelper2(false)
          sethelper(false)
          sethelper1(true)
        }
        setTimeout(() => {
          setTranslate(value);
        }, 0);
      }}
      else if(e.target.type=="submit"){
        setleft(false)
        if(value>=-15650){  
        value = value -  20;
        if(value<-10400 && value>-11200){
          setisupper(true)
          sethelper2(true)
          sethelper(false)
          sethelper1(false)
        }
        
        if( -13300>value && value >=-13800){                
          setJump(true)
          setTimeout(()=>{
            setJump(false)
          },200)
          value=value-90
        }if(!(value<-10400 && value>-11200)){
          setisupper(false)
          sethelper2(true)
          sethelper(false)
          sethelper1(false)        }
        setTimeout(() => {
          setTranslate(value);
        }, 0);
      }}
      else if (e.target.type=="auto" ) {
        setispause(true)
        setleft(false)
        e.preventDefault()
     if(value>=-15650){
        value = value -  1;
        if(value<-10400 && value>-11200){
          setisupper(true)
          sethelper2(true)
          sethelper(false)
          sethelper1(false)
        }
        
        if( -13300>value && value >=-13800){      
          setJump(true)
          setTimeout(()=>{
            setJump(false)
          },200)
          value=value-450
        }if(!(value<-10400 && value>-11200)){
          setisupper(false)
          sethelper2(false)
          sethelper(false)
          sethelper1(true)
        }
          setTranslate(value);
       
      }}
    };
    let handlekeyup = (e) => {
      if (e.key == "ArrowLeft") {
        setleft(true)
        e.preventDefault()
        if(value<0){
        value = value +  80;
        if(value<-10400 && value>-11200){
          setisupper(true)
         
          sethelper2(true)
          sethelper(false)
          sethelper1(false)
        }
        else{
          sethelper2(true)
          sethelper(false)
          sethelper1(false)
          setisupper(false)
        }
        if(-13300>value && value >=-13800){
         
         
            setJump(true)
            setTimeout(()=>{
              setJump(false)
            },200)
          value=value+450
        }
               }       
          setTranslate(value);
   
      }
      else if(e.target.type=='submit'){
        setleft(true)
        if(value<0){
          value = value +  20;
          if(value<-10400 && value>-11200){
            setisupper(true)
          sethelper2(true)
          sethelper(false)
          sethelper1(false)
          }

          else{
            setisupper(false)
          sethelper2(true)
          sethelper(false)
          sethelper1(false)
          }
          if(-13300>value && value >=-13800){
           
              setJump(true)
              setTimeout(()=>{
                setJump(false)
              },200)
            value=value+4.5
          }
                 }       
            setTranslate(value);
      }
    };
    let break1=false;
    window.document.getElementById('pause').addEventListener("click",()=>{
      console.log("BREAKING TURE")
     
      setispause(false)
break1=true
    })
    setTimeout(()=>{

      window.document.getElementById("automove").addEventListener('click',async (e)=>{
        setispause(true)
        break1=false
      setTimeout(async ()=>{
         for(let i=0;i<1300;i++){

     let a=  await new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve() ;
      },60)
    })
    if(break1){
      break
    }
    if(!break1){
    handlekeydown(e)
  }
}
      }) 
  
},0)
    })





  let isButtonDown = false;
let intervalId;
setTimeout(()=>{


document.getElementById('moveright').addEventListener('touchstart', function(e) {
  if (!isButtonDown) {
    isButtonDown = true;

    // Simulate keydown at regular intervals while the button is held
    intervalId = setInterval(() => {
       handlekeydown(e)
    }, 40); // Adjust the interval as needed
  }
}, { passive: false });

document.getElementById('moveright').addEventListener('touchend', function() {
  isButtonDown = false;
  

  clearInterval(intervalId);
});
}, { passive: false })






let isButtonDown1 = false;
let intervalId1;

    setTimeout(()=>{
     

document.getElementById('moveleft').addEventListener('touchstart', function(e) {
  if (!isButtonDown1) {
    isButtonDown1 = true;
    handlekeyup(e);

    // Simulate keydown at regular intervals while the button is held
    intervalId1 = setInterval(() => {
      handlekeyup(e);
    }, 40); // Adjust the interval as needed
  }
}, { passive: false });
    
   

document.getElementById('moveleft').addEventListener('touchend', function() {
  isButtonDown1 = false;

  clearInterval(intervalId1);
 
});}, { passive: false })
    document.addEventListener("keydown", handlekeydown, { passive: false });
    document.addEventListener("keydown", handlekeyup, { passive: false });

    return () => {
      document.getElementById("automove").removeEventListener('click',(e)=>{
       setTimeout(()=>{
        for(let i=0;i<1300;i++){
  
         setTimeout(() => {
           handlekeydown(e)
          
         }, 500);
        }
       }) 
        
      })
      document.getElementById('moveleft').removeEventListener('touchstart', function(e) {
        if (!isButtonDown1) {
          isButtonDown1 = true;
          handlekeyup(e);
      
          // Simulate keydown at regular intervals while the button is held
          intervalId1 = setInterval(() => {
            handlekeyup(e);
          }, 0); // Adjust the interval as needed
        }
      });
      
      document.getElementById('moveleft').removeEventListener('touchend', function() {
        isButtonDown1 = false;
        clearInterval(intervalId1);

      });
     
     
     
     
     
     
     
     
     
     
      document.getElementById('moveright').removeEventListener('touchstart', function(e) {
        if (!isButtonDown) {
          isButtonDown = true;
      
          // Simulate keydown at regular intervals while the button is held
          intervalId = setInterval(() => {
              handlekeydown(e)
              
          }, 0); // Adjust the interval as needed
        }
      });
      
      document.getElementById('moveright').removeEventListener('touchend', function() {
        isButtonDown = false;
        clearInterval(intervalId);
      });
    

      document.removeEventListener("keydown", handlekeydown);
      document.removeEventListener("keydown", handlekeyup);
    };
  },[]);
  
  useEffect(() => {
    let handlekeydown1 = (e) => {
      if (e.key == "ArrowLeft" ) {
        e.preventDefault()
        // setleft(true)
        setTimeout(()=>{
          cartoon?setCartoon(false):setCartoon(true)
        },100)
}
      else if(e.target.type=='submit'){
        // setleft(true)
       

   
 

      }
    };
    
    let isButtonDown = false;
    let intervalId;
    if(count2==0){
      setCount2(1)
      let isButtonDown1 = false;
      let intervalId1;
      
          setTimeout(()=>{
           
      
      document.getElementById('moveleft').addEventListener('touchstart', function(e) {
        if (!isButtonDown1) {
          isButtonDown1 = true;
         
          // Simulate keydown at regular intervals while the button is held
          intervalId1 = setInterval(() => {
            handlekeydown1(e);
          }, 40); // Adjust the interval as needed
        }
      }, { passive: false });
          
         
      
      document.getElementById('moveleft').addEventListener('touchend', function() {
        isButtonDown1 = false;
        clearInterval(intervalId1);

      });}, { passive: false }) } 
 
  
    document.addEventListener("keydown", handlekeydown1, { passive: false });

    return () => {
      document.getElementById('moveleft').removeEventListener('touchstart', function() {
        if (!isButtonDown) {
          isButtonDown = true;
      
          // Simulate keydown at regular intervals while the button is held
          intervalId = setInterval(() => {
          }, 0); // Adjust the interval as needed
        }
      });
      
      document.getElementById('moveleft').removeEventListener('touchend', function() {
        isButtonDown = false;

        clearInterval(intervalId);
      }); 

      document.removeEventListener("keydown", handlekeydown1);
    };
  }, [cartoon]);
  var carvalue=false
  var charachter;
  useEffect(() => {
    let handlekeydown = (e) => {
      
      if (e.key == "ArrowUp" ) {
        setTimeout(() => {
          setJump(false);
        }, 1310);
        setJump(true);
        return;
      }
      if (e.key == "ArrowRight" ) {
        e.preventDefault()
        // setleft(false)

     

        if(translate>=-15650){
          if (!showschool) {
            if (translate < -1400) {
              setShowSchool(true);
            }
          } 
          if (!finish) {
            if (translate < -15400) {
              setfinish(true);
            }
          }
          if (!hotairballoon) {
            if (translate < -12900) {
              sethotairballoon(true);
            }
          } 
          if (!hometown) {
            if (translate < -531) {
              setHometown(true);
            }
          } 
          if (!beginerskills) {
            if (translate < -4380) {
              setbeginerskills(true);
            }
          } 
          if (!lavavideo) {
            if (translate < -12200) {
            setlavavideo(true);
            }
          } 
          if (!video) {
            if (translate < -9600) {
            setvideo(true);
            }
          } 
          if (!class10) {
            if (translate < -2200) {
              setClass10(true);
            }
          } 
          if (!class12) {
            if (translate < -2400) {
              setClass12(true);
            }
          } 
          if (!caps) {
            if (translate < -3000) {
              setCaps(true);
            }
          }
          if (!level2) {
            if (translate < -3480) {
              setlevel2(true);
            }
          } if (!intermediateskills) {
            if (translate < -6200) {
              setintermediateskills(true);
            }
          } 
          
         
         
          if (!htmlskills) {
            if (translate < -7700) {
              sethtmlskills(true);
            }
          } 
          if (!monkey) {
            if (translate < -8700) {
              setmonkey(true);
            }
          }
          if (!level3) {
            if (translate < -9600) {
              ssetlevel3(true);
            }
          } 
          if (!features) {
            if (translate < -11000) {
              setfeatures(true);
            }
          } 
          if (!featurestext) {
            if (translate < -10000) {
              setfeaturestext(true);
            }
          } 
          if (!casefeature1) {
            if (translate < -13700) {
              setCaseFeature1(true);
            }
          }
          
          if (!casefeature2) {
            if (translate < -13500 ) {
              setcasefeature2(true);
            }
          } 
          
         
          
          if (translate < -850){
            setbullets(true);
          }
     
      }}
      else if(e.target.type=="submit"){
        if(value>=-15650){
        // setleft(false)

        if (!showschool) {
          if (value < -1400) {
            setShowSchool(true);
          }
        } 
        if (!hotairballoon) {
          if (value < -12900) {
            sethotairballoon(true);
          }
        } 
        if (!hometown) {
          if (value < -531) {
            setHometown(true);
          }
        } 
        if (!finish) {
          if (value <= -15400) {
            setfinish(true);
          }
        } 
        if (!beginerskills) {
          if (value < -4380) {
            setbeginerskills(true);
          }
        }
        if (!lavavideo) {
          if (value < -12200) {
          setlavavideo(true);
          }
        } 
        if (!video) {
          if (value < -9600) {
          setvideo(true);
          }
        } 
        if (!class10) {
          if (value < -2200) {
            setClass10(true);
          }
        } 
        if (!class12) {
          if (value < -2400) {
            setClass12(true);
          }
        } 
        if (!caps) {
          if (value < -3000) {
            setCaps(true);
          }
        } 
        if (!level2) {
          if (value < -3480) {
            setlevel2(true);
          }
        }   if (!intermediateskills) {
          if (value < -6200) {
            setintermediateskills(true);
          }
        } 
        
       
       
        if (!htmlskills) {
          if (value < -7700) {
            sethtmlskills(true);
          }
        }
        if (!monkey) {
          if (value < -8700) {
            setmonkey(true);
          }
        } 
        if (!level3) {
          if (value < -9600) {
            ssetlevel3(true);
          }
        } 
        if (!features) {
          if (value < -11000) {
            setfeatures(true);
          }
        } 
        if (!featurestext) {
          if (value < -10000) {
            setfeaturestext(true);
          }
        } 
        if (!casefeature1) {
          if (value < -13700) {
            setCaseFeature1(true);
          }
        } 
        
        if (!casefeature2) {
          if (value < -13500 ) {
            setcasefeature2(true);
          }
        } 
       
        
        if (translate < -850){
          setbullets(true);
        }
   
      }}
    };
    let handlekeyup=()=>{
      setTimeout(() => {   setCartoon(true)   },  300);
    }
    let isButtonDown = false;
let intervalId;
if(count1==0){
  setCount(1)
  let isButtonDown = false;
  let intervalId;


  setTimeout(()=>{

    window.document.getElementById("automove").addEventListener('click',async (e)=>{
      for(let i=0;i<1300;i++){

   let a=  await new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve() ;
    },60)
  })
  handlekeydown(e)
}

},0)
  })

  setTimeout(()=>{
  
  
  document.getElementById('moveright').addEventListener('touchstart', function(e) {
    if (!isButtonDown) {
      isButtonDown = true;
  
      // Simulate keydown at regular intervals while the button is held
      intervalId = setInterval(() => {
         handlekeydown(e)
      }, 40); // Adjust the interval as needed
    }
  }, { passive: false });
  
  document.getElementById('moveright').addEventListener('touchend', function() {
    isButtonDown = false;        


    clearInterval(intervalId);
  }, { passive: false });
  })
   }  
   
   
   
   
   // Add event listeners for keydown and keyup events
    document.addEventListener("keydown", handlekeydown, { passive: false });
    document.addEventListener("keyup", handlekeyup, { passive: false });
    return () => {
      window.document.getElementById("automove").removeEventListener('click',async (e)=>{
        for(let i=0;i<1300;i++){
  
     let a=  await new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve() ;
      },90)
    })
    handlekeydown(e)
  }
  
  },0)
      document.getElementById('moveright').removeEventListener('touchstart', function() {
        if (!isButtonDown) {
          isButtonDown = true;
      
          // Simulate keydown at regular intervals while the button is held
          intervalId = setInterval(() => {
          }, 100); // Adjust the interval as needed
        }
      });
      
      document.getElementById('moveright').removeEventListener('touchend', function() {
        isButtonDown = false;
        clearInterval(intervalId);
      }); 
      document.removeEventListener("keydown", handlekeydown);
      document.removeEventListener("keyup",handlekeyup);

    };
  }, [beginerskills,
    cartoon,cartoon1,
    translate,
    count1,
    video,
    hotairballoon,
    lavavideo,
    casefeature1,casefeature2,
    finish,
  ]);
//   let count3=0
//   let interval;
//   let cartoon2=true;
//   let cartoon3=true;
//   const [count5,setCount5]=useState(true)

//   const [count4,setCount4]=useState(true)
//   useEffect(()=>{
//     let isButtonDown = false;
//     let intervalId;
   
//     if(count4){
//       setCount4(1)
       
//         document.getElementById('moveright').addEventListener('touchstart', function(e) {
//           if (!isButtonDown) {
//             isButtonDown = true;
        
//             // Simulate keydown at regular intervals while the button is held
//             intervalId = setInterval(() => {
//                 cartoon2?setCartoon(false):setCartoon(true)
//                 if(cartoon2){
//                   cartoon2=false
//                 }else{
//                   cartoon2=true
//                 }
//             }, 200); // Adjust the interval as needed
//           }
//         }, { passive: false });
        
//         document.getElementById('moveright').addEventListener('touchend', function() {
//           isButtonDown = false;
//           clearInterval(intervalId);
//         }, { passive: false });
      
      
      
//       }  // Add event listeners for keydown and keyup events
       
//         return () => {
         
//           document.getElementById('moveright').removeEventListener('touchstart', function() {
//             if (!isButtonDown) {
//               isButtonDown = true;
          
//               // Simulate keydown at regular intervals while the button is held
//               intervalId = setInterval(() => {
//               }, 100); // Adjust the interval as needed
//             }
//           });
          
//           document.getElementById('moveright').removeEventListener('touchend', function() {
//             isButtonDown = false;
//             clearInterval(intervalId);
//           }); }
//   },[ischarachter,count4])
//  useEffect(()=>{
//   let isButtonDown1 = false;
//   let intervalId1;
 
//   if(count5){
//     setCount5(1)
     
//       document.getElementById('moveleft').addEventListener('touchstart', function(e) {
//         if (!isButtonDown1) {
//           isButtonDown1 = true;
      
//           // Simulate keydown at regular intervals while the button is held
//           intervalId1 = setInterval(() => {
//               cartoon3?setCartoon(false):setCartoon(true)
//               if(cartoon3){
//                 cartoon3=false
//               }else{
//                 cartoon3=true
//               }
//           }, 200); // Adjust the interval as needed
//         }
//       }, { passive: false });
      
//       document.getElementById('moveleft').addEventListener('touchend', function() {
//         isButtonDown1 = false;
//         clearInterval(intervalId1);
//       }, { passive: false })
    
    
    
//     }  ;// Add event listeners for keydown and keyup events
     
//       return () => {
       
//         document.getElementById('moveright').removeEventListener('touchstart', function() {
//           if (!isButtonDown1) {
//             isButtonDown1 = true;
        
//             // Simulate keydown at regular intervals while the button is held
//             intervalId1 = setInterval(() => {
//             }, 100); // Adjust the interval as needed
//           }
//         }, { passive: false });
        
//         document.getElementById('moveright').removeEventListener('touchend', function() {
//           isButtonDown1 = false;
//           clearInterval(intervalId1);
//         }, { passive: false }); }
//  },[ischarachter,count5,cartoon])
useEffect(()=>{
  setTimeout(()=>{
    setName1(true)
    setTimeout(()=>{
      setagarwal(true)
    },200)
  },1000)
},[])
  return (
    <div id="about"
      className={` grid  overflow-hidden imagee relative w-[100vw]   flex-row items-end about`}
      style={{zIndex:"1",height:"100vh",paddingTop:`${ismobile?"700px":"0px"}`,overflow:"hidden" }}
    >   
 <button style={{userSelect:"none",display:`${ispause?"":"none"}`}} type="pause" id="pause" className="text-xl font-semibold z-[99] rounded-md h-16 w-32 absolute top-5 left-2 bg-white text-black">
        Pause
      </button>     <button style={{userSelect:"none",display:`${ispause?"none":""}`}} type="auto" id="automove" className="text-xl font-semibold z-[99] rounded-md h-16 w-32 absolute top-5 left-2 bg-white text-black">
        AUTOPLAY
      </button>  
   {!ismobile && <> <span id="moveright"></span><span id="moveleft"></span></>
}

  {ismobile &&
<>    <button style={{userSelect:"none"}} id="moveleft" className="z-[99] h-20 w-20 absolute bottom-5 left-10 bg-white text-black">
        {'<-'}
      </button>
     
     <button style={{userSelect:"none"}} id="moveright" className="z-[99] h-20 w-20 absolute bottom-5 right-10 bg-white text-black">
        {'->'}
      </button></>}<div style={{height:`${ismobile?"auto":"auto"}`,
                      minHeight:`${ismobile?"300px":"300px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`}} className={` items-center ${helper?"helper":""}  ${helper1?"helper1":""} ${helper2?"helper2":""} self-center flex z-[96] flex-row  relative `}>
        {" "}

      <img
        src={hometownimage} width={'600'} height={'600'}
         
        className="absolute   z-[99] obsanimate "
         
        style={{
          display: `${hometown ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 1450 + "px"})`,
        }}
        alt=""
      />
      <img  width={'300'} height={'300'}
        src={class10image}    
        className="absolute   z-[99] obsanimate "
        style={{
          display: `${class10 ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 3100 + "px"})`,
        }}
        alt=""
      />
      <img  width={'350'} height={'350'}
        src={class12image}   
        className="absolute    z-[99] obsanimate "
        style={{
          display: `${class12 ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 3300 + "px"})`,
        }}
        alt=""
      />
   {ayushmaan &&   <img  height={'200'} width={'900'} className={`absolute ayushmaananimate z-[99] ${ismobile?"h-[100px]":"h-[100px]"}`} src={ayushmaanimage} style={{transition: "ease-out 0.1s",
          transform: `translateX(${translate + 280 + "px"})`}} alt="" />}
   {agarwal &&   <img  height={'200'} width={'600'} className={`absolute agarwalanimate z-[99] ${ismobile?"h-[90px]":"h-[90px]"}`}   src={agarwalimage} alt="" style={{transition: "ease-out 0.1s",
          transform: `translateX(${translate + 418 + "px"})`}} />}
  <img  width={'250'} height={'300'}
        src={level2image}   
        className="absolute   z-[99] obsanimate h-[280px] "
        style={{
          display: `${level2 ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 4500 + "px"})`,
        }}
        alt=""
      />
      <img  width={'400'} height={'600'}
        src={cap}   
        className="absolute   z-[99] obsanimate h-[400px] "
        style={{
          display: `${caps ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 4000 + "px"})`,
        }}
        alt=""
      />
      <img  width={'1300'} height={'300'}
        src={begnerimage}   
        className="absolute   z-[99] obsanimate h-[400px] "
        style={{
          display: `${beginerskills ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 5300 + "px"})`,
        }}
        alt=""
      />
         <img  width={'1000'} height={'500'}
        src={monkeyimage}   
        className={`absolute ${isupper?"upanimate":"" } obsanimate  z-[99] h-[400px] `}
        style={{
          display: `${monkey ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translate(${translate+9400}px ,${isupper?"-520px":"0px"})`        }}
         
       
        alt=""
      />
    
     
      <img  width={'400'} height={'300'}
        src={featurestextimage}   
        className="absolute   z-[99] featureanimate h-[100px] "
        style={{
          display: `${featurestext ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 11300 + "px"})`,
        }}
        alt=""
      />
     
     <img   width={'500'} height={'800'}
        src={finishimg}   
        className="absolute   z-[99] castleanimate h-[700px] "
        style={{
          display: `${finish ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 16240 + "px"})`,
        }}
        alt=""
      />
      <img  width={'1300'} height={'900'}
        src={intermediateskillsimg}   
        className="absolute   z-[99] obsanimate "
        style={{
          display: `${intermediateskills ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 7150 + "px"})`,
        }}
        alt=""
      />
       <img height={'200'} width={'200'}
        src={level3image}   
        className={`absolute ${isupper?"upanimate":"" } obsanimate  z-[99]  `}
        style={{
          display: `${level3 ? "" : "none"}`,
          transition: "transform ease-out 0.1s",
          
          transform: `translate(${translate+10600}px ,${isupper?`${ismobile?"-520px":"-520px"}`:"0px"})`        }}
        alt=""
      />
     
     
     <video autoPlay muted={true} className={`absolute   z-[99] bottom-0 left-0`}loop={1000}  height='50px' style={{

          transition: "ease-out 0.1s",
          transform: `translateX(${14070+translate + "px"})`,
        }} width='450px'>
  <source src={lavavideoimg} type="video/mp4"></source>
</video>
    <video autoPlay muted={true} className={`absolute   z-[98] ${translate<-1?`${isupper?"videoanimate":"videounanimate"}`:"videounanimate"} `}  loop={1000} height='400px'  style={{
                   display: `${video ? "" : "none"}`,

          transition: "ease-out 0.1s",
          transform: `translateX(${11220 + translate + "px"})`,
        }} width='700px'>
  <source src={ocean} type="video/mp4"></source>
</video>
     
 <img  width={'400'} height={'600'}
        src={casefeature1image}   
        className="absolute  z-[99] obsanimate "
        style={{height:"300px",
          display: `${ casefeature1? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 15200 + "px"})`,
        }}
        alt=""
      />
       <img  width={'400'} height={'400'}
        src={casefeature2image}   
        className="absolute  z-[99] obsanimate "
        style={{
          height:"300px"
,          display: `${ casefeature2? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 14700 + "px"})`,
        }}
        alt=""
      />
    
      <img  width={'300'} height={'300'}
        src={hotairballoonimg}   
        className="absolute  z-[99] hotanimate "
        style={{
          height:"400px",
          display: `${hotairballoon ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 14200 + "px"})`,
        }}
        alt=""
      />
      <img width={'500'} height={'500'}
        src={school}   
        className="absolute  z-[99] obsanimate "
        style={{
          display: `${showschool ? "" : "none"}`,
          transition: "ease-out 0.1s",
          transform: `translateX(${translate + 2400 + "px"})`,
        }}
        alt=""
      />
      <img 


        src={cartoonimage}  width={'150'} height={'100'}   
        
        style={{
          transition: "ease-out 1.3s",
      
          bottom:`${jump ? " 200px" : ""}`,

          transform:`${left?"rotateY(180deg)":""}`
        }}
        className={`${
          cartoon ? "hidden" : ""

        }   inline h-[180px]  absolute  left-[700px]  z-[99] bottom-[80px]`}
      ></img>
      {/* <img src={cartoon1} className={`h-[850px] relative top-96 z-[99] ${show?"":"hidden"}`}></img> */}
      <img width={'120'} height={'100'}
        src={cartoon1image}   
        style={{
          transition: "ease-out 1.3s",
          bottom:`${jump ? " 200px" : ""}`,
          transform:`${left?"rotateY(180deg)":""}`

        }}
        className={`${
          cartoon ? "" : "hidden" 
        } ${helper?"cartoonanimate":""} inline h-[180px]  absolute left-[700px]  z-[99] bottom-[80px] `}
      ></img>


       
        
        <img height={'1000'} width={'1000'}
          src={i1}  
          className={`relative   a ${ismobile?"":""}  `}
          style={{
           height:`${ismobile?"728px":"728px"}`,
                      minHeight:`${ismobile?"728px":"728px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`,
            width:"2385px",
            zIndex:"-1",
           
            minWidth:"1550px",
            transition: "ease-out 0.1s",
            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
        
        <img height={'1000'} width={'1000'}
          src={i2}   
          className="relative z-[98] a "
          style={{ minWidth:"1550px",          height:`${ismobile?"728px":"728px"}`,
          minHeight:`${ismobile?"728px":"728px"}`,
          maxHeight:`${ismobile?"728px":"728px"}`,

            transition: "ease-out 0.1s",
            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
         <img   height={'1000'} width={'1000'}
          src={i3} 
          className={`relative   a ${ismobile?"":""}  `}
          style={{
           height:`${ismobile?"728px":"728px"}`,
                      minHeight:`${ismobile?"728px":"728px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`,
            width:"2385px",
            zIndex:"-1",
           
            minWidth:"1550px",
            transition: "ease-out 0.1s",
            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
         <img height={'1000'} width={'1000'}
          src={i4}   
          className={`relative   a ${ismobile?"":""}  `}
          style={{
           height:`${ismobile?"728px":"728px"}`,
                      minHeight:`${ismobile?"728px":"728px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`,
            width:"2385px",
            zIndex:"-1",
           
            minWidth:"1550px",
            transition: "ease-out 0.1s",
            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
         <img height={'1000'} width={'1000'}
          src={i5}   
          className={`relative   a ${ismobile?"":""}  `}
          style={{
           height:`${ismobile?"728px":"728px"}`,
                      minHeight:`${ismobile?"728px":"728px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`,
            width:"2385px",
            zIndex:"-1",
           
            minWidth:"1550px",
            transition: "ease-out 0.1s",
            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
      <img   height={'1000'} width={'1000'}
          src={i6} 
          className={`relative   a ${ismobile?"":""}  `}
          style={{
           height:`${ismobile?"728px":"728px"}`,
                      minHeight:`${ismobile?"728px":"728px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`,
            width:"2385px",
            zIndex:"-1",
           
            minWidth:"1550px",
            transition: "ease-out 0.1s",
            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
       <img   height={'1000'} width={'1000'}
          src={i7} 
          className={`relative ${isupper?"groundanimate":""}  a ${ismobile?"":""}  `}
          style={{
           height:`${ismobile?"728px":"728px"}`,
                      minHeight:`${ismobile?"728px":"728px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`,
            width:"2385px",
            zIndex:"-1",
           
            minWidth:"1400px",
            transition: "ease-out 0.1s",
            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
         <img   height={'1000'} width={'1000'}
          src={i71} 
          className={`z-[97] relative a h-[100%] ${isupper?"groundanimate":""}`}
          style={{ minWidth:"1550px",
            transition: "ease-out 0.1s",           height:`${ismobile?"728px":"728px"}`,
            minHeight:`${ismobile?"728px":"728px"}`,
            maxHeight:`${ismobile?"728px":"728px"}`,

            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
          <img   height={'1000'} width={'1000'}
          src={i8} 
          className={`relative ${isupper?"groundanimate":""}   a ${ismobile?"":""}  `}
          style={{
           height:`${ismobile?"728px":"728px"}`,
                      minHeight:`${ismobile?"728px":"728px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`,
            width:"2385px",
            zIndex:"-1",
           
            minWidth:"1300px",
            transition: "ease-out 0.1s",
            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
         <img   height={'1000'} width={'1000'}
          src={i81} 
          className={`relative   a ${ismobile?"":""}  `}
          style={{
           height:`${ismobile?"728px":"728px"}`,
                      minHeight:`${ismobile?"728px":"728px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`,
            width:"2385px",
            zIndex:"-1",
           
            minWidth:"1250px",
            transition: "ease-out 0.1s",
            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
        <img   height={'1000'} width={'1000'}
          src={tempo} 
          className={`relative   a ${ismobile?"":""}  `}
          style={{
           height:`${ismobile?"728px":"728px"}`,
                      minHeight:`${ismobile?"728px":"728px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`,
            width:"2385px",
            zIndex:"-1",
           
            minWidth:"1550px",
            transition: "ease-out 0.1s",
            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
         <img   height={'1000'} width={'1000'}
          src={i9} 
          className={`relative   a ${ismobile?"":""}  `}
          style={{
           height:`${ismobile?"728px":"728px"}`,
                      minHeight:`${ismobile?"728px":"728px"}`,
           maxHeight:`${ismobile?"728px":"728px"}`,
            width:"2385px",
            zIndex:"-1",
           
            minWidth:"1550px",
            transition: "ease-out 0.1s",
            transform: `translateX(${translate +-1+ "px"})`,
          }}
        ></img>
          <img height={'1000'} width={'1000'}
          src={i7}   
          className="z-[98]  relative a h-[100%] "
          style={{ minWidth:"1550px",
            transition: "ease-out 0.1s",          height:`${ismobile?"922px":"728px"}`,
            minHeight:`${ismobile?"922px":"728px"}`,
            maxHeight:`${ismobile?"922px":"728px"}`,

            transform: `translateX(${translate + "px"})`,
          }}
        ></img>
        <img  width={'150'} height={'200'}     src="https://images.cooltext.com/5680342.png" className="finishanimate"  alt="FINISH" style={{position:"absolute",bottom:"500px",zIndex:"99",
   display:`${finish?"":"none"}`,
   height:"70px",
      width:"280px",
      transition: "ease-out 0.1s",
      transform: `translateX(${translate + 16370 + "px"})`,}} />
      </div>
    </div>
  );
}
