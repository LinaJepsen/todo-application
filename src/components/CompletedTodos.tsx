import { RootState } from "../redux/Store"
import { useSelector, useDispatch } from "react-redux"
import { Container, TaskBox, Text, Buttons } from "../styles/List.styled";

const CompletedTodos = () => {

  const listOfCompletedTodos = useSelector((state: RootState) => state.todoList.completedTodos);

  return (
    <Container>
      {listOfCompletedTodos.length > 0 ? <h2>Completed tasks</h2> : null}
      {listOfCompletedTodos.map((todo) => (
       <TaskBox key={todo.id}>
        <Text>
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
        </Text>
     </TaskBox>
      ))}
    </Container>
  )
}

export default CompletedTodos