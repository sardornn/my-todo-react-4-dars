import { useState } from 'react';
import { v4 } from 'uuid';
import {Form , Todos} from './components'

function App() {
  const localTodos = localStorage.getItem('todos')
  const [todos , setTodos] = useState(localTodos ? JSON.parse(localTodos) : [
    {
      id : v4(),
      text : 'Get Up' ,
      isCompleted : false,
    },
    {
      id : v4(),
      text : 'Phone checked' ,
      isCompleted : false,
    },
 
  ]);
  const handleDelete = (evt)=>{

    const todoId = evt.target.dataset.todoId ;
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    window.localStorage.setItem('todos' , JSON.stringify( filteredTodos));

    setTodos(filteredTodos);
   
  }
  const handleCheck = (evt) => {
		const todoId = evt.target.dataset.todoId ;

		const foundTodo = todos.find((todo) => todo.id === todoId);

		foundTodo.isCompleted = !foundTodo.isCompleted;

		setTodos([...todos]);
	};

  
  return (

    <div className="App">
      <Form todos= {todos} setTodos={setTodos}></Form>
      <Todos todos= {todos}  handleDelete={handleDelete} handleCheck={handleCheck}></Todos>
      <button>All</button>
      <button>Complated</button>
      <button>UnComplated</button>

    </div>
  );
}

export default App;
