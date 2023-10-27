import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/common/Sidebar";
import { useLocation } from "react-router-dom";
import Owners from "./pages/Owners";
import Shops from "./pages/Shops";
import Staffs from "./pages/Staffs";

function App() {
  const location = useLocation();
  return (
    <Box className="App" sx={{ display: "flex" }}>
      {location.pathname === "/login" ? <></> : <Sidebar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<LoggedInRoutes />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/staffs" element={<Staffs />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
