/* eslint-disable react/prop-types */

import { useState } from 'react';
import AdminHeader from '../components/theme/AdminHeader';
import AdminSidebar from '../components/theme/AdminSidebar';

const AdminLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-boxdark-2 text-bodydark">
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-red">
                            {/* <Outlet /> */}
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
