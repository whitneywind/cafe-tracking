import styled from "styled-components"
import { useAppContext } from "../context/appContext"
import Logo from "./Logo"
import { TbLayoutSidebarRightExpand } from "react-icons/tb"
import {IoIosArrowDropdown} from "react-icons/io"
import { RiUserHeartLine } from "react-icons/ri"
import { useState } from "react"

const Navbar = () => {
    const { toggleSmallSidebar, user } = useAppContext();
    const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Wrapper>
       <div className="nav-center">
            <button 
                type="button"
                className="toggle-btn"
                onClick={toggleSmallSidebar}
            >
                <TbLayoutSidebarRightExpand />
            </button>
            <div>
                <Logo className="logo" />
                <h3 className="logo-text">Dashboard</h3>
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
                >
                    logout
                </button>
            </div>
        </div>
    </div>
    </Wrapper>
  )
}
export default Navbar

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: var(--mainColor2);
  
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
    font-size: 1.75rem;
    color: var(--mainColor4);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    cursor: pointer;
    color: var(--mainBlack);
    background-color: var(--mainColor1);
    box-shadow: var(--shadow-1);
    border: transparent;
    letter-spacing: 1px;
    padding: 1rem;
    text-decoration: none;
  }
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--mainColor1Alt);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);;
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
    color: var(--mainBlack);
    letter-spacing: 1px;
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
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
`