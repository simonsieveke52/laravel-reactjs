import { Context, Controller } from '@sihq/ui-components';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import React, { SyntheticEvent, useContext } from 'react';

import { Button } from '@sihq/ui-components';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

const Properties = {
    controller: 'App\\Http\\Controllers\\Employers\\Index',
};

const EmployersController = Controller(Properties, (): JSX.Element => {
    const { state } = useContext(Context);
    const employers = state?.employers ?? [];

    return (
        <div className="p-3 pb-0 sm:p-6 sm:pb-0 w-full flex flex-col">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Employers - Foremind</title>
            </Helmet>
            <div>
                <div className="flex flex-wrap items-center justify-between mb-5 ">
                    <div className="w-full md:w-auto">
                        <div className="font-bold text-2xl pb-3 sm:pb-0 text-gray-600">Employers</div>
                    </div>
                    <div className="w-full md:w-auto">
                        <Button modal="/employers/create" variant="primary" icon={<PencilIcon />}>
                            Create new employer
                        </Button>
                    </div>
                </div>
            </div>

            <div className="-mx-6 bg-gray-50 border-gray-200 flex-1 border-t">
                <div className="w-full px-6 py-6 ">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left">
                                <th className="py-2 px-4">ID</th>
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4 w-1 whitespace-nowrap">Locations</th>
                                <th className="py-2 px-4 w-1 whitespace-nowrap">Users</th>
                                <th className="py-2 px-4 w-1 whitespace-nowrap">Sessions</th>
                                <th className="py-2 px-4 w-1 whitespace-nowrap"></th>
                                <th className="py-2 px-4">Status</th>
                                <th className="py-2 px-4"></th>
                            </tr>
                        </thead>
                        {employers.map((employer: any) => {
                            const { id, name, logo, maximum_sessions, used_sessions, users, locations } = employer;
                            return (
                                <tr key={id}>
                                    <td className="w-1 whitespace-nowrap py-2 px-4 pl-0 border-t border-b border-gray-300">
                                        <span className="w-20 block truncate text-sm">{id}</span>
                                    </td>
                                    <td className="py-2 px-4 border-t border-b border-gray-300">
                                        <div className="flex items-center space-x-2">
                                            <span className="h-5 w-5 flex items-center justify-center rounded overflow-hidden bg-gray-300">
                                                {logo ? (
                                                    <img src={`${logo.url}`} alt="" className=" rounded object-fit" />
                                                ) : null}
                                            </span>
                                            <span className="text-sm">{name}</span>
                                        </div>
                                    </td>

                                    <td className="w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300">
                                        <div className="text-xs">{locations}</div>
                                    </td>
                                    <td className="w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300">
                                        <div className="text-xs">{users}</div>
                                    </td>

                                    <td className="w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300">
                                        <span className="flex space-x-4">
                                            <span className="flex items-center space-x-2">
                                                <span className="text-xs">MAX</span>
                                                <span className="border bg-blue-50 border-blue-400 text-blue-700 rounded font-extrabold text-xs px-4 py-0.5">
                                                    {maximum_sessions === -1
                                                        ? 'Unlimited'
                                                        : maximum_sessions === 0
                                                        ? 'None'
                                                        : maximum_sessions}
                                                </span>
                                            </span>
                                        </span>
                                    </td>
                                    <td className="w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300">
                                        <span className="flex space-x-4">
                                            <span className="flex items-center space-x-2">
                                                <span className="text-xs">USED</span>
                                                <span className=" border bg-green-50 border-green-400 text-green-700 rounded font-extrabold text-xs px-4 py-0.5">
                                                    {used_sessions === -1
                                                        ? 'Unlimited'
                                                        : used_sessions === 0
                                                        ? 'None'
                                                        : used_sessions}
                                                </span>
                                            </span>
                                        </span>
                                    </td>

                                    <td className="w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300">
                                        <div className="space-x-2 flex items-center">
                                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                            <span className=" text-xs">Active</span>
                                        </div>
                                    </td>
                                    <td className="w-1 whitespace-nowrap py-2 px-4 pr-0 border-t border-b border-gray-300">
                                        <div className="flex space-x-2">
                                            <Button
                                                modal={`/employers/${id}/delete`}
                                                variant="flat-destructive"
                                                size="xs"
                                                icon={<TrashIcon />}
                                            />
                                            <Button
                                                modal={`/employers/${id}/rename`}
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

export default EmployersController;
