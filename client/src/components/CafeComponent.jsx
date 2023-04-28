import styled from "styled-components";
import { GrLocation } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { useAppContext } from "../context/appContext";

const CafeComponent = ({
  cafeName,
  city,
  details,
  coffeeValue,
  vibeValue,
  foodValue,
  _id,
  visited,
}) => {
  const { deleteCafe } = useAppContext();

  const handleDelete = () => {
    deleteCafe(_id);
  };

  return (
    <Wrapper>
      <header>
        <div className="letter-box">
          <p>{cafeName.slice(0, 1)}</p>
        </div>
        <div className="name-and-location">
          <p className="name">{cafeName}</p>
          <div className="location">
            <GrLocation />
            <div>{city}</div>
          </div>
        </div>
        <MdOutlineCancel className="cancel" onClick={handleDelete} />
      </header>
      <hr />
      <div className="ratings">
        <div className="coffee rate">
          <p className="rate-title">Coffee</p>
          <CiStar className="star" />
          {visited && <p className="score">{coffeeValue}/5</p>}
        </div>
        <div className="vibe rate">
          <p className="rate-title">Vibe</p>
          <CiStar className="star" />
          {visited && <p className="score">{vibeValue}/5</p>}
        </div>
        <div className="food rate">
          <p className="rate-title">Food</p>
          <CiStar className="star" />
          {visited && <p className="score">{foodValue}/5</p>}
        </div>
      </div>
    </Wrapper>
  );
};
export default CafeComponent;

const Wrapper = styled.main`
  background-color: var(--mainColor1Alt);
  border-radius: 8px;
  .star {
    font-size: 55px;
  }
  .score {
    margin-top: -2.9rem;
    margin-bottom: 2rem;
    font-size: 14px;
    font-family: sans-serif;
    letter-spacing: 0;
  }
  header {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    align-items: center;
    width: 90%;
    margin: 10px auto;
    gap: 1rem;
  }
  .letter-box {
    width: 56px;
    height: 56px;
    background-color: var(--mainColor4);
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .letter-box > p {
    color: white;
    font-size: 1.4rem;
  }
  .name-and-location {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: 1.7rem;
    text-align: start;
    margin: 0;
    line-height: normal;
  }
  .location {
    display: inline-flex;
    align-items: center;
    font-size: 1.1rem;
  }
  .location > div {
    padding-left: 3px;
  }
  hr {
    width: 90%;
    margin: 0 auto;
  }
  .cancel {
    margin-left: 22px;
    margin-bottom: 25px;
    text-align: center;
    font-size: 1.5rem;
    color: var(--mainColor4);
    transition: all 1s ease;
  }
  .cancel:hover {
    cursor: pointer;
    color: #ae4949;
    transform: rotate(90deg);
  }
  .ratings {
    display: flex;
    width: 60%;
    margin: 0 auto;
    justify-content: space-around;
  }
  .rate {
    width: 85px;
    text-align: center;
  }
  .rate-title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0;
  }
`;
