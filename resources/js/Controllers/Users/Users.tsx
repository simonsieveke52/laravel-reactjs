import { ArrowRightIcon, KeyIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Context, Controller } from '@sihq/ui-components';
import React, { useContext } from 'react';

import Avatar from '@sihq/ui-components/lib/esm/Components/Avatar';
import { Button } from '@sihq/ui-components';
import { Helmet } from 'react-helmet';
import Moment from 'react-moment';
import { Outlet } from 'react-router-dom';

const Properties = {
    controller: 'App\\Http\\Controllers\\Users\\Index',
};

const UsersController = Controller(Properties, (): JSX.Element => {
    const { state } = useContext(Context);
    const users = state?.users ?? [];
    const employer = state?.employer ?? null;

    return (
        <div className="p-3 pb-0 sm:p-6 sm:pb-0 w-full flex flex-col">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Users - Foremind</title>
            </Helmet>
            <div>
                <div className="flex flex-wrap items-center justify-between mb-5 ">
                    <div className="w-full md:w-auto">
                        <div className="font-bold text-2xl pb-3 sm:pb-0 text-gray-600">Users</div>
                    </div>
                    <div className={`w-full md:w-auto flex ${employer ? '' : 'opacity-25 pointer-events-none'}`}>
                        <Button modal="/users/create" variant="primary" icon={<PencilIcon />}>
                            Create new user
                        </Button>
                    </div>
                </div>
            </div>

            <div className="-mx-6 bg-gray-50 border-gray-200 flex-1 border-t">
                <div className="w-full px-6 py-6 ">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left">
                                <th className="py-2 px-4"></th>
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4">Date Created</th>
                                <th className="py-2 px-4">Location</th>
                                <th className="py-2 px-4 w-1 whitespace-nowrap">Role</th>
                                <th className="py-2 px-4">Status</th>
                                <th className="py-2 px-4"></th>
                            </tr>
                        </thead>
                        {users.map((user: any) => {
                            const { id, first_name, last_name, created_at, location, role } = user;
                            return (
                                <tr key={id}>
                                    <td className="w-1 whitespace-nowrap py-2 px-4 pl-0 border-t border-b border-gray-300">
                                        <span className="w-20 block truncate text-sm">{id}</span>
                                    </td>
                                    <td className="py-2 px-4 border-t border-b border-gray-300">
                                        <div className="flex items-center space-x-2">
                                            <span className="h-5 w-5">
                                                <Avatar name={`${first_name} ${last_name}`} />
                                            </span>
                                            <span className="text-sm">
                                                {first_name} {last_name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300">
                                        <div className="text-sm">
                                            {/* Typescript error. */}
                                            {/* <Moment format="DD/MM/YYYY">{created_at}</Moment> */}
                                        </div>
                                    </td>
                                    <td className="w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300">
                                        <div className="text-sm">{location?.name}</div>
                                    </td>
                                    <td className="w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300">
                                        <div className="text-sm">{role}</div>
                                    </td>

                                    <td className="w-1 whitespace-nowrap py-2 px-4 border-t border-b border-gray-300">
                                        <div className="space-x-2 flex items-center">
                                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                            <span className=" text-sm">Active</span>
                                        </div>
                                    </td>
                                    <td className="w-1 whitespace-nowrap py-2 px-4 pr-0 border-t border-b border-gray-300">
                                        <div className="flex space-x-2">
                                            <Button
                                                modal={`/users/${id}/delete`}
                                                variant="flat-destructive"
                                                size="xs"
                                                icon={<TrashIcon />}
                                            />
                                            <Button
                                                modal={`/users/${id}/edit`}
                                                variant="flat-primary"
                                                size="xs"
                                                icon={<PencilIcon />}
                                            />
                                            <Button
                                                modal={`/users/${id}/move`}
                                                variant="flat-primary"
                                                size="xs"
                                                icon={<ArrowRightIcon />}
                                            >
                                                Move user
                                            </Button>
                                            <Button
                                                modal={`/users/${id}/impersonate`}
                                                variant="flat-primary"
                                                size="xs"
                                                icon={<KeyIcon />}
                                            >
                                                Impersonate
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

export default UsersController;
