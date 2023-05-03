import coffeeLogo from "../assets/images/coffee.svg";
import barista from "../assets/images/barista.svg";
import Wrapper from "../assets/wrappers/LandingWrapper";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <div className="containing">
        <nav>
          <Link to="/dashboard">
            <img src={coffeeLogo} className="logo" alt="logo" />
          </Link>
        </nav>
        <div className="container page">
          <div className="info">
            <h2>
              organization for <span>coffeeshop enthusiasts</span>
            </h2>
            <p>
              Coffeeshop tracking app is designed to help cafe hoppers better
              keep track of their coffeeshop experiences. Users can create
              secure, individual profiles to log their thoughts and impressions,
              as well as make plans for spots they plan to visit.{" "}
            </p>
            <Link to="/register" alt="to register" className="btn btn-hero">
              login/register
            </Link>
          </div>
          <img src={barista} alt="coffeeshop" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;

// <a href="https://iconscout.com/icons/coffee" target="_blank">Coffee Emoji Icon</a> by <a href="https://iconscout.com/contributors/twitter-inc" target="_blank">Twitter Emoji</a>
