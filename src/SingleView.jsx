import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Single.css"
export default function SingleView() {
    const [state,setState] = useState()
    console.log(">>>>",state);
    let {id} = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(json => setState(json))
     },[])
   
        

  return (
    <div className='first'>
      
        <div className="container">
       
        <h2>User Id:</h2><br></br>
        <h2>Title:</h2><br></br>
        <h2>Completed:</h2>
        </div>
        
        <div className="index">
            <h2>{state?.userId}</h2>
            <h2>{state?.title}</h2>
            <h2>{state?.completed ? "True" :"False"}</h2>
        </div>
      
    </div>
  )
}
