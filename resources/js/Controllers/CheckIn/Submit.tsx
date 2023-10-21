import { Actions, Content, Header, Modal, Overlay } from '@sihq/ui-components';
import { Button, Field } from '@sihq/ui-components';
import { PhoneIncomingIcon } from '@heroicons/react/outline';
import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';

const Properties = {
    controller: 'App\\Http\\Controllers\\CheckIn\\Submit',
};
const CheckInSubmitController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching } = useContext(Context);
    const { state } = useContext(Context);
    const auth_user = (state.user as any) ?? {};
    const score = (state.score as any) ?? [];

    const [level, setLevel] = useState('');

    useEffect(() => {
        if (state && state.score) {
            const scoreValue = score.reduce((a: string, b: string) => parseInt(a) + parseInt(b));
            if (scoreValue > 9 && scoreValue < 20) {
                setLevel("Low");
            } else if(scoreValue > 19 && scoreValue < 25) {
                setLevel("Moderate");
            } else if(scoreValue > 24 && scoreValue < 30) {
                setLevel("High");
            } else if(scoreValue > 29 && scoreValue < 51) {
                setLevel("Very high");
            }
        }
    }, [state]);

    console.log(
        score.reduce(function(acc: string, val: string) { return parseInt(acc) + parseInt(val); }, 0)
    )

    return (
        <Overlay>
            <Modal>
                <Header title="Your Result is:" />
                <Content>
                    <div className="p-6">
                        <div className="w-[80vw] lg:w-[30vw]">
                            <div className="w-full space-y-4 justify-center">
                                <div className="text-xl font-bold text-center">{level}</div>
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

                                <div className="flex text-center m-auto w-52">
                                    <Button
                                        to="/check-in/submit"
                                        className="m-auto"
                                        variant="primary"
                                        onClick={(): void =>
                                            window.location.assign(
                                                `https://foremind.sihq.com.au/sso?token=${btoa(
                                                    JSON.stringify({
                                                        first_name: auth_user?.first_name,
                                                        last_name: auth_user?.last_name,
                                                        email: auth_user?.email,
                                                    }),
                                                )}`,
                                            )
                                        }
                                    >
                                        Book a Chat
                                    </Button>
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

export default CheckInSubmitController;
