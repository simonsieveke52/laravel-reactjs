import { Context, Controller } from '@sihq/ui-components';
import { MailOpenIcon, PencilIcon, QrcodeIcon, TrashIcon, UsersIcon } from '@heroicons/react/outline';
import React, { useContext } from 'react';

import { Button } from '@sihq/ui-components';
import Helmet from 'react-helmet';
import { Outlet } from 'react-router-dom';

const Properties = {
    controller: 'App\\Http\\Controllers\\Locations\\Index',
};

const LocationsController = Controller(Properties, (): JSX.Element => {
    const { state } = useContext(Context);
    const locations = state?.locations ?? [];
    const employer = state?.employer ?? null;

    return (
        <div className="p-3 pb-0 sm:p-6 sm:pb-0 w-full flex flex-col">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Locations - Foremind</title>
            </Helmet>
            <div>
                <div className="flex flex-wrap items-center justify-between mb-5 ">
                    <div className="w-full md:w-auto flex items-center">
                        <div className="font-bold text-2xl pb-3 sm:pb-0 text-gray-600">Locations</div>
                    </div>
                    <div
                        className={`w-full md:w-auto flex items-center space-x-2 ${
                            employer ? '' : 'opacity-25 pointer-events-none'
                        }`}
                    >
                        <span className="flex items-center space-x-2 mr-6">
                            <span className="text-xs">MAXIMUM SESSIONS PER MONTH</span>
                            <span className=" border bg-purple-50 border-purple-400 text-purple-700 rounded font-extrabold text-xs px-4 py-0.5">
                                {employer?.maximum_sessions === -1
                                    ? 'Unlimited'
                                    : employer?.maximum_sessions === 0
                                    ? 'None'
                                    : employer?.maximum_sessions}
                            </span>
                        </span>
                        <Button modal="/users/management" variant="primary" icon={<UsersIcon />}>
                            User Management
                        </Button>
                        <Button modal="/locations/create" variant="primary" icon={<PencilIcon />}>
                            Create new location
                        </Button>
                    </div>
                </div>
            </div>

            <div className="-mx-6 bg-gray-50 border-gray-200 flex-1 border-t">
                <div className="w-full px-6 py-6 ">
                    <table className="w-full">
                        <thead className="hidden md:table-header-group">
                            <tr className="text-left">
                                <th className="py-2 px-4">ID</th>
                                <th className="py-2 px-4 w-1 whitespace-nowrap">Ref</th>
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4 w-1 whitespace-nowrap">Users</th>
                                <th className="py-2 px-4 w-1 whitespace-nowrap">Sessions</th>
                                <th className="py-2 px-4 w-1 whitespace-nowrap"></th>
                                <th className="py-2 px-4">Status</th>
                                <th className="py-2 px-4"></th>
                            </tr>
                        </thead>
                        {locations.map((location: any) => {
                            const { id, reference, address, name, users, session_limit } = location;
                            return (
                                <tr
                                    key={id}
                                    className="flex flex-col w-full md:table-row bg-gray-100 shadow border border-gray-300 rounded-lg  mb-5 mt-5 md:bg-transparent md:shadow-none md:border-none"
                                >
                                    <td className="md:w-1 whitespace-nowrap py-2 px-4 md:pl-0 border-t border-b border-gray-300 flex md:table-cell items-center">
                                        <div className="font-bold w-20 md:hidden">Id:</div>
                                        <span className="w-20 block truncate text-sm">{id}</span>
                                    </td>
                                    <td className="md:w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300 flex md:table-cell items-center">
                                        <div className="font-bold w-20 md:hidden">Ref:</div>
                                        <div className="flex items-center justify-start space-x-2 text-sm">
                                            {reference}
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 border-t border-b border-gray-300 flex md:table-cell items-center">
                                        <div className="font-bold w-20 md:hidden">Name:</div>
                                        <div className="flex items-center justify-start space-x-2 text-sm">{name}</div>
                                        <div className="flex items-center justify-start text-xs text-gray-400">
                                            {address ? address[0] : null}
                                        </div>
                                    </td>

                                    <td className="md:w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300 flex md:table-cell items-center">
                                        <div className="font-bold w-20 md:hidden">Users:</div>
                                        <div className="text-sm">{users}</div>
                                    </td>

                                    <td className="md:w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300 flex md:table-cell items-center">
                                        <div className="font-bold w-20 md:hidden">Sessions:</div>
                                        <span className="flex space-x-4">
                                            <span className="flex items-center space-x-2">
                                                <span className="text-xs">MAX</span>
                                                <span className=" border bg-blue-50 border-blue-400 text-blue-700 rounded font-extrabold text-xs px-4 py-0.5">
                                                    {session_limit}
                                                </span>
                                            </span>
                                        </span>
                                    </td>
                                    <td className="md:w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300 flex md:table-cell items-center">
                                        <div className="font-bold w-20 md:hidden">Sessions:</div>
                                        <span className="flex space-x-4">
                                            <span className="flex items-center space-x-2">
                                                <span className="text-xs">USED</span>
                                                <span className=" border bg-green-50 border-green-400 text-green-700 rounded font-extrabold text-xs px-4 py-0.5">
                                                    -
                                                </span>
                                            </span>
                                        </span>
                                    </td>

                                    <td className="md:w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300 flex md:table-cell  items-center">
                                        <div className="font-bold w-20 md:hidden">Status:</div>
                                        <div className="space-x-2 flex items-center">
                                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                            <span className=" text-sm">Active</span>
                                        </div>
                                    </td>
                                    <td className="md:w-1 whitespace-nowrap py-2 px-4 md:pr-0 border-t border-b border-gray-300">
                                        <div className="flex space-x-2">
                                            <Button
                                                modal={`/locations/${id}/send`}
                                                variant="flat-primary"
                                                size="xs"
                                                icon={<MailOpenIcon />}
                                            >
                                                Send
                                            </Button>
                                            <Button
                                                modal={`/locations/${id}/share`}
                                                variant="flat-primary"
                                                size="xs"
                                                icon={<QrcodeIcon />}
                                            >
                                                Share
                                            </Button>
                                            <Button
                                                modal={`/locations/${id}/delete`}
                                                variant="flat-destructive"
                                                size="xs"
                                                icon={<TrashIcon />}
                                            />
                                            <Button
                                                modal={`/locations/${id}/edit`}
                                                variant="flat-primary"
                                                size="xs"
                                                icon={<PencilIcon />}
                                            >
                                                Edit
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                    <Outlet />
                </div>
            </div>
        </div>
    );
});

export default LocationsController;
