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

  const [showEditArray, setShowEditArray] = useState<boolean[]>(listOfTodos.map(() => false));

  //Delete a todo
  const removeTodo = (id:number) => {
    dispatch(deleteTodo(id))
  }
  
  //Complete a todo
  const checkTodo = (id:number) => {
    dispatch(completeTodo(id))
  }

  // Create a new array with the updated value for the clicked todo's edit form visibility
  const showEditComp = (index: number) => {
    const updatedShowEditArray = showEditArray.map((value, i) => i === index ? !value : value);
    setShowEditArray(updatedShowEditArray);
  };


  return (
    <Container>
        {listOfTodos.map((todo, index) => (
          <TaskBox key={todo.id}>
            {showEditArray[index] ? <UpdateTodo todo={todo} showEditComp={() => showEditComp(index)}/> : 
            <Text>
              <h3>{todo.title}</h3>
              <p>{todo.desc}</p>
            </Text>}
            <Buttons>
              <BsFillCheckCircleFill className="icon-style" onClick={() => {checkTodo(todo.id)}}/>
              <BiSolidEditAlt className="icon-style" onClick={() => showEditComp(index)} />
              <RiDeleteBinFill className="icon-style" onClick={() => {removeTodo(todo.id)}}/>
            </Buttons>
          </TaskBox>
        ))}
    </Container>
  )
}

export default TodoList