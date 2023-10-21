import { Context, Controller } from '@sihq/ui-components';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';

import Header from '../Blocks/Header/Header';
import Helmet from 'react-helmet';

const Properties = {
    controller: 'App\\Http\\Controllers\\Main',
};

const PortalLayout = Controller(Properties, (): JSX.Element => {
    const { state, mounted } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();

    const employer = state?.employer ?? [];
    const user = state?.user ?? [];

    if (mounted === true && !state?.user) {
        navigate('/login');
    }

    if (!mounted) {
        return (
            <div className="flex items-center justify-center h-full w-full">
                <div>
                    <div
                        className="w-12 h-12 rounded-full animate-spin border-y-4 border-solid border-blue-500 border-t-transparent"
                    ></div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-full flex-col flex-grow bg-gray-100">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Foremind</title>
            </Helmet>
            <div
                className={`pb-24` + (employer?.color != null && ['admin', 'user'].includes(user?.role) ? `` : ` bg bg-blue-500`)}
                style={{ background: employer?.color != null && ['admin', 'user'].includes(user?.role) ? `#${employer?.color}` : `` }}
            >
                <Header />
            </div>
            <div className="flex flex-1">
                <div className="container mx-auto -mt-24 bg-white rounded-xl shadow-sm overflow-hidden min-h-full flex border border-gray-200">
                    <Outlet />
                </div>
            </div>

            <div className="container mx-auto p-5 relative text-xs flex w-full text-gray-400">
                <div className="mr-auto">&copy; 2021 SIHQ</div>
                <div className="space-x-3 flex items-center">
                    <Link
                        to="/support"
                        state={{ from: location }}
                        className="text-gray-400 hover:text-gray-800 hover:underline"
                    >
                        Support
                    </Link>
                    <span className="h-1 w-1 block bg-gray-300 rounded-full"></span>
                    <Link to="/terms-of-service" className="text-gray-400 hover:text-gray-800 hover:underline">
                        Terms of service
                    </Link>
                </div>
            </div>
        </div>
    );
});
export default PortalLayout;
