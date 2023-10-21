import { Button, Context, Controller, Field } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';

import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const Properties = {
    controller: 'App\\Http\\Controllers\\Authentication\\Forgot',
};

const ForgotController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching, state } = useContext(Context);
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };
    const complete = state?.complete ?? false;

    if (complete) {
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
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                </div>
                <div className="text-center max-w-sm">
                    <div className="font-semibold text-blue-500">Check you email!</div>
                    <div className="text-gray-500 text-sm mt-2">We have sent you an email to reset your account.</div>
                    <div className="text-xs text-gray-500">
                        If you do not receive the email at <span className="font-mono">{state?.email}</span> please feel
                        free to contact support <Link to="/support" className='text-gray-700 hover:text-blue-500 underline'>here</Link>
                    </div>
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
                <title>Forgot - Foremind</title>
            </Helmet>
            <div className="text-3xl text-blue-600 mb-8">Reset password</div>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <Field type="text" label="Email" name="email" />
                </div>
                <div className="flex items-center pt-4 space-x-4">
                    <span>
                        <Button variant="primary" type="submit" disabled={dispatching('submit')}>
                            {dispatching('save') ? 'checking...' : 'Reset'}
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

export default ForgotController;
