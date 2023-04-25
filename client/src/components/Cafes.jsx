import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Cafe from "./CafeComponent";

const Cafes = () => {
  const { cafes, totalCafes, getAllCafes } = useAppContext();
  console.log(cafes);
  useEffect(() => {
    getAllCafes();
  }, []);
  return (
    <Wrapper>
      <p>Total: {totalCafes} Cafes Found</p>
      <div className="cafes-container">
        {cafes &&
          cafes.map((cafe) => {
            return <Cafe key={cafe.id} {...cafe} />;
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
