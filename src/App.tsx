import React,{useState,MouseEvent} from 'react';
import InputFields from "./Components/InputFields"
import List from "./Components/List"
import './App.css';

function App() {
   const [todosList,setTodosList]=useState<Array<Todo>>([])

   const addTodo:AddTodo=newTodo=>{
    if(newTodo!=="")
    {
      setTodosList([...todosList,{text:newTodo}])
    }
   }

   const handleDelete:DeleteTodo=itemName=>{  
    if(itemName!="")
    {
      let filterTodo=todosList.filter((todo)=>{
      if(todo.text===itemName)
      {
        return
      }
      else{
        return todo
      }
    })
    setTodosList([...filterTodo])
    console.log(filterTodo,"filterTodo")
    }
   
   
  }
   
  const handleEdit:EditTodo=(itemName,idx)=>{
     if(itemName!=="" && idx>-1 )
     {
      todosList.map((t,index)=>{
        if(index===idx)
        {
          return t.text=itemName
        }
        return t
      })
     }
      
  }
  
  return (
    <div className="App">
      
        <InputFields addTodo={addTodo}/>
        <List todosList={todosList} handleDelete={handleDelete} handleEdit={handleEdit}/>
    
    </div>
  );
}

export default App;
