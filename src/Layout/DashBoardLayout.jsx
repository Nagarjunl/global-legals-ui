/* eslint-disable react/prop-types */
// DashboardLayout.js
import Footer from "../components/Footer";
import Header from "../components/Header";
const DashboardLayout = ({ children, hideHeaderAvator }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        < header >
          <Header hideHeaderAvator={hideHeaderAvator} />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div >
    </>
  );
};

export default DashboardLayout;
