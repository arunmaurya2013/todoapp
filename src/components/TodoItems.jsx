import React, { useRef } from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_Icon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {

  
  return (

    <div className='flex items-center my-3 gap-2'>
    
      <div onClick={()=> {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
      <img src={isComplete ? tick:not_tick} alt="" className='w-7' />
      <p className={`text-slate-600 ml-7 text-[17px] decoration-slate-500 
        ${isComplete ? "line-through" : ""}` }>
        {text}</p>
      </div>

    <img onClick={()=>{deleteTodo(id)}} src={delete_Icon} alt=""  className='w-5 cursor-pointer'/>

    </div>

  )
}

export default TodoItems
