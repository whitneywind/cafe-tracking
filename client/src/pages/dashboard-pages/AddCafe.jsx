import Wrapper from "../../assets/wrappers/AddCafeWrapper";
import { useState } from "react";
import Alert from "../../components/Alert";
import { useAppContext } from "../../context/appContext";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const AddCafe = () => {
  const defaultCafeState = {
    cafeName: "",
    city: "",
    details: "",
    coffeeValue: 3,
    vibeValue: 3,
    foodValue: 3,
  };

  const [cafeState, setCafeState] = useState(defaultCafeState);

  // const [hoverCoffee, setHoverCoffee] = useState(-1);
  // const [hoverVibe, setHoverVibe] = useState(-1);
  // const [hoverFood, setHoverFood] = useState(-1);

  // const labels = {
  //   1: "Worthless",
  //   2: "Poor",
  //   3: "Ok",
  //   4: "Good",
  //   5: "Excellent",
  // };

  // const getLabelText = (value) => {
  //   return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  // };

  const { showAlert, addCafe } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    addCafe(cafeState);

    setTimeout(() => {
      setCafeState(defaultCafeState);
    }, 3000);
  };

  // TO-DO: make the Ratings components into reusable FormRow components (map into these components using separate form question data file)

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <div className="form-container">
        <header>
          <h1>Add Cafe</h1>
          {/* <p>Fill out details about the cafe you visited or plan to visit.</p> */}
          <hr />
        </header>
        <form onSubmit={handleSubmit}>
          <div className="main-form">
            <div className="basic-info form-section">
              <div className="form-row">
                <label htmlFor="cafeName">Cafe Name</label>
                <input
                  type="text"
                  name="cafeName"
                  className="form-input"
                  value={cafeState.cafeName}
                  onChange={(e) => {
                    setCafeState({
                      ...cafeState,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-input"
                  value={cafeState.city}
                  onChange={(e) => {
                    setCafeState({
                      ...cafeState,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>

            {/* <div className="form-row visited-row">
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
            </div> */}

            <div className="form-section">
              <div className="form-row">
                <h2>Rate your impression of the cafe</h2>
                <div className="ratings-container">
                  <div className="rating-box">
                    <p>Coffee Quality</p>
                    <Rating
                      name="hover-feedback"
                      value={cafeState.coffeeValue}
                      precision={1}
                      // getLabelText={getLabelText}
                      // onChange={(event, newValue) => {
                      //   setCoffeeValue(newValue);
                      // }}
                      onChange={(e, newValue) => {
                        setCafeState({
                          ...cafeState,
                          coffeeValue: newValue,
                        });
                      }}
                      size="small"
                      // onChangeActive={(event, newHover) => {
                      //   setHoverCoffee(newHover);
                      // }}
                      emptyIcon={<StarIcon fontSize="inherit" />}
                    />
                    {/* {cafeState.coffeeValue !== null && (
                      <p className="rating-desc">
                        {
                          labels[
                            hoverCoffee !== -1
                              ? hoverCoffee
                              : cafeState.coffeeValue
                          ]
                        }
                      </p>
                    )} */}
                  </div>

                  <div className="rating-box">
                    <p>Atmosphere</p>
                    <Rating
                      name="hover-feedback"
                      value={cafeState.vibeValue}
                      precision={1}
                      // getLabelText={getLabelText}
                      onChange={(e, newValue) => {
                        setCafeState({
                          ...cafeState,
                          vibeValue: newValue,
                        });
                      }}
                      size="small"
                      // onChangeActive={(event, newHover) => {
                      //   setHoverVibe(newHover);
                      // }}
                      emptyIcon={<StarIcon fontSize="inherit" />}
                    />
                    {/* {cafeState.vibeValue !== null && (
                      <p className="rating-desc">
                        {
                          labels[
                            hoverVibe !== -1 ? hoverVibe : cafeState.vibeValue
                          ]
                        }
                      </p>
                    )} */}
                  </div>

                  <div className="rating-box">
                    <p>Food/Pastries</p>
                    <Rating
                      name="hover-feedback"
                      value={cafeState.foodValue}
                      precision={1}
                      // getLabelText={getLabelText}
                      onChange={(e, newValue) => {
                        setCafeState({
                          ...cafeState,
                          foodValue: newValue,
                        });
                      }}
                      size="small"
                      // onChangeActive={(event, newHover) => {
                      //   setHoverFood(newHover);
                      // }}
                      emptyIcon={<StarIcon fontSize="inherit" />}
                    />
                    {/* {cafeState.foodValue !== null && (
                      <p className="rating-desc">
                        {
                          labels[
                            hoverFood !== -1 ? hoverFood : cafeState.foodValue
                          ]
                        }
                      </p>
                    )} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="form-section">
              {/* <div className="form-row">
                <label htmlFor="neighborhood">Neighborhood</label>
                <input
                  type="text"
                  name="location"
                  className="form-input"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                />
              </div> */}

              <div className="form-row">
                <label htmlFor="details">Misc Details</label>
                <textarea
                  name="details"
                  className="form-input"
                  value={cafeState.details}
                  onChange={(e) => {
                    setCafeState({
                      ...cafeState,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="btn-container">
            <button type="submit" className="add-btn">
              Submit Cafe
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
export default AddCafe;
