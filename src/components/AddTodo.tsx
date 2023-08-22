import { addTodo } from "../redux/Slices/TodoListSlice"
import { useDispatch} from "react-redux"
import { useState } from "react"
import {IoMdAddCircle} from 'react-icons/io';
import { Container, InputBox } from "../styles/AddTodo.styled";


const AddTodo = () => {

  const dispatch = useDispatch();

  const [titleInput, setTitleInput] = useState<string>("");
  const [descInput, setDescInput] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleTitleInput = (e:any) => {
    setTitleInput(e.target.value);
  }
 
  const handleDescInput = (e:any) => {
    setDescInput(e.target.value);
  }

  const add = () => {
    dispatch(addTodo({title: titleInput, desc: descInput, completed: false}))
    setDescInput("");
    setTitleInput("");
    setShowInput(false);
  }

  return (
    <Container>
      {!showInput ? <IoMdAddCircle className="add-icon" onClick={()=>setShowInput(!showInput)}/> : null}
      {showInput ? 
      <InputBox>
        <h2>Add a new todo</h2>
        <input type="text" placeholder="Title" onChange={handleTitleInput} value={titleInput}/>
        <input type="text" placeholder="Describe the todo..." onChange={handleDescInput} value={descInput}/>
        <IoMdAddCircle onClick={add} className="add-icon"/>
      </InputBox> : null}
    </Container>
  )
}

export default AddTodo