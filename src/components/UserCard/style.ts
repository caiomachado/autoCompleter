import styled, { keyframes } from 'styled-components'
import { breakpoints } from '../../utils'

const slideShrink = keyframes`
    0% {
        flex: 1;
    }

    5% {
        flex: 0.9;
    }

    15% {
        flex: 0.8;
    }

    30% {
        flex: 0.7;
    }

    50% {
        flex: 0.6;
    }

    75% {  
        flex: 0.5;
    }

    100% {
        flex: 0.4;
    }
`

const slideGrow = keyframes`
    0% {
        flex: 0;
    }

    5% {
        flex: 0.1;
    }

    15% {
        flex: 0.2; 
    }

    30% {
        flex: 0.3;
    }

    50% {
        flex: 0.4;
    }

    75% {
        flex: 0.5;
    }

    100% {
        flex: 0.6;
    }
`

export const Box = styled.div`
    display: flex;
    padding: 12px 16px;
    background: white;
    border-radius: 8px;
    gap: 8px;
    
    .user-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex: 1;

        span {
            font-size: 20px;
            font-weight: bold;
            color: black;
            text-align: center;
        }
    
        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
        }

        button {
            height: 100%;
            max-height: 32px;
            padding: 8px 16px;
            border: none;
            color: #b3b3f8;
            background: white;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            font-weight: bold;

            &:hover {
                background: #b3b3f8;
                color: white;
            }
        }

        &.active {
            animation: ${slideShrink} 1s linear forwards;
        }
    }

    .repo-list {
        transition: all 0.2s ease;
        flex: 0;
        animation: ${slideGrow} 0.5s linear forwards;

        @media only screen and (max-width: ${breakpoints.small}px) {
            width: 100%;
            padding: 0;
        }
    
        @media only screen and (max-width: ${breakpoints.xs}px) {
            width: 100%;
            padding: 0;
        } 
        
        @media only screen and (max-width: ${breakpoints.xxs}px) {
            width: 100%;
            padding: 0;
        } 
    }

    @media only screen and (max-width: ${breakpoints.small}px) {
        flex-direction: column;
    }

    @media only screen and (max-width: ${breakpoints.xs}px) {
        flex-direction: column;
        padding: 6px 8px;
    } 
`