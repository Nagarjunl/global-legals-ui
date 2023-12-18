import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgetpassword from "./pages/Forgetpassword";
import Newpassword from "./pages/Newpassword";
import LandingPageNew from "./pages/LandingPageNew";

// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import NavBar from "./pages/NavBar";
// import HeaderComponent from "./components/Header";

import PayPremium from "./pages/PayPremium";
import Verification from "./pages/Verification";
import ProfessionalDetails from "./pages/ProfessionalDetails";
import Appointments from "./pages/Appointments";
import SearchProfile from "./pages/SearchProfile";
import ClientImage from "./pages/ClientImage";
import ErrorPage from "./pages/ErrorPage";
import ServerImage from "./pages/ServerImage";
import Image404 from "./pages/Image404";
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
          <Route path="/landing" element={<LandingPageNew />} />
          <Route path="/payPremium" element={<PayPremium />} />
          <Route path="/verification" element={<Verification />} />
          <Route
            path="/professionalDetails"
            element={<ProfessionalDetails />}
          />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/profile" element={<SearchProfile />} />
          <Route path="/client" element={<ClientImage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/server" element={<ServerImage />} />
          <Route path="/404" element={<Image404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
