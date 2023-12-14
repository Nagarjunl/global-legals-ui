import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgetpassword from "./pages/forgetpassword";
import Newpassword from "./pages/Newpassword";
import EnterOtp from "./pages/EnterOtp";
import CreatePassword from "./pages/CreatePassword";
import ProfileDetails from "./pages/ProfileDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/enterotp" element={<EnterOtp />} />
          <Route path="/forget" element={<Forgetpassword />} />
          <Route path="/create" element={<CreatePassword />} />
          <Route path="/newpass" element={<Newpassword />} />
          <Route path="/profiledetails" element={<ProfileDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
