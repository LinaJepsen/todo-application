import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setName } from "../redux/Slices/HeaderSlice"
import { RootState } from "../redux/Store";
import { HeaderPic, Headline, NameInput, Name} from "../styles/Header.styled";
import HeaderFrame from "../assets/header-frame.png"
import {BiSolidEditAlt} from 'react-icons/bi';

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

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    

  return (
    <div>
        <HeaderPic src={HeaderFrame}/>
        <Headline>
            <h1>Daily planner to get things done</h1>
            <p>{formattedDate}</p>
        </Headline>
         {!showInput ? 
         <NameInput>
            <label htmlFor="name">State your name</label>
            <input id="name" type="text" placeholder="Name" />
            <button onClick={addName}>Save</button>
        </NameInput> : null}
         {showInput ? 
         <Name>
            <h2>{nameInput}'s tasks</h2>
            <BiSolidEditAlt id="change-name-btn" onClick={() => {setShowInput(!showInput)}}/>
        </Name> : null} 
    </div>
  )
}

export default Header;