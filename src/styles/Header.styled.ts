import styled from 'styled-components';
import {devices} from "./DefaultTheme";

export const HeaderPic = styled.img`
    width: 100%;
`;

export const Headline = styled.div`
    position: absolute;
    top: 0%;
    left: 57px;
    @media only screen and ${devices.xxs}{
        display: flex;
        align-items: center;
        padding-bottom: 20px;
    }

p {
    color: #d6dae5;
}
`;

export const NameInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:  8px 0 8px 0;

    input {
        padding: 6px;
        margin-bottom: 6px;
        border-radius: 10px;
        border: none;
        background-color: #d6dae5;
        color: #fff;
    }

    button {
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

export const Name = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

#change-name-btn {
    width: 16px;
    height: 16px;
    padding-left: 6px;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #1fe374;
        cursor: pointer;
    }
}`;
