import { addTodo } from "../redux/Slices/TodoListSlice"
import { useDispatch} from "react-redux"
import { useState } from "react"


const AddTodo = () => {

  const dispatch = useDispatch();

  const [titleInput, setTitleInput] = useState<string>("");
  const [descInput, setDescInput] = useState<string>("");

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
  }

  return (
    <div>
      <h2>Add a new todo</h2>
      <input type="text" placeholder="Title" onChange={handleTitleInput} value={titleInput}/>
      <input type="text" placeholder="Describe the todo..." onChange={handleDescInput} value={descInput}/>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default AddTodo