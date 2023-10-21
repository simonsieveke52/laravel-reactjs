import { Actions, Content, Header, Modal, Overlay } from '@sihq/ui-components';
import { Button, Field } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';

import { useParams } from 'react-router-dom';

const Properties = {
    controller: 'App\\Http\\Controllers\\Locations\\Send',
};
const LocationSendController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching } = useContext(Context);
    const { locationId } = useParams();
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };

    return (
        <Overlay>
            <form {...{ onSubmit }}>
                <Modal>
                    <Header title="Send Invitation" />
                    <Content>
                        <div className=" p-10 ">
                            <div className="w-96 space-y-8">
                                <p className="text-xs">
                                    You can send an invitation to someone to register for this location by entering
                                    thier email below.
                                </p>
                                <Field type="text" name="email" label="Email:" />
                            </div>
                        </div>
                    </Content>
                    <Actions alignment="between">
                        <div>
                            <Button to={-1}>Cancel</Button>
                        </div>
                        <div>
                            <Button variant="primary" type="submit" disabled={dispatching('save')}>
                                {dispatching('save') ? 'sending...' : 'Send'}
                            </Button>
                        </div>
                    </Actions>
                </Modal>
            </form>
        </Overlay>
    );
});

export default LocationSendController;
