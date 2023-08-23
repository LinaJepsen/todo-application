import { RootState } from "../redux/Store"
import { useSelector, useDispatch } from "react-redux"
import { deleteTodo, completeTodo } from "../redux/Slices/TodoListSlice";
import { useState } from "react";
import UpdateTodo from "./UpdateTodo";
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {RiDeleteBinFill} from 'react-icons/ri';
import {BiSolidEditAlt} from 'react-icons/bi';
import { Container, TaskBox, Text, Buttons } from "../styles/List.styled";

const TodoList = () => {

  const listOfTodos = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);

  //Delete a todo
  const removeTodo = (id:number) => {
    dispatch(deleteTodo(id))
  }
  
  //Complete a todo
  const checkTodo = (id:number) => {
    dispatch(completeTodo(id))
  }

  //Show edit component
  const showEditComp = (id: number) => {
    setSelectedTodoId(id);
  }

  return (
    <Container>
        {listOfTodos.map((todo, index) => (
          <TaskBox key={todo.id}>
            {selectedTodoId === todo.id ? (
            <UpdateTodo todo={todo} showEditComp={() => setSelectedTodoId(null)} />
          ) : (
            <Text>
              <h3>{todo.title}</h3>
              <p>{todo.desc}</p>
            </Text>
          )}
            <Buttons>
              <BsFillCheckCircleFill className="icon-style" onClick={() => {checkTodo(todo.id)}}/>
              <BiSolidEditAlt className="icon-style" onClick={() => showEditComp(todo.id)} />
              <RiDeleteBinFill className="icon-style" onClick={() => {removeTodo(todo.id)}}/>
            </Buttons>
          </TaskBox>
        ))}
    </Container>
  )
}

export default TodoList