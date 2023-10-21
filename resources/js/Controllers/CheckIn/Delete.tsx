import { Actions, Content, Header, Modal, Overlay } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';

import { Button } from '@sihq/ui-components';

const Properties = {
    controller: 'App\\Http\\Controllers\\CheckIn\\Delete',
};
const CheckInDeleteController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching } = useContext(Context);
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };

    return (
        <Overlay>
            <form {...{ onSubmit }}>
                <Modal>
                    <Header title="Delete location" />
                    <Content>
                        <div className=" p-10 ">
                            <div className="w-96">Are you sure you want to delete?</div>
                        </div>
                    </Content>
                    <Actions alignment="between">
                        <div>
                            <Button to={-1}>Cancel</Button>
                        </div>
                        <div>
                            <Button variant="destructive" type="submit" disabled={dispatching('save')}>
                                {dispatching('save') ? 'deleting...' : 'Delete'}
                            </Button>
                        </div>
                    </Actions>
                </Modal>
            </form>
        </Overlay>
    );
});

export default CheckInDeleteController;
