import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import coffeeLogo from "../assets/images/coffee.svg"
import Logo from "./Logo"

const Sidebar = ({ children }) => {
    // TO-DO: map out links with details instead of hardcoding later
  return (
    <Wrapper>
        <div className="sidebar-container">
            <div className="content">
                <header>
                    <img src={coffeeLogo} className="logo" alt="logo" />
                </header>
                <NavLink to='add-cafe' className="nav-link">
                    <span className="icon">
                        <Logo />
                    </span>
                    Add a Cafe
                </NavLink>
                <NavLink to='all-cafes' className="nav-link">
                    <span className="icon">
                        <Logo />
                    </span>
                    See All Cafes
                </NavLink>
                <NavLink to='profile' className="nav-link">
                    <span className="icon">
                        <Logo />
                    </span>
                    Profile
                </NavLink>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`  
    .sidebar-container {
      min-height: 100vh;
      height: 100%;
      width: 250px;
      background: var(--mainColor2);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: gray;
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
    }
    .nav-link:hover {
      padding-left: 3rem;
    }
    .icon {
      font-size: 1rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .icon img {
        width: 50%;
    }
`

export default Sidebar