import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setName } from "../redux/Slices/HeaderSlice"
import { RootState } from "../redux/Store";

const Header = () => {
    const dispatch = useDispatch();
    const [showInput, setShowInput] = useState<boolean>(false);

    const nameInput = useSelector((state: RootState) => state.name.name)

    const addName = () => {
        const input = document.querySelector<HTMLInputElement>("#name");
        
        if (input){
                const name = input.value;
                dispatch(setName(name))
            }
        setShowInput(!showInput)
            
    };

  return (
    <div>
        <div>
            <h1>Daily planner to get things done</h1>
            {/* ha dagens datum, date.now ? */}
        </div>
         {!showInput ? <div>
            <label htmlFor="name">To whom does this todo-list belong to?</label>
            <input id="name" type="text" placeholder="name" />
            <button onClick={addName}>Save</button>
        </div> : null}
         {showInput ? <div>
            <strong>This todo list belongs to: </strong>
            <p>{nameInput}</p>
            <button onClick={() => {setShowInput(!showInput)}}>Change name</button>
        </div> : null} 
    </div>
  )
}

export default Header;