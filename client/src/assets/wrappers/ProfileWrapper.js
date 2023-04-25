import styles from "styled-components";

const Wrapper = styles.div`
  form {
    max-width: 700px;
    margin: 0 auto;
    background: var(--mainColor1Alt);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 1rem 2rem 2rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    letter-spacing: 1px;
  }
  .alert {
    width: clamp(200px, 50%, 450px);
    margin: 2rem auto;
  }
  h1 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .form-main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
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
    padding: 8px 8px 4px;
    width: 350px;
    letter-spacing: 1px;
    border-radius: 0.5rem;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--mainBlack);
  }
  .profile-btn {
    width: 100%;
    cursor: pointer;
    color: var(--mainBlack);
    background: var(--mainColor5Light);
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    display: inline-block;
    margin-top: 50px;
  }

  @media (min-width: 1225px) {
    .form-main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
  
    }
    .form-input {
      width: auto;
      gap: 0;
      margin: 0;
    }
  }

  `;

export default Wrapper;
