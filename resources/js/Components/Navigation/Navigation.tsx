import {
    BookOpenIcon,
    CalendarIcon,
    ChartPieIcon,
    CursorClickIcon,
    HomeIcon,
    LogoutIcon,
    OfficeBuildingIcon,
    UserIcon,
    ClockIcon,
} from '@heroicons/react/outline';
import React, { useContext, useEffect, useState } from 'react';

import { Context } from '@sihq/ui-components';
import { Link } from 'react-router-dom';
import { NavigationContext } from '../../Contexts/NavigationContext';

const Navigation = (): JSX.Element => {
    const [active, setActive] = useContext(NavigationContext);
    const { state } = useContext(Context);
    const user = (state.user as any) ?? {};
    const employer = (state.current_employer as any) ?? {};
    const location = state?.location ?? {};

    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const setState = (): void => {
        const isMobile = width <= 1025;
        if (isMobile) {
            document.body.classList.toggle('overflow-hidden');
            document.body.classList.toggle('scrollbar');
        }
        setActive(false);
    };

    return (
        <>
            <div
                className={`${
                    active ? 'opacity-50  pointer-events-auto' : 'opacity-0 pointer-events-none'
                } lg:opacity-0 fixed inset-0 z-30 transition ease-in-out duration-500 bg-black`}
            ></div>

            <div className="flex">
                <div
                    className={`${
                        active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    } lg:opacity-100 fixed lg:relative flex-1 lg:pointer-events-auto mx-auto container top-2 left-0 right-0 lg:top-0 flex z-30 transition ease-in-out duration-500`}
                >
                    <div className="flex-1 mx-2 bg-white shadow-lg rounded-xl pt-16 lg:mx-0 lg:pt-0 lg:shadow-none lg:bg-transparent lg:flex">
                        <div className="flex flex-1 flex-col lg:flex-row justify-between border-t p-5 lg:p-0 border-gray-200 lg:border-t-0">
                            <nav className="flex flex-row flex-wrap justify-center lg:justify-start items-center flex-1 text-center">
                                <Link
                                    to="/"
                                    onClick={(): void => setState()}
                                    className="text-blue-500 lg:mx-2 w-1/2 lg:w-auto lg:text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-5 lg:py-2 hover:bg-opacity-10 flex flex-col lg:flex-row items-center"
                                >
                                    <span className="h-8 w-8 mb-2 lg:h-4 lg:w-4 lg:mb-0 lg:mr-2">
                                        <HomeIcon />
                                    </span>
                                    Home
                                </Link>
                                <Link
                                    to="/resources"
                                    onClick={(): void => setState()}
                                    className="text-blue-500 lg:mx-2 w-1/2 lg:w-auto lg:text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-5 lg:py-2 hover:bg-opacity-10 flex flex-col lg:flex-row items-center"
                                >
                                    <span className="h-8 w-8 mb-2 lg:h-4 lg:w-4 lg:mb-0 lg:mr-2">
                                        <BookOpenIcon />
                                    </span>
                                    Resources
                                </Link>

                                <Link
                                    to="/check-in"
                                    onClick={(): void => setState()}
                                    className="text-blue-500 lg:mx-2 w-1/2 lg:w-auto lg:text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-5 lg:py-2 hover:bg-opacity-10 flex flex-col lg:flex-row items-center"
                                >
                                    <span className="h-8 w-8 mb-2 lg:h-4 lg:w-4 lg:mb-0 lg:mr-2">
                                        <ClockIcon />
                                    </span>
                                    Check In
                                </Link>

                                <Link
                                    to="/appointments"
                                    onClick={(): void => setState()}
                                    className="text-blue-500 lg:mx-2 w-1/2 lg:w-auto lg:text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-5 lg:py-2 hover:bg-opacity-10 flex flex-col lg:flex-row items-center"
                                >
                                    <span className="h-8 w-8 mb-2 lg:h-4 lg:w-4 lg:mb-0 lg:mr-2">
                                        <CalendarIcon />
                                    </span>
                                    My appointments
                                </Link>
                                {['admin', 'developer'].includes(user?.role) ? (
                                    <span className="bg-white bg-opacity-20 h-1/2 w-px hidden lg:flex mx-2"></span>
                                ) : null}
                                {['admin', 'developer'].includes(user?.role) ? (
                                    <Link
                                        to="/locations"
                                        onClick={(): void => setState()}
                                        className={`${
                                            employer?.id ? '' : 'opacity-25 pointer-events-none'
                                        }  text-blue-500 lg:mx-2 w-1/2 lg:w-auto lg:text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-5 lg:py-2 hover:bg-opacity-10 flex flex-col lg:flex-row items-center`}
                                    >
                                        <span className="h-8 w-8 mb-2 lg:h-4 lg:w-4 lg:mb-0 lg:mr-2">
                                            <OfficeBuildingIcon />
                                        </span>
                                        Locations
                                    </Link>
                                ) : null}
                                {['developer'].includes(user?.role) ? (
                                    <Link
                                        to="/users"
                                        onClick={(): void => setState()}
                                        className={`${
                                            employer?.id ? '' : 'opacity-25 pointer-events-none'
                                        }  text-blue-500 lg:mx-2 w-1/2 lg:w-auto lg:text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-5 lg:py-2 hover:bg-opacity-10 flex flex-col lg:flex-row items-center`}
                                    >
                                        <span className="h-8 w-8 mb-2 lg:h-4 lg:w-4 lg:mb-0 lg:mr-2">
                                            <UserIcon />
                                        </span>
                                        Users
                                    </Link>
                                ) : null}
                                {['developer'].includes(user?.role) ? (
                                    <Link
                                        to="/employers"
                                        onClick={(): void => setState()}
                                        className="text-blue-500 lg:mx-2 w-1/2 lg:w-auto lg:text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-5 lg:py-2 hover:bg-opacity-10 flex flex-col lg:flex-row items-center"
                                    >
                                        <span className="h-8 w-8 mb-2 lg:h-4 lg:w-4 lg:mb-0 lg:mr-2">
                                            <OfficeBuildingIcon />
                                        </span>
                                        Employers
                                    </Link>
                                ) : null}
                                {['admin', 'developer'].includes(user?.role) ? (
                                    <Link
                                        to="/usage"
                                        onClick={(): void => setState()}
                                        className="text-blue-500 lg:mx-2 w-1/2 lg:w-auto lg:text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-5 lg:py-2 hover:bg-opacity-10 flex flex-col lg:flex-row items-center"
                                    >
                                        <span className="h-8 w-8 mb-2 lg:h-4 lg:w-4 lg:mb-0 lg:mr-2">
                                            <ChartPieIcon />
                                        </span>
                                        Usage
                                    </Link>
                                ) : null}
                                {location?.session_limit !== 'None' ? (
                                    <a
                                        href={`https://foremind.sihq.com.au/sso?token=${btoa(
                                            JSON.stringify({
                                                first_name: user?.first_name,
                                                last_name: user?.last_name,
                                                email: user?.email,
                                            }),
                                        )}`}
                                        className="lg:ml-auto lg:mx-2 text-blue-500 w-1/2 lg:w-auto lg:text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-5 lg:py-2 hover:bg-opacity-10 flex flex-col lg:flex-row items-center justify-center"
                                    >
                                        <span className="h-8 w-8 mb-2 lg:h-4 lg:w-4 lg:mb-0 lg:mr-2">
                                            <CursorClickIcon />
                                        </span>
                                        Book a counsellor
                                    </a>
                                ) : null}

                                {/* MOBILE */}
                                <div className="flex w-full border-t border-gray-200 pt-3 mt-5 space-x-2 lg:hidden">
                                    <Link
                                        to="/user/profile"
                                        onClick={(): void => setState()}
                                        className="w-1/2 bg-blue-50 text-blue-500 lg:text-white text-sm font-medium rounded-md px-3 py-2 flex items-center justify-center"
                                    >
                                        <span className="h-4 w-4 mr-2">
                                            <UserIcon />
                                        </span>
                                        My Account
                                    </Link>
                                    <Link
                                        to="/logout"
                                        onClick={(): void => setState()}
                                        className="w-1/2 bg-blue-50 text-blue-500 lg:text-white text-sm font-medium rounded-md px-3 py-2 flex items-center justify-center"
                                    >
                                        <span className="h-4 w-4 mr-2">
                                            <LogoutIcon />
                                        </span>
                                        Logout
                                    </Link>
                                </div>
                            </nav>
                            <nav className=" flex-col lg:flex-row lg:space-x-4 hidden">
                                <div className=" relative text-xs pr-6 overflow-hidden rounded-sm bg-white bg-opacity-5 border cursor-pointer border-white border-opacity-10 p-1 px-2 focus:outline-none  hover:text-white hover:text-opacity-50 shadow-sm text-white flex flex-shrink-0 items-center uppercase">
                                    <span className="w-4 h-4 block mr-2">
                                        <OfficeBuildingIcon />
                                    </span>
                                    Locations overview
                                    <select className="absolute w-full opacity-0 inset-0 appearance-none focus:outline-none"></select>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4/6 text-white top-1/2 transform -translate-y-1/2 right-1 absolute pointer-events-none"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 rounded overflow-hidden"></div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
