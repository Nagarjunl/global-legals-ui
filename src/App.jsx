import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageNew from "./pages/LandingPageNew";

// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import NavBar from "./pages/NavBar";
// import HeaderComponent from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageNew />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Login />} />
          <Route path="/navBar" element={<NavBar />} />
          <Route path="/header" element={<Header />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <HeaderComponent /> */}
    </>
  );
}

export default App;
