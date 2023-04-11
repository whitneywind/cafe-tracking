import styled from "styled-components"

const Wrapper = styled.section`
    .form {
        width: 50%;
        max-width: 450px;
        min-width: 370px;
        background-color: var(--mainColor2);
        align-items: center;
        box-shadow: var(--shadow-3);
        padding: 3rem;
        margin: 6% auto;
        transition: all .3s ease-in;
        border-radius: 0.25rem;
        color: var(--mainBlack)

    }
    .form:hover {
        box-shadow: var(--shadow-4);
    }
    .logo {
        width: 15%;
        display: block;
        margin: 0 auto;
    }
    h1 {
        text-align: center;
    }
    .form-label {
        display: block;
        margin-bottom: 0.5rem;
        text-transform: capitalize;
        letter-spacing: 1px;
        font-weight: 600;
        color: var(--mainBlack)
    }
    .form-input {
        border: 1px solid var(--mainColor4);
        width: 100%;
        padding: 0.5rem;
        border: solid 1px var(--mainColor3);
        border-radius: 0.25rem;
        background-color: white;
        color: var(--mainBlack);
        margin-bottom: 1.25rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }
    .btn {
        cursor: pointer;
        width: 100%;
        color: var(--mainBlack);
        background-color: #b78e8a;
        box-shadow: var(--shadow-1);
        border: transparent;
        letter-spacing: 1px;
        padding: 0.875rem 1rem;
        text-decoration: none;
        margin-top: 1rem;
    }
    .member-btn {
        all: unset;
        color: var(--mainColor4);
        cursor: pointer;
        letter-spacing: 1px;
        text-align: center;
        width: 100%;
        margin-top: 1rem;
        text-decoration: underline;
        font-size: 0.85rem;
    }
`

export default Wrapper;