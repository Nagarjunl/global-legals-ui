import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthLayout from "./Layout/AuthLayout";
import DashboardLayout from "./Layout/DashBoardLayout";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/Forgetpassword";
import NewPassword from "./pages/Auth/Newpassword";
import ProfileDetails from "./pages/ProfileDetails";
import SearchProfile from "./pages/SearchProfile";
import ClientView from "./pages/ClientView";
import ErrorPage from "./pages/ErrorPage";
import ServerImage from "./pages/ServerImage";
import Image404 from "./pages/Image404";
import EnterOtp from "./pages/Auth/EnterOtp";
import CreatePassword from "./pages/Auth/CreatePassword";
import Homepage from "./pages/Homepage";
import MultiStepper from "./components/MultiStepper";
import Appointments from "./pages/Appointments";
import LawyerEnterDetails from "./pages/SignUpForms/LawyerEnterDetails";
import BondBailsman from "./pages/SignUpForms/BondBailsman";
import SecurityDetails from "./pages/SignUpForms/SecurityDetails";
import PrivateInvestigators from "./pages/SignUpForms/PrivateInvestigators";
import Verification from "./pages/SignUpForms/Verification";
import PayPremium from "./pages/SignUpForms/PayPremium";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <AuthLayout>
                <Routes>
                  <Route index element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="newPassword" element={<NewPassword />} />
                  <Route path="forgetPassword" element={<ForgetPassword />} />
                  <Route path="createPassword" element={<CreatePassword />} />
                  <Route path="enterOTP" element={<EnterOtp />} />
                </Routes>
              </AuthLayout>
            }
          />
          <Route path="/home" element={<Homepage />} />
          <Route
            path="dashboard/*"
            element={
              <DashboardLayout>
                <Routes>
                  <Route index element={<MultiStepper />} />
                  <Route
                    path="lawyerDetails"
                    element={<LawyerEnterDetails />}
                  />
                  <Route path="bondBailsman" element={<BondBailsman />} />
                  <Route path="securityDetails" element={<SecurityDetails />} />
                  <Route
                    path="privateInvestigators"
                    element={<PrivateInvestigators />}
                  />
                  <Route path="verification" element={<Verification />} />
                  <Route path="payPremium" element={<PayPremium />} />
                  <Route path="profileDetails" element={<ProfileDetails />} />
                  <Route path="searchProfile" element={<SearchProfile />} />
                  <Route path="appointments" element={<Appointments />} />
                  <Route path="clientView" element={<ClientView />} />
                  <Route path="error" element={<ErrorPage />} />
                  <Route path="404" element={<Image404 />} />
                  <Route path="500" element={<ServerImage />} />
                </Routes>
              </DashboardLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
