import { Link, Outlet, useLocation } from 'react-router-dom';

import Logo from '../Components/Logo';
import React from 'react';

export default function AuthenticationLayout(): JSX.Element {
    const location = useLocation()
    return (
        <div className="flex-grow flex flex-col md:flex-row relative hero min-h-full bg-blue-500">
            <div className="absolute inset-0 pointer-events-none"></div>

            <div className="rounded-t-xl md:w-2/3 flex-grow lg:w-1/2 md:rounded-r-2xl flex flex-col items-center justify-center bg-white relative p-10 overflow-hidden order-2 md:order-1">
                <div className="background absolute w-1/2 h-1/2 bottom-0 left-0 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{ background: 'radial-gradient(circle at bottom left, rgba(255,255,255,0) 0, #fff)' }}
                    ></div>
                </div>
                <div className="flex-grow w-full flex flex-col items-center justify-center relative">
                    <Outlet />
                </div>
                <div className="pt-10 relative text-xs flex w-full text-gray-400">
                    <div className="mr-auto">&copy; 2021 SIHQ</div>
                    <div className="space-x-3 flex items-center">
                        <Link to="/support" state={{ from: location } } className="text-gray-400 hover:text-gray-800 hover:underline">
                            Support
                        </Link>
                        <span className="h-1 w-1 block bg-gray-300 rounded-full"></span>
                        <Link to="/terms-of-service" className="text-gray-400 hover:text-gray-800 hover:underline">
                            Terms of service
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:w-1/3 lg:w-1/2 flex flex-col relative bg-cover bg-center p-3 md:p-10 order-1 md:order-2">
                <div className="relative flex flex-col w-full flex-grow items-center justify-center">
                    <div className="max-w-xs h-12 p-3.5 sm:h-20 md:h-auto flex" style={{ filter: 'brightness(0) invert(1)' }}>
                        <Logo className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
