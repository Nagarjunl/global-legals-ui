import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import NavBar from "./pages/NavBar";
// import HeaderComponent from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
