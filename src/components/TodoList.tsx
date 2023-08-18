import { RootState } from "../redux/Store"
import { useSelector, useDispatch } from "react-redux"
import { deleteTodo, completeTodo, editTodo } from "../redux/Slices/TodoListSlice";
import { useState } from "react";
import UpdateTodo from "./UpdateTodo";

const TodoList = () => {

  const [showEdit, setShowEdit] = useState<boolean>(false);

  const listOfTodos = useSelector((state: RootState) => state.todoList.todos);

  const dispatch = useDispatch();

  //Delete a todo
  const removeTodo = (id:number) => {
    dispatch(deleteTodo(id))
  }
  
  //Complete a todo
  const checkTodo = (id:number) => {
    dispatch(completeTodo(id))
  }

  //Show edit-form
  const showEditComp = () => {
    setShowEdit(!showEdit)
  }

  return (
    <div>
      <h2>All todos:</h2>
      <div>
        {listOfTodos.map((todo) => (
          <div key={todo.id} style={{border: "solid 1px black"}}>
            <strong>{todo.id}. {todo.title}</strong>
            <p>{todo.desc}</p>
            <button onClick={showEditComp}>Edit</button>
            <button onClick={() => {removeTodo(todo.id)}}>Delete</button>
            <button onClick={() => {checkTodo(todo.id)}}>Complete</button>
            {showEdit ? <UpdateTodo todo={todo} showEditComp={showEditComp}/> : null }
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList