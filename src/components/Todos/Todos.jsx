export const Todos = ({todos , handleDelete , handleCheck }) => {
return(
    <>
    <ul>
        {
                todos.map( todo => {
                    return(
                        <li key={todo.id}>
                        <input type="checkbox"  onChange={handleCheck} data-todo-id={todo.id } defaultChecked={todo.isCompleted}/>
                       <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}> {todo.text}</span >
                        <button data-todo-id={todo.id} onClick={handleDelete}>&times;</button>
                    </li>
                    )
                })
        }
       
    </ul>
    </>
)
}