import styled from "styled-components";
import { useState } from "react";
import Alert from "../../components/Alert";
import { useAppContext } from "../../context/appContext";

const AddCafe = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [details, setDetails] = useState("");
  const [visited, setVisited] = useState(false);

  const { showAlert } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <div className="form-container">
        <header>
          <h1>Add Cafe</h1>
          <p>Fill out details about the cafe you visited or plan to visit.</p>
          <hr />
        </header>
        <form onSubmit={handleSubmit}>
          <div className="main-form">
            <div className="basic-info form-section">
              <div className="form-row">
                <label htmlFor="name">Cafe Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-input"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row visited-row">
              <p>Have you visited this cafe?</p>
              <div className="middle-row">
                <label htmlFor="visited-yes">Yes</label>
                <input
                  type="radio"
                  id="visited-yes"
                  name="visited"
                  value="Yes"
                  checked={visited}
                  onChange={() => setVisited(true)}
                />
                <label htmlFor="visited-no">No</label>
                <input
                  type="radio"
                  id="visited-no"
                  name="visited"
                  value="No"
                  checked={!visited}
                  onChange={() => setVisited(false)}
                />
              </div>
            </div>

            <div className="extra-info form-section">
              <div className="form-row">
                <p htmlFor="neighborhood">How would you rate...</p>
              </div>

              <div className="form-row">
                <label htmlFor="neighborhood">Neighborhood</label>
                <input
                  type="text"
                  name="location"
                  className="form-input"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                />
              </div>

              <div className="form-row">
                <label htmlFor="neighborhood">Misc Details</label>
                <textarea
                  name="details"
                  className="form-input"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Write any other details you'd like to include"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="add-btn">
            Add Cafe Details
          </button>
        </form>
      </div>
      {showAlert && <Alert />}
    </Wrapper>
  );
};
export default AddCafe;

const Wrapper = styled.div`
  h1 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    line-height: 1;
    letter-spacing: normal;
  }
  .form-container {
    max-width: 90%;
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
  .add-btn {
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
    margin-top: 60px;
  }
  @media (min-width: 992px) {
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
    .visited-row {
    }
  }
`;
