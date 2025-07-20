import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UploadNews from "./pages/UploadNews";
import AllNews from "./pages/AllNews";
import Users from "./pages/Users";
import ExplorePage from "./pages/ExplorePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadOrders from "./pages/UploadOrders";

// Inside your <Routes> block:


// No require('cors') or app.use() here!

const navLinkStyle = {
  color: "#2C2E34",
  textDecoration: "none",
  padding: "0 10px",
  borderRadius: 6,
};

function Navbar() {
  return (
    <nav
      style={{
        padding: "18px 40px",
        background: "#fff",
        boxShadow: "0 2px 16px #0002",
        display: "flex",
        gap: 40,
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 0,
      }}
    >
      <Link to="/dashboard" style={navLinkStyle}>Dashboard</Link>
      <Link to="/upload-news" style={navLinkStyle}>Upload News</Link>
      <Link to="/all-news" style={navLinkStyle}>All News</Link>
      <Link to="/users" style={navLinkStyle}>Users</Link>
      <Link to="/explore" style={navLinkStyle}>Explore</Link>
      <Link to="/orders-upload">Upload Orders</Link>
      <Link to="/admin/upload-orders">Upload Orders</Link>
    </nav>
  );
}

function AppWithNavbar() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/"; // Hide navbar on Login page

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload-news" element={<UploadNews />} />
        <Route path="/all-news" element={<AllNews />} />
        <Route path="/users" element={<Users />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/admin/upload-orders" element={<UploadOrders />} />      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWithNavbar />
    </Router>
  );
}
