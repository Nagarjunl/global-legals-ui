import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AuthLayout from "./Layout/AuthLayout";
import DashboardLayout from "./Layout/DashBoardLayout";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/Forgetpassword";
import NewPassword from "./pages/Auth/Newpassword";
import ProfileDetails from "./pages/Profile/ProfileDetails";
import SearchProfile from "./pages/Profile/SearchProfile";
import ClientView from "./pages/Profile/ClientView";
import NoResultFound from "./pages/Error/NoResultFound";
import Error500 from "./pages/Error/Error500";
import Error404 from "./pages/Error/Error404";
import EnterOtp from "./pages/Auth/EnterOtp";
import CreatePassword from "./pages/Auth/CreatePassword";
import Homepage from "./pages/Homepage";
import MultiStepper from "./components/MultiStepper";
import Appointments from "./pages/Profile/Appointments";
import LawyerEnterDetails from "./pages/SignUpForms/LawyerEnterDetails";
import BondBailsman from "./pages/SignUpForms/BondBailsman";
import SecurityDetails from "./pages/SignUpForms/SecurityDetails";
import PrivateInvestigators from "./pages/SignUpForms/PrivateInvestigators";
import Verification from "./pages/SignUpForms/Verification";
import PayPremium from "./pages/SignUpForms/PayPremium";
import SuperUserLogin from "./pages/SuperUser/Login";
import { useSelector } from "react-redux";
import Table from "./pages/SuperUser/Table";
import Faq from "./pages/faq";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.access_token);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              !isAuthenticated ? (
                <AuthLayout>
                  <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="newPassword" element={<NewPassword />} />
                    <Route path="forgetPassword" element={<ForgetPassword />} />
                    <Route path="createPassword" element={<CreatePassword />} />
                    <Route path="enterOTP" element={<EnterOtp />} />
                  </Routes>
                </AuthLayout>
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />

          <Route path="/table"
            element={
              <DashboardLayout>
                <Table />
              </DashboardLayout>
            }
          />
          <Route path="/superUser" element={<SuperUserLogin />} />

          <Route path="/" element={<Homepage />} />

          <Route
            path="profileDetails/:memberId"
            element={
              <ProfileDetails />
            }
          />

          <Route
            path="searchProfile"
            element={
              <SearchProfile />
            }
          />

          <Route
            path="searchProfile/:searchKeys"
            element={
              <SearchProfile />
            }
          />
          <Route
            path="faq"
            element={
              <Faq />
            }
          />

          <Route
            path="dashboard/*"
            element={
              isAuthenticated ? (
                <DashboardLayout>
                  <Routes>
                    <Route index element={<MultiStepper />} />
                    <Route
                      path="lawyerDetails"
                      element={<LawyerEnterDetails />}
                    />
                    <Route
                      path="lawyerDetails/:memberId"
                      element={<LawyerEnterDetails />}
                    />
                    <Route path="bondBailsman" element={<BondBailsman />} />
                    <Route
                      path="bondBailsman/:memberId"
                      element={<BondBailsman />}
                    />
                    <Route
                      path="securityDetails"
                      element={<SecurityDetails />}
                    />
                    <Route
                      path="securityDetails/:memberId"
                      element={<SecurityDetails />}
                    />
                    <Route
                      path="privateInvestigators"
                      element={<PrivateInvestigators />}
                    />
                    <Route
                      path="privateInvestigators/:memberId"
                      element={<PrivateInvestigators />}
                    />
                    <Route path="verification" element={<Verification />} />
                    <Route path="payPremium" element={<PayPremium />} />
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="clientView" element={<ClientView />} />
                    <Route path="noResultFound" element={<NoResultFound />} />
                    <Route
                      path="profileDetails/:mainId"
                      element={<ProfileDetails hideSchedule={true} />}
                    />
                    <Route path="404" element={<Error404 />} />
                    <Route path="500" element={<Error500 />} />
                    <Route path="*" element={<Error404 />} />
                  </Routes>
                </DashboardLayout>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
