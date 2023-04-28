import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Search = () => {
  let { searchString, handleChange } = useAppContext();

  const handleSearch = (e) => {
    handleChange({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <Wrapper>
      <h1>Find your Cafes</h1>
      <hr />
      <div className="search-container">
        <div className="form-row">
          <label htmlFor="searchString">Filter by Cafe Name</label>
          <input
            type="text"
            name="searchString"
            className="form-input"
            value={searchString}
            onChange={handleSearch}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="visitedFilter">Filter by Visited</label>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="visitedFilter"
            onChange={handleSearch}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="unvisited"
              control={<Radio />}
              label="Unvisited"
            />
            <FormControlLabel
              value="visited"
              control={<Radio />}
              label="Visited"
            />
          </RadioGroup>
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
  }
  .form-row {
    margin: 0 auto;
    width: 100%;
  }
  .form-row label {
    font-size: 1rem;
  }
  .form-input {
    display: block;
    width: 100%;
    font-size: 1.1rem;
    padding: 8px 8px 4px;
    letter-spacing: 1px;
    border-radius: 0.5rem;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--mainBlack);
  }
`;
