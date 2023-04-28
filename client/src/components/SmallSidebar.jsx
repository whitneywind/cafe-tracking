import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import MenuLinks from "./MenuLinks";
import { CgCloseR } from "react-icons/cg";

const SmallSidebar = () => {
  const { showSidebar, toggleSmallSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSmallSidebar}>
            <CgCloseR />
          </button>
          <header>
            <p>Menu</p>
          </header>
          <MenuLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;

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
    width: 60vw;
    height: 70vh;
    border-radius: 0.25rem;
    padding: 2rem;
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
    color: #383838;
    cursor: pointer;
  }
  p {
    color: #383838;
    font-size: 3rem;
  }
  .menu-links {
    display: flex;
    flex-direction: column;
  }
  .menu-link {
    display: flex;
    align-items: center;
    color: #4c4b4b;
    padding: 1.5rem 0;
    transition: 500ms ease-in-out all;
    font-size: 1.7rem;
    text-underline-offset: 5px;
  }
  .menu-link:hover {
    color: #929090;
  }
  .menu-link:hover .icon {
    color: var(--mainColor5);
  }
  .icon {
    font-size: 1.8rem;
    margin-right: 0.7rem;
    display: grid;
    place-items: center;
    transition: 500ms ease-in-out all;
  }
`;
