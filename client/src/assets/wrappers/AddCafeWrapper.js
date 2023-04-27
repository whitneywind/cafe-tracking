import styled from "styled-components";

const Wrapper = styled.div`
  #star-ratings {
    width: 350px;
  }
  .rating-box {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ratings-container {
    padding: 0 2rem;
    margin-top: 0;
  }
  h1 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
  }
  p {
    font-size: 1rem;
    line-height: 1;
    letter-spacing: normal;
  }
  .form-container {
    max-width: 700px;
    margin: 0 auto;
    background: var(--mainColor1Alt);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 1rem 2rem 2rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    letter-spacing: 1px;
  }
  .main-form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;
  }
  .middle-row {
    display: flex;
    justify-content: space-around;
  }
  .visited-question {
    font-size: 1.2rem;
    text-align: center;
  }
  .form-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0;
    width: inherit;
  }
  .visited-row {
    width: 350px;
    text-align: center;
  }
  .form-row {
    margin: 0 auto;
  }
  .form-row label {
    font-size: 1rem;
    width: auto;
  }
  .form-input {
    display: block;
    font-size: 1rem;
    padding: 8px 8px;
    width: 350px;
    letter-spacing: 1px;
    border-radius: 10px;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--mainBlack);
  }
  .btn-container {
    width: 100%;
    text-align: center;
  }
  .add-btn {
    width: 40%;
    cursor: pointer;
    color: var(--mainBlack);
    background: var(--mainColor5Light);
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    display: inline-block;
    margin-top: 30px;
  }
  .alert {
    font-size: 1.5rem;
  }
`;

export default Wrapper;
