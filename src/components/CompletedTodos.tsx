import { RootState } from "../redux/Store"
import { useSelector, useDispatch } from "react-redux"

const CompletedTodos = () => {

  const listOfCompletedTodos = useSelector((state: RootState) => state.todoList.completedTodos);

  return (
    <div>
      <h2>Completed:</h2>
      {listOfCompletedTodos.map((todo) => (
       <div key={todo.id} style={{border: "solid 1px black"}}>
        <strong>{todo.id}. {todo.title}</strong>
        <p>{todo.desc}</p>
     </div>
      ))}
    </div>
  )
}

export default CompletedTodos