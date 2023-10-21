import { Button, Field } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import { Modal, Overlay } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';

import { PhoneIcon } from '@heroicons/react/outline';

const Properties = {
    controller: 'App\\Http\\Controllers\\Support\\Create',
};
const SupportCreateController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching } = useContext(Context);
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('send');
        e.preventDefault();
    };
    return (
        <Overlay>
            <form {...{ onSubmit }}>
                <Modal>
                    <div className="p-2 flex flex-col md:flex-row w-[90vw]">
                        <div className="w-full md:w-2/5 flex flex-col bg-blue-500 rounded-lg">
                            <div className="p-4">
                                <div className="font-bold text-white text-lg">Emergency assistance</div>
                                <div className="font-light text-white text-xs text-opacity-75 mt-2">
                                    If you are in an emergency or at immediate risk of harm to yourself or others,
                                    please contact emergency services on 000.
                                </div>

                                <div className="font-light text-white text-xs text-opacity-75 mt-3">
                                    If you need to speak with someone now you can react out here:
                                </div>
                                <div className="flex w-full mt-6 space-x-3">
                                    <div className="flex items-center text-sm">
                                        <PhoneIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold w-full text-white text-sm">Mates in Construction: </p>
                                        <p className="w-full text-white text-sm">1300 642 111</p>
                                    </div>
                                </div>
                                <div className="flex w-full mt-4 space-x-3">
                                    <div className="flex items-center text-sm">
                                        <PhoneIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold w-full text-white text-sm">Suicide Callback: </p>
                                        <p className="w-full text-white text-sm">1300 059 467</p>
                                    </div>
                                </div>
                                <div className="flex w-full mt-4 space-x-3">
                                    <div className="flex items-center text-sm">
                                        <PhoneIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold w-full text-white text-sm">Lifeline: </p>
                                        <p className="w-full text-white text-sm">13 11 14</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 flex flex-col py-4 px-6 pr-4">
                            <div className="font-bold text-gray-600 text-lg">Email Foremind support</div>
                            <div className="font-light text-xs text-gray-600 mt-2">
                                Thank you for using Foremind, You can contact Foremind support below, and someone from
                                our support centre will contact you shortly.
                            </div>

                            <div className="flex space-x-4 mt-6">
                                <div className="w-full md:w-1/2">
                                    <Field type="text" name="user.first_name" label="First name:" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <Field type="text" name="user.last_name" label="Last name:" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <Field type="text" name="user.email" label="Email:" />
                            </div>

                            <div className="mt-3">
                                <Field type="textarea" name="message" label="Message:" size="xs" />
                            </div>

                            <div className="flex space-x-4 mt-6">
                                <div className="ml-auto">
                                    <Button to={-1} size="sm">
                                        Cancel
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="primary" type="submit" size="sm" disabled={dispatching('send')}>
                                        {dispatching('send') ? 'sending...' : 'Send'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </form>
        </Overlay>
    );
});

export default SupportCreateController;
