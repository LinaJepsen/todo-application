import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/Slices/TodoListSlice';
import {EditInputs} from "../styles/UpdateTodo.styled";
interface Todo {
  id: number;
  title: string;
  desc: string;
  completed: boolean;
}

interface UpdateTodoProps {
  todo: Todo;
  showEditComp: () => void;
}

const UpdateTodo: React.FC<UpdateTodoProps> = ({ todo, showEditComp }) => {
  const dispatch = useDispatch();

  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [updatedDesc, setUpdatedDesc] = useState(todo.desc);

  const handleUpdateTodo = () => {
    const updatedTodo = {
      title: updatedTitle,
      desc: updatedDesc,
    };

    dispatch(editTodo({ id: todo.id, updatedTodo }));
    showEditComp();
  };

  return (
    <EditInputs>
      <input
        type="text"
        value={updatedTitle}
        onChange={e => setUpdatedTitle(e.target.value)}
      />
      <input
        type="text"
        value={updatedDesc}
        onChange={e => setUpdatedDesc(e.target.value)}
      />
      <button id="edit-button" onClick={handleUpdateTodo}>Update task</button>
    </EditInputs>
  );
};

export default UpdateTodo;