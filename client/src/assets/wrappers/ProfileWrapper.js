import styles from 'styled-components'

const Wrapper = styles.div`
  form {
    max-width: 90%;
    margin: 0 auto;
    background: var(--mainColor1Alt);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 1rem 2rem 2rem;
    font-size: 1.4rem;
    border-radius: 0.25rem;
  }
  p {
    font-size: 1.8rem;
    margin-top: 0;
  }
  .form-main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;

  }
  .form-row {
    margin: 0 auto;
  }
  .form-row label {
    font-size: 1.2rem;
  }
  .form-input {
    display: block;
    font-size: 1.3rem;
    padding: 4px 8px;
    width: 350px;
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
    margin-top: 40px;
  }

  @media (min-width: 1225px) {
    .form-main {
        display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0 1rem;
    }
    .form-input {
        display: block;
        font-size: 1.3rem;
        padding: 4px 8px;
        width: auto;
    }

  }

  `

  export default Wrapper;