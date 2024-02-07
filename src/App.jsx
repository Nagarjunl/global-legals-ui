import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import AuthLayout from "./Layout/AuthLayout";
import ProfessionalLayout from "./Layout/ProfessionalLayout";
import AdminLayout from "./Layout/AdminLayout";

import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/Forgetpassword";
import NewPassword from "./pages/Auth/Newpassword";
import CreatePassword from "./pages/Auth/CreatePassword";

import ProfileDetails from "./pages/Profile/ProfileDetails";
import SearchProfile from "./pages/Profile/SearchProfile";
import ClientView from "./pages/Profile/ClientView";
import NoResultFound from "./pages/Error/NoResultFound";
import Error500 from "./pages/Error/Error500";
import Error404 from "./pages/Error/Error404";
import EnterOtp from "./pages/Auth/EnterOtp";
import MultiStepper from "./components/MultiStepper";

import Appointments from "./pages/Profile/Appointments";
import LawyerEnterDetails from "./pages/SignUpForms/LawyerEnterDetails";
import BondBailsman from "./pages/SignUpForms/BondBailsman";
import SecurityDetails from "./pages/SignUpForms/SecurityDetails";
import PrivateInvestigators from "./pages/SignUpForms/PrivateInvestigators";
import Verification from "./pages/SignUpForms/Verification";
import PayPremium from "./pages/SignUpForms/PayPremium";

import SuperUserLogin from "./pages/SuperUser/Login";
import ProfessionalList from "./pages/SuperUser/ProfessionalList";
import IndProfessional from "./pages/SuperUser/IndProfessional";
import SearchKeyword from "./pages/SuperUser/SearchKeyword";
import NewEnrolls from "./pages/SuperUser/NewEnrolls";
import UnverifiedList from "./pages/SuperUser/UnverifiedList";
import VerifyProfessional from "./pages/SuperUser/VerifyProfessional";

import Homepage from "./pages/Homepage";
import Faq from "./pages/faq";

import "./App.css";
// import TableData from "./pages/SUbscription/TableData";
// import PaymentIntent from "./pages/paymentIntent";
// import SubscribeToPlan from "./pages/Subscription/SubscribeToPlan";

function App() {
  const isAuthenticated = useSelector((state) => state.user);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="auth/*"
            element={
              isAuthenticated?.current_user === null ? (
                <AuthLayout>
                  <Routes>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="newPassword" element={<NewPassword />} />
                    <Route path="forgetPassword" element={<ForgetPassword />} />
                    <Route path="createPassword" element={<CreatePassword />} />
                    <Route path="enterOTP" element={<EnterOtp />} />
                    <Route path="admin" element={<SuperUserLogin />} />
                    <Route path='*' exact={true} element={<Error404 />} />
                  </Routes>
                </AuthLayout>
              ) : (
                isAuthenticated?.current_user?.role === "Founder" ?
                  <Navigate to={"/admin"} />
                  :
                  <Navigate to={"/professional"} />
              )
            }
          />

          <Route
            path="admin/*"
            element={
              isAuthenticated?.current_user?.role === "Founder" ? (
                <AdminLayout>
                  <Routes>
                    <Route index element={<UnverifiedList />} />
                    <Route path="professionalList" element={<ProfessionalList />} />
                    <Route path="indProfessional" element={<IndProfessional />} />
                    <Route path="searchKeywords" element={<SearchKeyword />} />
                    <Route path="newEnrolls" element={<NewEnrolls />} />
                    <Route path="unverifiedList" element={<UnverifiedList />} />
                    <Route path="verifyProfessional/:userId/:type" element={<VerifyProfessional />} />
                    <Route path='*' exact={true} element={<Error404 />} />
                  </Routes>
                </AdminLayout>
              ) : (
                <Navigate to={"/professional"} />
              )
            }
          />

          <Route
            path="professional/*"
            element={
              isAuthenticated?.current_user?.role === "Regular" ? (
                <ProfessionalLayout>
                  <Routes>
                    <Route index element={<MultiStepper />} />
                    <Route path="lawyerDetails" element={<LawyerEnterDetails />} />
                    <Route path="lawyerDetails/:memberId" element={<LawyerEnterDetails />} />
                    <Route path="bondBailsman" element={<BondBailsman />} />
                    <Route path="bondBailsman/:memberId" element={<BondBailsman />} />
                    <Route path="securityDetails" element={<SecurityDetails />} />
                    <Route path="securityDetails/:memberId" element={<SecurityDetails />} />
                    <Route path="privateInvestigators" element={<PrivateInvestigators />} />
                    <Route path="privateInvestigators/:memberId" element={<PrivateInvestigators />} />
                    <Route path="verification" element={<Verification />} />
                    <Route path="payPremium" element={<PayPremium />} />
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="clientView" element={<ClientView />} />
                    <Route path="noResultFound" element={<NoResultFound />} />
                    <Route path="profileDetails/:mainId" element={<ProfileDetails hideSchedule={true} />} />
                    <Route path="404" element={<Error404 />} />
                    <Route path="500" element={<Error500 />} />
                    <Route path="*" element={<Error404 />} />
                  </Routes>
                </ProfessionalLayout>
              ) : (
                <Navigate to={"/"} />
              )
            }
          />

          <Route path="/" element={<Homepage />} />
          <Route path="profileDetails/:memberId" element={<ProfileDetails />} />
          <Route path="searchProfile" element={<SearchProfile />} />
          <Route path="searchProfile/:searchKeys" element={<SearchProfile />} />
          <Route path="faq" element={<Faq />} />
          <Route path="*" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />


          {/* <Route
            path="subscribe"
            element={
              <>
                <TableData />
                <SubscribeToPlan />
              </>
            }
          /> */}

          {/* <Route
            path="paymentIntent"
            element={
              <Elements stripe={stripePromise}>
                <PaymentIntent />
              </Elements>
            }
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
