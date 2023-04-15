import Logo from "./Logo"
import styled from "styled-components"
import { useAppContext } from "../context/appContext"
import MenuLinks from "./MenuLinks"
import { CgCloseR } from "react-icons/cg"

const SmallSidebar = () => {
    const { showSidebar, toggleSmallSidebar } = useAppContext();
  return (
    <Wrapper>
        <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
            <div className="content">
                <button 
                    className="close-btn"
                    onClick={toggleSmallSidebar}
                >
                    <CgCloseR />
                </button>
                <header>
                    <Logo />
                </header>
                <MenuLinks />
            </div>
        </div>
    </Wrapper>
  )
}
export default SmallSidebar

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: #fdf7f6;
    width: 90vw;
    height: 95vh;
    border-radius: 0.25rem;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--mainColor4);
    cursor: pointer;
  }
  .menu-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .menu-link {
    display: flex;
    align-items: center;
    color: gray;
    padding: 1rem 0;
    text-transform: capitalize;
    transition: 3s ease-in-out all;
  }
  .menu-link:hover {
    color: gray;
  }
  .menu-link:hover .icon {
    color: var(--mainColor5);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: 3s ease-in-out all;
  }
  .active {
    color: var(--mainColor4);
  }
  .active .icon {
    color: var(--mainColor5);
  }
`