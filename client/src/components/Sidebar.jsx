import styled from "styled-components"
import coffeeLogo from "../assets/images/coffee.svg"
import MenuLinks from "./MenuLinks"

const Sidebar = ({ children }) => {
    // TO-DO: map out links with details instead of hardcoding later
  return (
    <Wrapper>
        <div className="sidebar-container">
            <div className="content">
                <header>
                    <img src={coffeeLogo} className="logo" alt="logo" />
                </header>
                <MenuLinks />
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: none;  
    @media (min-width: 992px) {
        display: block;

        .sidebar-container {
        min-height: 100vh;
        height: 100%;
        width: 250px;
        background: var(--mainColor2);
        box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
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
    }
`

export default Sidebar