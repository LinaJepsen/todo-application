import { styled } from "styled-components";

export const EditInputs = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;

input {
    padding: 6px;
    margin-bottom: 6px;
    border-radius: 10px;
    border: none;
    background-color: #d6dae5;
    color: #fff;
}

#edit-button {
    border: none;
    background-color: #00ad6a;
    border-radius: 20px;
    color: white;
    padding: 6px;

   transition: all 0.2s ease-in-out;
        &:hover {
            background-color: #1fe374;
            cursor: pointer;
        }
}
`;