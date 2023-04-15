import { NavLink } from "react-router-dom";
import links from "../assets/linkInfo"

const MenuLinks = () => {
  return (
    <div className="menu-links">
        {links.map(item => {
            const { id, name, path, icon } = item;
            return (
                <NavLink
                    to={path}
                    id={id}
                    className="menu-link"
                >
                    <span>{icon}</span>
                    {name}
                </NavLink>
            )
        })}
    </div>
  )
}
export default MenuLinks