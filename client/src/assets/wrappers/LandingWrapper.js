import styled from "styled-components";

const Wrapper = styled.main`
  .containing {
    margin: 1rem 2rem;
  }

  nav {
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page {
    display: grid;
    align-items: center;
    min-height: 32rem;
  }

  h2 {
    font-size: 2.2rem;
    letter-spacing: 0.1rem;
  }

  h2 span {
    text-decoration: underline solid #a7cecb;
  }

  .info {
    margin-bottom: 2rem;
    display: block;
    height: fit-content;
  }

  p {
    text-align: justify;
    margin-bottom: 3rem;
  }

  .main-img {
    margin: 0 auto;
    max-width: 65%;
  }

  .btn {
    cursor: pointer;
    color: var(--mainBlack);
    background-color: var(--mainColor2);
    box-shadow: var(--shadow-1);
    border: transparent;
    letter-spacing: 1.5px;
    padding: 1rem;
    text-decoration: none;
    display: block;
    margin: 0 auto;
    width: fit-content;
  }

  @media (min-width: 750px) {
    .containing {
      margin: 1rem 1.2rem 1rem 2.7rem;
    }
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
      margin-top: 3rem;
    }
    .main-img {
      display: block;
    }
    .btn {
      display: inline;
    }
  }
`;

export default Wrapper;
