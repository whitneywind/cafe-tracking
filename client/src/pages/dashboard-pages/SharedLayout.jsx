import { Outlet, Link } from "react-router-dom"
import Wrapper from "../../assets/wrappers/SharedLayoutWrapper"
import Sidebar from "../../components/Sidebar"
import SmallSidebar from "../../components/SmallSidebar"
import Navbar from "../../components/Navbar"

const SharedLayout = () => {
  return (
    <Wrapper>
        <main className="dashboard">
            <SmallSidebar />
            <Sidebar />
            <div>
                <Navbar />
                <div className="dashboard-page">
                    <Outlet />
                </div>
            </div>
        </main>
    </Wrapper>
  )
}
export default SharedLayout