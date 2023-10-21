import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import { LoginIcon, OfficeBuildingIcon, UserCircleIcon } from '@heroicons/react/outline';
import React, { useContext, useState } from 'react';

import Avatar from '@sihq/ui-components/lib/esm/Components/Avatar';
import { Context } from '@sihq/ui-components';
import ContextMenu from '../../Components/ContextMenu';
import Logo from '../../Components/Logo';
import Navigation from '../../Components/Navigation/Navigation';
import { NavigationContext } from '../../Contexts/NavigationContext';

const Header = (): JSX.Element => {
    const [active, setActive] = useState(false);
    const setState = (b: boolean): void => {
        document.body.classList.toggle('overflow-hidden');
        document.body.classList.toggle('scrollbar');
        setActive(b);
    };

    const { state, update } = useContext(Context);
    const employers = state.employers ?? {};
    const employer = (state.current_employer as any) ?? {};
    const location = (state.location as any) ?? {};
    const user = (state.user as any) ?? {};

    return (
        <NavigationContext.Provider value={[active, setActive]}>
            <div className="container mx-auto flex flex-col lg:space-y-5 px-5 md:my-5">
                <div className="flex items-center justify-between py-5 md:py-0 relative z-40">
                    <div>
                        <a href="/" className=" h-5 flex  md:transform md:relative ">
                            {employer.internal_logo && ['admin', 'user'].includes(user?.role) ? (
                                <img
                                    src={`${employer.internal_logo.url}`}
                                    alt=""
                                    className="h-8"
                                />
                            ) : (
                                <Logo className={`${active ? 'text-blue-500' : 'text-white'} h-5`} />
                            )}
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        {user?.role === 'developer' ? (
                            <div className="flex items-center relative text-white text-opacity-80 hover:bg-white hover:bg-opacity-10 rounded-full p-2 pl-5 text-xs">
                                <OfficeBuildingIcon className="h-4 w-4 mr-2" />
                                {employer?.name}
                                <select
                                    className="bg-transparent outline-none absolute inset-0 appearance-none text-transparent"
                                    value={`${state.current}`}
                                    onChange={(e): void => update({ ...state, current: e.target.value }, true)}
                                >
                                    <option value="">None</option>
                                    {(Array.isArray(employers) ? employers : []).map((employer: any) => {
                                        const { id, name } = employer;
                                        return <option value={id}>{name}</option>;
                                    })}
                                </select>
                                <span className="h-4 w-4 ml-1 text-white text-opacity-50">
                                    <ChevronDownIcon />
                                </span>
                            </div>
                        ) : null}

                        {/* <a
                                href="/system/users"
                                className="lg:mx-2 text-xs p-2 rounded-full flex flex-col lg:flex-row items-center text-white text-opacity-80 hover:bg-white hover:bg-opacity-10"
                            >
                                <span className="h-6 w-6 xlg:h-4 xlg:w-4 lg:mr-2">
                                    <PresentationChartLineIcon />
                                </span>
                                <span className="hidden lg:flex">Manage</span>
                            </a>

                            <a
                                href="/admin"
                                className="lg:mx-2 text-xs p-2 rounded-full flex flex-col lg:flex-row items-center text-white text-opacity-80 hover:bg-white hover:bg-opacity-10"
                            >
                                <span className="h-6 w-6 xlg:h-4 xlg:w-4 lg:mr-2">
                                    <ArrowCircleLeftIcon />
                                </span>
                                <span className="hidden lg:flex">Back home</span>
                            </a> */}

                        <div className="flex-shrink-0 relative hidden lg:block">
                            <ContextMenu.Context>
                                <ContextMenu.Activator className="flex items-center text-white hover:bg-white p-1 rounded-full hover:bg-opacity-10">
                                    <span className="h-8 w-8 mr-2 overflow-hidden rounded-full">
                                        <Avatar name={`${user?.first_name} ${user?.last_name}`} />
                                    </span>
                                    <span className="text-xs">
                                        {user?.first_name} {user?.last_name}
                                    </span>
                                    <span className="h-4 w-4 ml-1 text-white text-opacity-50">
                                        <ChevronDownIcon />
                                    </span>
                                </ContextMenu.Activator>
                                <ContextMenu.Menu>
                                    <div className="flex flex-col text-xs px-4 py-2 border-b border-gray-300 mb-2 w-64 space-y-1">
                                        <div className="flex items-center">
                                            <span className="font-bold w-16">Employer:</span>
                                            <span className="flex-1 truncate">{employer?.name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="font-bold w-16">Location:</span>
                                            <span className="flex-1 truncate">{location?.name}</span>
                                        </div>
                                    </div>
                                    <ContextMenu.Item
                                        icon={<UserCircleIcon />}
                                        label="Change details"
                                        route="/user/profile"
                                    />
                                    <ContextMenu.Item icon={<LoginIcon />} label="logout" route="/logout" />
                                </ContextMenu.Menu>
                            </ContextMenu.Context>
                        </div>

                        <div className="z-40 flex-shrink-0 lg:hidden">
                            <button
                                type="button"
                                onClick={(): void => setState(!active)}
                                className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-white hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <span className="block h-6 w-6">
                                    {active ? <XIcon className="text-blue-500" /> : <MenuIcon />}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex bg-white bg-opacity-50 h-px w-full"></div>
                <Navigation />
            </div>
        </NavigationContext.Provider>
    );
};

export default Header;
