import { useRef } from "react";
import {stringify, v4} from 'uuid'

export const Form = ({todos, setTodos}) => {
const handleAddTodo = (evt) =>{
    evt.preventDefault();
    const newTodo ={
        id : v4(),
        text : inputRef.current.value ,
        isCompleted : false,
    }
    window.localStorage.setItem('todos' , JSON.stringify( [newTodo, ...todos]));
    
    setTodos((todos) => [newTodo, ...todos]);
    inputRef.current.value = '';
}
const inputRef = useRef('')
return(
<form onSubmit={handleAddTodo}>
    <input ref={inputRef} type='text' placeholder='todo text' required></input>
    <button type="submit" >Add</button>
</form>
)
} 