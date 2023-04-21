import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ErrorPage from "./pages/Error";
import Register from "./pages/Register";
import AddCafe from "./pages/dashboard-pages/AddCafe";
import AllCafes from "./pages/dashboard-pages/AllCafes";
import Profile from "./pages/dashboard-pages/Profile";
import SharedLayout from "./pages/dashboard-pages/SharedLayout";
import ProtectedRoute from "./pages/dashboard-pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllCafes />} />
          <Route path="add-cafe" element={<AddCafe />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
