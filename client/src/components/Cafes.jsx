import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Cafe from "./CafeComponent";

const Cafes = () => {
  const { cafes, totalCafes, getAllCafes, searchString, visitedFilter } =
    useAppContext();

  useEffect(() => {
    getAllCafes();
  }, [searchString, visitedFilter]);

  // TO-DO: add a Loading option for this and other pages in global state using skeleton

  return (
    <Wrapper>
      <p>Total: {totalCafes} Cafes Found</p>
      {!totalCafes && (
        <div className="empty">No cafes entered. Try adding some first!</div>
      )}
      <div className="cafes-container">
        {cafes &&
          cafes.map((cafe) => {
            return <Cafe key={cafe._id} {...cafe} />;
          })}
      </div>
    </Wrapper>
  );
};
export default Cafes;

const Wrapper = styled.main`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  border-radius: 0.5rem;

  .empty {
    font-size: 1.5rem;
    font-weight: 500;
    width: 100%;
    margin-top: 6rem;
    padding-bottom: 6rem;
    text-align: center;
  }
  .cafes-container {
    margin: 0 auto;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    letter-spacing: 1px;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }

  @media (min-width: 800px) {
    .cafes-container {
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
  }
`;
