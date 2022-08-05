
import React,{MouseEvent,useState,ChangeEvent} from 'react'

type ListProps={
  todosList:Array<Todo>
  handleDelete:DeleteTodo
  handleEdit:EditTodo
}
const Index = (props:ListProps) => {
 const [edit,setEdit]=useState<number>(-1)
 const [todoItem,setTodoItem]=useState<string>("")
  const handleEdit=(e:MouseEvent<HTMLButtonElement>)=>{
   
    setEdit(Number(e.currentTarget.getAttribute("data-id")))
    setTodoItem(e.currentTarget.getAttribute("data-name")!)
    console.log(edit,"edit")
    console.log(e.currentTarget.id,"Number(e.currentTarget.id)")
  }
  
  const handleDeleteItem=(e:MouseEvent<HTMLButtonElement>)=>{  //e:
    
    
    let name:string=""
   name=e.currentTarget.getAttribute("data-name")!
    
     props.handleDelete(name)
  }

  const handleEditChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setTodoItem(e.target.value)
   }

   const handleSubmitEdit=(e:MouseEvent<HTMLButtonElement>)=>{
    props.handleEdit(todoItem,edit)
    setEdit(-1)
   }

  return (
   <div>
    <ul>
      {props.todosList.map((todo,idx)=>{
         console.log(edit,"edit")
        if(idx===edit)
        {
         return <li><input value={todoItem} onChange={handleEditChange} /> <button onClick={handleSubmitEdit}>submitEdit</button></li>
        }
        else{
           return <li key={idx}>
          {todo.text} 
          <button data-id={idx} data-name={todo.text} onClick={handleEdit}>edit</button>
          <button data-name={todo.text} onClick={handleDeleteItem}>delete</button>
          </li>
        }
       
   })}
    </ul>
   </div>
  )
}

export default React.memo(Index);