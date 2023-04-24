import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiUserHeartLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const { toggleSmallSidebar, user, logoutUser } = useAppContext();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={toggleSmallSidebar}
        >
          <BsReverseLayoutTextSidebarReverse />
        </button>
        <div className="logo-container">
          <Logo className="logo" />
          <p className="logo-text">Dashboard</p>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <RiUserHeartLine />
            {user?.username}
            <IoIosArrowDropdown />
          </button>
          <div className={showDropdown ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => logoutUser()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 0px 1px 0px rgba(188, 188, 188, 0.957);
  background: var(--mainColor1Alt);

  .logo {
    display: flex;
    align-items: center;
    width: 50px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 2.5rem;
    color: var(--mainBlack);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 0 0.7rem;
    cursor: pointer;
    color: var(--mainBlack);
    background-color: var(--mainColor1);
    letter-spacing: 1.5px;
    padding: 0.7rem 1rem;
    text-decoration: none;
    border-radius: 0.25rem;
    border: 2px solid var(--mainColor4);
    box-shadow: 1px 1px 0 var(--mainColor4), 2px 2px 0 var(--mainColor4),
      3px 3px 0 var(--mainColor4);
  }
  .btn:active {
    box-shadow: 0 0 0 0;
  }
  .dropdown {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: var(--mainColor4);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: 0.25rem;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: white;
    letter-spacing: 1.5px;
    cursor: pointer;
  }
  .logo-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .logo-text {
    display: block;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--mainBlack);
  }
  .logo {
    width: 2.1rem;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .toggle-btn {
      display: none;
    }
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
