import { Actions, Content, Header, Modal, Overlay } from '@sihq/ui-components';
import { Button, Field } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';

const Properties = {
    controller: 'App\\Http\\Controllers\\Locations\\Edit',
};
const LocationEditController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching } = useContext(Context);
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };

    return (
        <Overlay>
            <form {...{ onSubmit }}>
                <Modal>
                    <Header title="Edit location" />
                    <Content>
                        <div className=" p-10 ">
                            <div className="w-96 space-y-4">
                                <Field type="text" name="location.name" label="Name:" />
                                <Field
                                    type="number"
                                    name="location.maximum_sessions"
                                    label="Maximum sessions: (Per month):"
                                />
                                <Field type="text" name="location.reference" label="Reference:" />
                                <Field type="address" name="location.address" label="Address:" />
                            </div>
                        </div>
                    </Content>
                    <Actions alignment="between">
                        <div>
                            <Button to={-1}>Cancel</Button>
                        </div>
                        <div>
                            <Button variant="primary" type="submit" disabled={dispatching('save')}>
                                {dispatching('save') ? 'saving...' : 'Save changes'}
                            </Button>
                        </div>
                    </Actions>
                </Modal>
            </form>
        </Overlay>
    );
});

export default LocationEditController;
