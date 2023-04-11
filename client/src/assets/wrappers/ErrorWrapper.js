import styled from "styled-components";

const Wrapper = styled.main`
    #error-page {
        margin: 0 auto;
        width: 50vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 100%;
    }
    .animation-container {
       width: 100%;
       height: fit-content;
       display: flex;
       margin: 0 auto;
       align-items: center;
       justify-content: center;
    }
    .box {
        background-color: var(--mainColor2);
        cursor: pointer;
        font-size: larger;
        background-color: var(--mainColor2);
        box-shadow: var(--shadow-1);
        border: transparent;
        letter-spacing: 1px;
        padding: 1rem;
        margin-top: 3rem;
        transition: all .2s;
    }
    .homeLink {
        text-decoration: none;
        color: var(--mainBlack);
    }
    .homeLink:hover {
        font-weight: bold;
    }
`

export default Wrapper;