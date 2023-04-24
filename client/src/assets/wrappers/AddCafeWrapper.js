import styled from "styled-components";

const Wrapper = styled.div`
  .rating-box {
    width: auto;
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  h2 {
    font-size: 1.1rem;
    font-weight: 500;
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
    gap: 1rem;
  }
  .middle-row {
    display: flex;
    justify-content: space-around;
  }
  .middle-row label {
  }
  .form-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .visited-row {
    width: 350px;
  }
  .form-row {
    margin: 0 auto;
  }
  .form-row label {
    font-size: 1rem;
  }
  .form-input {
    display: block;
    font-size: 1.1rem;
    padding: 8px 8px;
    width: 350px;
    letter-spacing: 1px;
    border-radius: 10px;
    border: none;
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
  /* @media (min-width: 992px) {
    .form-container {
      max-width: 90%;
      margin: 0 auto;
      background: var(--mainColor1Alt);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      padding: 1rem 2rem 2rem;
      font-size: 1.2rem;
      border-radius: 0.5rem;
      letter-spacing: 1px;
    }
    .main-form {
      display: flex;
      gap: 1rem;
    }
    .form-section {
      display: flex;
      flex-direction: row;
    }
  } */
`;

export default Wrapper;
