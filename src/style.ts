import styled from 'styled-components'
import { breakpoints } from './utils'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 16px;
    gap: 8px;

    h1 {
        font-size: 20px;
    }

    .search-box {
        display: flex;
        align-items: center;
        height: 20px;
        gap: 16px;

        input {
            width: 200px;
            height: 100%;
            outline: none;
            padding: 0 8px;
            border-radius: 4px;

            @media only screen and (max-width: ${breakpoints.xs}px) {
                height: 20px;
                width: 100%;
            } 
            
            @media only screen and (max-width: ${breakpoints.xxs}px) {
                height: 20px;
                width: 100%;
            } 
        }

        button {
            height: 100%;
            padding: 0 16px;
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

            @media only screen and (max-width: ${breakpoints.xs}px) {
                height: 20px;
                width: 100%;
            } 
            
            @media only screen and (max-width: ${breakpoints.xxs}px) {
                height: 20px;
                width: 100%;
            } 
        }

        @media only screen and (max-width: ${breakpoints.xs}px) {
            flex-direction: column;
            height: auto;
            width: 100%;
            gap: 4px;
        } 
        
        @media only screen and (max-width: ${breakpoints.xxs}px) {
            flex-direction: column;
            height: auto;
            width: 100%;
            gap: 4px;
        } 
    }

    .list-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 16px;
        background: rgba(171, 166, 166, 0.5);
        gap: 8px; 
        min-height: 600px;
        width: 80%;
        border-radius: 8px;
        position: relative;

        .pagination {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-top: auto;

            .icon-wrapper {
                background: transparent;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                .icon polyline {
                    stroke: #b3b3f8;
                }

                &:disabled {
                    cursor: not-allowed;

                    svg polyline {
                        stroke: #f0f0f0;
                    }
                }
            }
        }

        @media only screen and (max-width: ${breakpoints.xs}px) {
            width: 100%;
            padding: 8px;
        } 
        
        @media only screen and (max-width: ${breakpoints.xxs}px) {
            width: 100%;
            padding: 8px;
        } 
    }
`