import styled from "styled-components"
import { useAppContext } from "../context/appContext"

const Alert = () => {
    const { alertType, alertText } = useAppContext();
    return (
    <Wrapper>
        <div className={`alert alert-${alertType}`}>{alertText}</div>
    </Wrapper>  )
}

const Wrapper = styled.div`
    .alert {
        width: 100%;
        background-color: #76e176;
        letter-spacing: 1px;
        border-radius: 0.15rem;
        margin-bottom: 1rem;
        border-color: transparent;
        text-align: center;
        padding: 0.25rem;
        font-size: 1.15rem;
        font-weight: 600;
    }
    .alert-danger {
        background-color: #eb7d7d;
    }
    .alert-success {
        background-color: #e0e0e0;
    }
`

export default Alert