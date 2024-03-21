import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="py-4 mt-auto border-t border-solid border-t-1 border-gray-300">
        <div className="container mx-auto text-center">
          <p>
            <span className="text-black-800">Need Assistance?</span> If you have
            any questions or need further assistance, feel free to contact our
            support team at {" "}
            <Link
              to="mailto:globallegals2023@gmail.com"
              className="text-blue-500 hover:underline"
            >
              globallegals2023@gmail.com
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
