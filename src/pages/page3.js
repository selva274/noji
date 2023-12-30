import React, { useReducer } from 'react'
const intialTodos = [{
    id: 1,
    name: "selva",
    complete: true
}, {
    id: 2,
    name: "kumar",
    complete: false
}]

const reducer=(state,action)=>{
    switch(action.type){
        case "COMPLETE":
            return state.map((todo)=>{
                if(todo.id===action.id){
                    return{...todo,complete:!todo.complete}
                }
                else{
                    return todo;
                }
            });
        default:
            return state;
    }
}
export default function Page3() {
    const [todos,dispatch]=useReducer(reducer,intialTodos);
    const handleComplete=(todo)=>{
        dispatch({type:"COMPLETE",id:todo.id})
    }
    return (
       <>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <label>
                    <input 
                        type='checkbox'
                        checked={todo.complete}
                        onChange={()=>{handleComplete(todo)}}
                    />
                    {todo.name}
                </label>
            </div>
        ))}
       </>
  )
}
