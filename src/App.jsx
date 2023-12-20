import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgetpassword from "./pages/Forgetpassword";
import Newpassword from "./pages/Newpassword";
import ProfileDetails from "./pages/ProfileDetails";
import LandingPageNew from "./pages/LandingPageNew";
import PayPremium from "./pages/PayPremium";
import Verification from "./pages/Verification";
import ProfessionalDetails from "./pages/ProfessionalDetails";
import Appointments from "./pages/Appointments";
import SearchProfile from "./pages/SearchProfile";
import ClientImage from "./pages/ClientImage";
import ErrorPage from "./pages/ErrorPage";
import ServerImage from "./pages/ServerImage";
import Image404 from "./pages/Image404";
import EnterOtp from "./pages/EnterOtp";
import CreatePassword from "./pages/CreatePassword";
import PersonalInformation from "./pages/PersonalInformation";
import BusinessInformation from "./pages/BusinessInformation";
import Application from "./pages/Application";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageNew />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/enterOTP" element={<EnterOtp />} />
          <Route path="/profiledetails" element={<ProfileDetails />} />
          <Route path="/forget" element={<Forgetpassword />} />
          <Route path="/create" element={<CreatePassword />} />
          <Route path="/newPassword" element={<Newpassword />} />
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
          <Route
            path="/personalInformation"
            element={<PersonalInformation />}
          />
          <Route
            path="/businessInformation"
            element={<BusinessInformation />}
          />
          <Route path="/application" element={<Application />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
