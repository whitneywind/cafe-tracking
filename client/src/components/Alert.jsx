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
    background-color: #cccaca;
    letter-spacing: 1px;
    border-radius: 6px;
    border: 2px solid gray;
    text-align: center;
    padding: 0.25rem;
    font-size: 1.1rem;
    font-weight: 600;
    width: 200px;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .alert-danger {
    background-color: #b74439;
    border: 2px solid #84231a;
  }
  .alert-success {
    background-color: #73ac7b;
    border: 2px solid #70a678;
  }
`;

export default Alert;
