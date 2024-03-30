"use client"

import styled from "styled-components"

const Container = styled.header`
    background-image: url("/background/apoiar.jpg");
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    /* color: ${(props) => props.theme.palette.info.contrastText}; */

    .content {
        min-height: 50vh;
        display: grid;
        align-content: center;
    }
    h1 {
        font-size: 2.5rem;
        font-weight: ${(props) => props.theme.shadows[24]};
    }
    p {
        font-size: 1.3rem;
    }
`

export default Container
