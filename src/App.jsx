import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgetpassword from "./pages/forgetpassword";
import Newpassword from "./pages/Newpassword";
import PersonalInformation from "./pages/PersonalInformation";
import BusinessInformation from "./pages/BusinessInformation";
import Application from "./pages/Application";
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
          <Route
            path="/businessinformation"
            element={<BusinessInformation />}
          />
          <Route path="/application" element={<Application />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
