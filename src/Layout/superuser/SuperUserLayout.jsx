import { useState } from 'react';
import Header from '../../components/theme/Header';
import Sidebar from '../../components/theme/Sidebar';
import { Outlet } from 'react-router-dom';

const SuperUserLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-boxdark-2 text-bodydark">
            <div className="flex h-screen overflow-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-red">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SuperUserLayout;




// import Footer from "../../components/FooterProfessional";
// import Navbar from "../../components/sideBar";
// import SuperUserHeader from "./SuperUserHeader";
// import PropTypes from 'prop-types';


// const SuperUserLayout = ({ children }) => {
//     return (
//         <>
//             <div className="flex flex-col min-h-screen">
//                 < header >
//                     <SuperUserHeader />
//                     {/* <Navbar /> */}
//                 </header>
//                 <main className="flex-grow">{children}</main>
//                 <footer>
//                     <Footer />
//                 </footer>
//             </div >
//         </>
//     );
// };

// export default SuperUserLayout;


// SuperUserLayout.propTypes = {
//     children: PropTypes.node,
// }
