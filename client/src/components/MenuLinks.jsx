import { NavLink } from "react-router-dom";
import links from "../assets/linkInfo";

const MenuLinks = ({ toggleSidebar }) => {
  return (
    <div className="menu-links">
      {links.map((item) => {
        const { id, name, path, icon } = item;
        return (
          <NavLink
            to={path}
            id={id}
            key={id}
            className="menu-link"
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};
export default MenuLinks;
