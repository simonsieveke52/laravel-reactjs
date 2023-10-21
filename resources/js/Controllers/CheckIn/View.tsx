import { Actions, Content, Header, Modal, Overlay } from '@sihq/ui-components';
import { Button, Field } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import { PhoneIncomingIcon } from '@heroicons/react/outline';
import Moment from 'react-moment';
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';

import { ArrowRightIcon } from '@heroicons/react/outline';

const Properties = {
    controller: 'App\\Http\\Controllers\\CheckIn\\View',
};
const CheckInViewController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching, state } = useContext(Context);
    const check = state?.check ?? [];

    const [level, setLevel] = useState('');

    useEffect(() => {
        if (state && state.check) {
            const scoreValue = JSON.parse(check.check_in).reduce((a: string, b: string) => parseInt(a) + parseInt(b));
            if (scoreValue > 9 && scoreValue < 20) {
                setLevel('Low');
            } else if (scoreValue > 19 && scoreValue < 25) {
                setLevel('Moderate');
            } else if (scoreValue > 24 && scoreValue < 30) {
                setLevel('High');
            } else if (scoreValue > 29 && scoreValue < 51) {
                setLevel('Very high');
            }
        }
    }, [state]);

    console.log(check);
    return (
        <Overlay>
            <Modal>
                <Header title="Your Result is:" />
                <Content>
                    <div className=" p-6 ">
                        <div className="w-[80vw] lg:w-[50vw]">
                            <div className="w-full space-y-4 justify-center">
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex text-xl font-bold text-gray-900 text-center">{level}</div>
                                    <div className="flex items-center text-sm text-black/70 dark:text-white/50 space-x-2">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.9375 1.25H12.5V0.5C12.5 0.223875 12.2762 0 12 0C11.7238 0 11.5 0.223875 11.5 0.5V1.25H4.5V0.5C4.5 0.223875 4.27616 0 4 0C3.72384 0 3.5 0.223875 3.5 0.5V1.25H2.0625C0.925219 1.25 0 2.17522 0 3.3125V13.9375C0 15.0748 0.925219 16 2.0625 16H13.9375C15.0748 16 16 15.0748 16 13.9375V3.3125C16 2.17522 15.0748 1.25 13.9375 1.25ZM2.0625 2.25H3.5V2.75C3.5 3.02612 3.72384 3.25 4 3.25C4.27616 3.25 4.5 3.02612 4.5 2.75V2.25H11.5V2.75C11.5 3.02612 11.7238 3.25 12 3.25C12.2762 3.25 12.5 3.02612 12.5 2.75V2.25H13.9375C14.5234 2.25 15 2.72662 15 3.3125V4.5H1V3.3125C1 2.72662 1.47662 2.25 2.0625 2.25ZM13.9375 15H2.0625C1.47662 15 1 14.5234 1 13.9375V5.5H15V13.9375C15 14.5234 14.5234 15 13.9375 15Z"
                                                fill="#2885C5"
                                            />
                                        </svg>

                                        <span className="text-center text-gray-600">
                                            {/* @ts-ignore */}
                                            {<Moment format="DD/MM/YYYY">{check.created_at}</Moment>}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-sm text-left">
                                    Your score falls into the very high range, which means you’ve likely been
                                    experiencing symptoms of distress for a lot of the time over the past four weeks.
                                    It’s important to remember that you are not alone, with 1 in 6 Australians currently
                                    experiencing feelings of anxiety or depression, or both.
                                </div>

                                <div className="text-sm text-left">
                                    Please note this is not an official diagnosis, just an indication of your current
                                    experience with stress and anxiety over the past few weeks.
                                </div>

                                <div className="text-sm text-left">
                                    We recommend you book a session with one of our counselling team to discuss how you
                                    are going in the next week.
                                </div>

                                <div className="w-full px-6 space-y-4 text-sm flex justify-center flex-col">
                                    <div>
                                        If you are in an emergency or at immediate risk of harm to yourself or others,
                                        please contact emergency services on 000.
                                    </div>
                                    <div className="font-semibold">To talk to someone now you can call:</div>
                                    <div className="flex space-x-2 items-center font-semibold">
                                        <PhoneIncomingIcon className="h-6 w-6 text-blue-500" />
                                        <span>Mates in Construction: 1300 642 111</span>
                                    </div>
                                    <div className="flex space-x-2 items-center font-semibold">
                                        <PhoneIncomingIcon className="h-6 w-6 text-blue-500" />
                                        <span>Suicide Callback: 1300 059 467</span>
                                    </div>
                                    <div className="flex space-x-2 items-center font-semibold">
                                        <PhoneIncomingIcon className="h-6 w-6 text-blue-500" />
                                        <span>Lifeline: 13 11 14</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
                <Actions alignment="between">
                    <div>
                        <Button to={-1}>Cancel</Button>
                    </div>
                </Actions>
            </Modal>
        </Overlay>
    );
});

export default CheckInViewController;
