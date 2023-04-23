import styled, { keyframes } from 'styled-components'
import { breakpoints } from '../../utils'

const appear = keyframes`
    0% {
        opacity: 0;
        width: 0;
    }

    5% {
        opacity: 0.2;
        width: 5%;
    }

    15% {
        opacity: 0.4;
        width: 15%;
    }

    30% {
        opacity: 0.6;
        width: 30%;
    }

    50% {
        opacity: 0.8;
        width: 50%;
    }

    75% {
        opacity: 0.9;
        width: 75%;
    }

    100% {
        opacity: 1;
        width: 100%;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
    gap: 8px;
    padding: 8px;
    transition: all 0.2s ease;
    animation: ${appear} 1.5s linear forwards;

    input {
        width: 100%;
        height: 20%;
        outline: none;
        padding: 0 8px;
        border-radius: 4px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        list-style: none;
        width: 100%;
        height: 80%;
        padding-right: 8px;
        overflow-y: scroll;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 8px;
        }
           
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: #b3b3f8;
        }
    }
    
    span {
        text-align: center;
        font-size: 18;
        font-weight: bold;
    }

    @media only screen and (max-width: ${breakpoints.small}px) {
        padding: 0;
    } 

    @media only screen and (max-width: ${breakpoints.xs}px) {
        padding: 0;
    } 
    
    @media only screen and (max-width: ${breakpoints.xxs}px) {
        padding: 0;
    } 
`