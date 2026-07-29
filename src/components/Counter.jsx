import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    


//-------------Run only once-----------

    useEffect(()=>{

        console.log("Run only once")
    },[])
/*
empty dependency array [] means the effect runs after the
component's initial render and doesn't rerun when state changes
*/

//-------------Run on every render-----------

    // useEffect(()=>{
    //   console.log("i will run on Every Render ,Because no dependency array")
    // })   //

//-------------Run when state changes-----------
     useEffect(()=>{
      console.log("i will run when state changes")
     },[count])


//-------------Two state One Effect-----------

// useEffect(()=>{
//       console.log("i will run when state changes")
//      },[count,name])

//---------inifinite Loop--------------

//  useEffect(()=>{
//       setCount(count+1);
//     },[count])

//---------incrrment only once --------------

//  useEffect(()=>{
//       setCount((prev)=>prev+1);
//     },[])


//-------derived Logic---------------useEffect not needed

const message=count%2===0 ? "even" :"odd";

//----------document title sync-----

 useEffect(()=>{
    document.title=`Count:${count}`;
    },[count])


//---------eventListener and Cleanup

 useEffect(()=>{
   function handleClick(){
    console.log("window clicked");
   }
   window.addEventListener("click",handleClick);

   return ()=>{
    window.removeEventListener("click",handleClick)
   };
    },[])



  return (
    <div>
        <h1>Hello</h1>
        {message}

<p>Click anywhere</p>
<p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>increase </button>
    <br/>
    <br/>
    <label>Username</label><input placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default Counter