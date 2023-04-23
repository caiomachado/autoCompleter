import styled from "styled-components";
import { breakpoints } from "../../utils";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    width: 100%;
    border-radius: 8px;

    @media only screen and (max-width: ${breakpoints.large}px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: ${breakpoints.medium}px) {
        grid-template-columns: 1fr;
    }

    @media only screen and (max-width: ${breakpoints.small}px) {
        grid-template-columns: 1fr;
    }

    @media only screen and (max-width: ${breakpoints.xs}px) {
        grid-template-columns: 1fr;
    } 
`