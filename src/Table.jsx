import React,{useState,useEffect} from 'react'
import "./Table.css"
import {AiFillEye} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import {FaPencilAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export default function Table() {
    let navigate = useNavigate()

    const [text, setText] = useState()
      console.log(">>>array",text)
    useEffect(()=>{
        func()
    },[])
    const func =() =>{
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(json => setText(json))
    }

const singleViewPath =(e,id)=>{
  e.preventDefault()
    navigate(`/singleView/${id}`)
}
  return (
    <div>
        <table className='teble'>
    <tr>
      <th>Serial no. </th>
      <th>Id</th>
      <th>Title </th>
      <th>Completed</th>
      <th>Action</th>
      </tr>
    
            
    {text?.map((data,index)=>{
        console.log(data);
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{data?.id}</td>
                <td>{data?.title}</td>
                <td>{data?.completed ? "True" : "False"}</td>
                <td><AiFillEye onClick={(e)=> singleViewPath(e,data?.id)}/> <AiFillDelete/><FaPencilAlt/></td>
            </tr>
        )
    })}
     
      </table>
    </div>
  )
}
