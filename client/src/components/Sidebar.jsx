import styled from "styled-components";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";

const Sidebar = ({ children }) => {
  // TO-DO: map out links with details instead of hardcoding later
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="content">
          <header>
            <Logo />
          </header>
          <MenuLinks />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: none;
  @media (min-width: 992px) {
    display: block;

    .sidebar-container {
      min-height: 100vh;
      height: 100%;
      width: 170px;
      background: var(--mainColor1Alt);
      box-shadow: 0px 0px 1px 0px rgba(188, 188, 188, 0.957);
    }
    .content {
      position: sticky;
      top: 0;
    }
    header {
      height: 6.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .menu-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .menu-links {
      display: flex;
      flex-direction: column;
    }
    .menu-link {
      display: flex;
      color: var(--mainBlack);
      padding: 1.5rem 0;
      transition: 300ms ease-in-out all;
      font-size: 1.2rem;
      text-underline-offset: 3px;
    }
    .menu-link:hover {
      color: #515050;
      padding-left: 8px;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 10px;
      margin-left: 1rem;
      display: grid;
      place-items: center;
      transition: 300ms ease-in-out all;
    }
    .menu-link:hover .icon {
      color: var(--mainColor5);
    }
  }
`;

export default Sidebar;
