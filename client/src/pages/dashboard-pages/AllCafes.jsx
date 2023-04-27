import styled from "styled-components";
import SearchComponent from "../../components/Search";
import CafesComponent from "../../components/Cafes";
import Alert from "../../components/Alert";
import { useAppContext } from "../../context/appContext";

const AllCafes = () => {
  const { showAlert } = useAppContext();
  return (
    <Wrapper>
      <SearchComponent />
      {showAlert && <Alert />}
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
