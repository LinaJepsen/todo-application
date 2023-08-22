import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

.add-icon {
    width: 50px;
    height: 50px;
    color: #00ad6a;
       
        transition: all 0.2s ease-in-out;
        &:hover {
            color: #1fe374;
            cursor: pointer;
        }
}`;

export const InputBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    input {
        padding: 8px;
        width: 100%;
        margin-bottom: 8px;
        border-radius: 10px;
        border: none;
        background-color: #d6dae5;
    }
`;