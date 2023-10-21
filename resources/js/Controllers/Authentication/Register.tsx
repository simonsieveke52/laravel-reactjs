import { Button, Field } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';

import { Helmet } from 'react-helmet';

const Properties = {
    controller: 'App\\Http\\Controllers\\Authentication\\Register',
    properties: ['locationId'],
};

const RegisterController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching, state } = useContext(Context);
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };

    const { employer } = state ?? {};

    return (
        <form {...{ onSubmit }} method="post" className="flex flex-col max-w-sm w-full relative">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register - Foremind</title>
            </Helmet>
            {employer?.logo ? (
                <div className="pb-5">
                    <img src={employer?.logo?.url} className="w-auto h-8 mb-10" />
                </div>
            ) : null}

            <div className="text-3xl text-blue-600">Register</div>
            <p className="text-xs mb-8 mt-2">
                Your access is never shared with {employer?.name ?? 'your employer'} and counselling sessions remain
                confidential.
            </p>
            <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                    <div className="flex w-full md:w-1/2">
                        <Field type="text" label="First name:" name="user.first_name" />
                    </div>
                    <div className="flex w-full md:w-1/2">
                        <Field type="text" label="Last name:" name="user.last_name" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <Field type="text" label="Email:" name="user.email" />
                </div>
                <div className="flex flex-col">
                    <Field type="password" label="Password:" name="user.password" />
                </div>
                <div className="flex flex-col">
                    <Field type="phone" label="Phone:" name="user.phone" />
                </div>
                <div className="flex flex-col">
                    <Field type="address" label="Address" name="user.address" />
                </div>
                <div className="flex flex-col">
                    <Field type="toggle" label="I accept the terms of service" name="terms_of_service" />
                </div>

                <div className="flex items-center pt-4 space-x-4">
                    <span>
                        <Button variant="primary" type="submit" disabled={dispatching('submit')}>
                            {dispatching('submit') ? 'Registering...' : 'Register'}
                        </Button>
                    </span>
                    <span className="text-gray-500 leading-none pb-0.5">or</span>
                    <span className="font-semibold text-sm flex">
                        <a
                            className="text-sm text-gray-700 hover:text-blue-500"
                            target="_blank"
                            href="https://foremind.net/login"
                        >
                            Sign in
                        </a>
                    </span>
                </div>
            </div>
        </form>
    );
});

export default RegisterController;
