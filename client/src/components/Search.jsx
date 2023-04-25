import styled from "styled-components";

const Search = ({ searchValue, setSearch }) => {
  return (
    <Wrapper>
      <h1>Search your Cafes</h1>
      <hr />
      <div className="search-container">
        <div className="form-row">
          <label htmlFor="searchText">Search</label>
          <input
            type="text"
            name="searchText"
            className="form-input"
            // value={searchValue}
            // onChange={(e) => setSearch(e.target.value)}
            required
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Search;

const Wrapper = styled.main`
  max-width: 700px;
  margin: 0 auto;
  background: var(--mainColor1Alt);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 1rem 2rem 2rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  letter-spacing: 1px;
  .search-container {
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
`;
