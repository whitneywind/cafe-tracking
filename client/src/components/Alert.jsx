import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <Wrapper>
      <div className={`alert alert-${alertType}`}>{alertText}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .alert {
    background-color: #7c7b7b;
    font-family: "Arial", sans-serif;
    color: white;
    letter-spacing: 1px;
    border-radius: 6px;
    border: 2px solid gray;
    text-align: center;
    padding: 0.25rem;
    font-size: 1.3rem;
    font-weight: 400;
    width: 255px;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .alert-danger {
    background-color: #b74439;
    border: 2px solid #84231a;
  }
  .alert-success {
    background-color: rgb(142 187 171);
    border: 2px solid rgb(224 233 225);
  }
`;

export default Alert;
