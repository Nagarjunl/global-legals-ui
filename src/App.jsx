import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgetpassword from "./pages/forgetpassword";
import Newpassword from "./pages/Newpassword";
import PersonalInformation from "./pages/PersonalInformation";
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
          <Route
            path="/personalinformation"
            element={<PersonalInformation />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
