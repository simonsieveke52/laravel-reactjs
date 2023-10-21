import { Button, Context, Controller, Field } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';

import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const Properties = {
    controller: 'App\\Http\\Controllers\\Authentication\\Recover',
    properties: ['token'],
};

const RecoverController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching, state } = useContext(Context);
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };
    const valid = state?.valid ?? null;

    if (valid === null) {
        return (
            <div className="flex flex-col items-center justify-center relative  space-y-8">
                Loading...
            </div>
        );
    }

    if (valid === false) {
        return (
            <div className="flex flex-col items-center justify-center relative  space-y-8">
                <div className="rounded-full border-8 border-gray-200 text-blue-500 p-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-20 w-20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>
                <div className="text-center max-w-sm">
                    <div className="font-semibold text-blue-500">Invaild link</div>
                    <div className="text-gray-500 text-sm mt-2">This password reset link is no longer valid.</div>
                    <div className="font-semibold pt-8 text-gray-700">
                        <Link to="/login" className='hover:text-blue-500 hover:underline'>Back to login</Link>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <form {...{ onSubmit }} method="post" className="flex flex-col max-w-sm w-full relative">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Password reset - Foremind</title>
            </Helmet>
            <div className="text-3xl text-blue-600 mb-8">Reset password</div>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <Field type="password" label="Password:" name="password" />
                </div>
                <div className="flex flex-col">
                    <Field type="password" label="Password (Confirm):" name="password_confirmation" />
                </div>
                <div className="flex items-center pt-4 space-x-4">
                    <span>
                        <Button variant="primary" type="submit" disabled={dispatching('submit')}>
                            {dispatching('save') ? 'changing...' : 'Change password'}
                        </Button>
                    </span>
                    <span className="text-gray-500">or</span>
                    <span className="font-semibold text-sm text-gray-700">
                        <Link to="/login" className="hover:text-blue-500 hover:underline">
                            back to login
                        </Link>
                    </span>
                </div>
            </div>
        </form>
    );
});

export default RecoverController;
