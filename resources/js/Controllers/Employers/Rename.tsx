import { Actions, Content, Header, Modal, Overlay } from '@sihq/ui-components';
import { Button, Field } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';

const Properties = {
    controller: 'App\\Http\\Controllers\\Employers\\Rename',
};
const EmployerRenameController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching } = useContext(Context);
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };

    return (
        <Overlay>
            <form {...{ onSubmit }}>
                <Modal>
                    <Header title="Rename employer" />
                    <Content>
                        <div className=" p-10 ">
                            <div className="w-96 space-y-4">
                                <Field type="text" name="employer.name" label="Name:" />
                                <Field type="image" name="employer.logo" label="Logo:" />
                                <Field type="image" name="employer.internal_logo" label="Internal Logo:" />
                                <Field type="text" name="employer.color" label="Color (HEX):" />
                                <Field
                                    type="number"
                                    name="employer.maximum_sessions"
                                    label="Maximum sessions: (Per month):"
                                />
                                <Field type="number" name="employer.used_sessions" label="Used Sessions:" />
                            </div>
                        </div>
                    </Content>
                    <Actions alignment="between">
                        <div>
                            <Button to={-1}>Cancel</Button>
                        </div>
                        <div>
                            <Button variant="primary" type="submit" disabled={dispatching('save')}>
                                {dispatching('save') ? 'renaming...' : 'Rename'}
                            </Button>
                        </div>
                    </Actions>
                </Modal>
            </form>
        </Overlay>
    );
});

export default EmployerRenameController;
