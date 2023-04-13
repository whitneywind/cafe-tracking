import styled from "styled-components"
import coffeeLogo from "../assets/images/coffee.svg"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <Wrapper>
       <div className="nav-center">
            <button className="toggle-btn">toggle menus</button>
       </div>
       <div>
            <Logo />
            <h3 className="logo-text">Dashboard</h3>
       </div>
       <div className="btn-container">
        <button className="btn">logout icon</button>
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
    width: 100px;
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
    color: var(--mainColor3);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
`