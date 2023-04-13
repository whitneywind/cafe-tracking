import { Outlet, Link } from "react-router-dom"
import Wrapper from "../../assets/wrappers/SharedLayoutWrapper"

const SharedLayout = () => {
  return (
    <Wrapper>
        <h1>shared layout</h1>
        <nav>
            <Link to='all-cafes'>All Cafes</Link>
            <Link to='add-cafe'>Add Cafe</Link>
            <Link to='profile'>Profile</Link>
        </nav>
        <Outlet />
    </Wrapper>
  )
}
export default SharedLayout