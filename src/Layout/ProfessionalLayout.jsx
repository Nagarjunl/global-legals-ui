/* eslint-disable react/prop-types */
import Footer from "../components/FooterProfessional";
import Header from "../components/Header";
const ProfessionalLayout = ({ children, hideHeaderAvator }) => {
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

export default ProfessionalLayout;
