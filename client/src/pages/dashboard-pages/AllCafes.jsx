import styled from "styled-components";
import SearchComponent from "../../components/Search";
import CafesComponent from "../../components/Cafes";

const AllCafes = () => {
  return (
    <Wrapper>
      <SearchComponent searchValue="" />
      <CafesComponent />
    </Wrapper>
  );
};
export default AllCafes;

const Wrapper = styled.div`
  h1 {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
