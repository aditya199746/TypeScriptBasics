type AddTodo=(newTodo:string)=>void;

type Todo={
    
    text:string;
}

type DeleteTodo=(itemName:string)=>void

type EditTodo=(itemName:string,idx:number)=>void
