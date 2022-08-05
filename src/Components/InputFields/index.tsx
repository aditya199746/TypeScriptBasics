import React, { ChangeEvent,MouseEvent,useState } from 'react'

type TodosInputProps={
    addTodo:AddTodo;
}
const Index = (props:TodosInputProps) => {
    const [todo,setTodo]=useState<string>("")
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setTodo(e.target.value)
    }

    const handleClick=(e:MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault()
      props.addTodo(todo)
      setTodo("")
    }
  return (
    <div>
        <input placeholder='enter name' value={todo} type="text" onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default React.memo(Index);