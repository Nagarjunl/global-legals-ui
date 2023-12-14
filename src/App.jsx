import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgetpassword from "./pages/Forgetpassword";
import Newpassword from "./pages/Newpassword";
import Appointments from "./pages/Appointments";
import SearchProfile from "./pages/SearchProfile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forgetpassword />} />
          <Route path="/newpass" element={<Newpassword />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/profile" element={<SearchProfile/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
