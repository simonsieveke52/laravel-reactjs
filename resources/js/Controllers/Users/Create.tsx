import { Actions, Content, Header, Modal, Overlay } from '@sihq/ui-components';
import { Button, Field } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';

const Properties = {
    controller: 'App\\Http\\Controllers\\Users\\Create',
};
const UserCreateController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching, state } = useContext(Context);
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };
    const isSihq = state?.employer?.name === 'SIHQ';
    const locations = state.locations ?? [];
    return (
        <Overlay>
            <form {...{ onSubmit }}>
                <Modal>
                    <Header title="Create user" />
                    <Content>
                        <div className=" p-10 ">
                            <div className="w-96 space-y-4">
                                <div className="flex space-x-4">
                                    <div className="w-full md:w-1/2">
                                        <Field type="text" name="user.first_name" label="First name:" />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <Field type="text" name="user.last_name" label="Last name:" />
                                    </div>
                                </div>

                                <div>
                                    <Field type="text" name="user.email" label="Email:" />
                                </div>
                                <div>
                                    <Field type="password" name="user.password" label="Password:" />
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-full md:w-1/2">
                                        <Field type="phone" name="user.phone" label="Phone:" />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <Field type="address" name="user.address" label="Address:" />
                                    </div>
                                </div>
                                <div>
                                    <Field
                                        type="select"
                                        name="user.role"
                                        label="Role:"
                                        options={[
                                            ...[
                                                { value: 'user', text: 'User' },
                                                { value: 'admin', text: 'Admin' },
                                            ],
                                            ...(isSihq ? [{ value: 'developer', text: 'Foremind Administrator' }] : []),
                                        ]}
                                    />
                                </div>
                                <div>
                                    <Field
                                        type="select"
                                        name="location"
                                        label="Location:"
                                        options={locations.map((location: any) => ({
                                            text: location.name,
                                            value: location.id,
                                        }))}
                                    />
                                </div>
                            </div>
                        </div>
                    </Content>
                    <Actions alignment="between">
                        <div>
                            <Button to={-1}>Cancel</Button>
                        </div>
                        <div>
                            <Button variant="primary" type="submit" disabled={dispatching('save')}>
                                {dispatching('save') ? 'creating...' : 'Create'}
                            </Button>
                        </div>
                    </Actions>
                </Modal>
            </form>
        </Overlay>
    );
});

export default UserCreateController;
