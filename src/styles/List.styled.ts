import { styled } from "styled-components";
import {devices} from "./DefaultTheme";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center
`;

export const TaskBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #eafaf1;
    width: 75%;
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 12px;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    color: #00ad6a;

    h3 {
        margin: 0;
        padding: 4px;
    }
    p {
        margin: 0;
        padding: 4px;
        font-style: italic;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    

   .icon-style {
        width: 20px;
        height: 20px;
        color: #00ad6a;
        padding: 4px;
        transition: all 0.2s ease-in-out;
        &:hover {
            color: #1fe374;
            cursor: pointer;
        }
    }

    `;