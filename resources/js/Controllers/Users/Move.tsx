import { Actions, Content, Header, Modal, Overlay } from '@sihq/ui-components';
import { Button, Field } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';

const Properties = {
    controller: 'App\\Http\\Controllers\\Users\\Move',
};
const UserMoveController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching, state } = useContext(Context);

    const [locations, setLocations] = useState([]);
    const [employerID, setEmployerID] = useState<any>({});
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };

    const user = (state.user as any) ?? {};
    const employer = state?.employer ?? {};
    const employers = state?.employers ?? [];
    const employessfefe = state?.employessfefe ?? [];

    console.log(locations);

    useEffect(() => {
        if (state && state.employer) {
            setEmployerID(state.employer.id);
        }
    }, [state.employer]);

    useEffect(() => {
        if (employessfefe && employerID) {
            let newLocations = employessfefe.filter((emp: any) => {
                return emp.id == employerID;
            });

            if (newLocations && newLocations.length > 0) {
                setLocations(newLocations[0].locations);
            }
        }
    }, [employessfefe, employerID]);

    const onChangeEmployerID = (e: any) => {
        setEmployerID(e.target.value);
    };

    return (
        <Overlay>
            <form {...{ onSubmit }}>
                <Modal>
                    <Header title="Move user" />
                    <Content>
                        <div className=" p-10 ">
                            <div className="w-96 space-y-4">
                                <div className="flex flex-col flex-1">
                                    <span className="font-semibold text-gray-600 text-sm leading-loose select-none">
                                        Employers
                                    </span>
                                    <select
                                        className="border-gray-300 border-2 w-full h-9 rounded p-1.5"
                                        name="employer_id"
                                        value={employerID}
                                        onChange={(e) => {
                                            onChangeEmployerID(e);
                                        }}
                                    >
                                        {(employers ?? []).map((employer: any) => {
                                            return <option value={employer.id}>{employer.name}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="flex space-x-4">
                                    <Field
                                        type="select"
                                        name="location_id"
                                        label="Location:"
                                        options={(locations ?? []).map((location: any) => ({
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
                                {dispatching('save') ? 'saving...' : 'Save changes'}
                            </Button>
                        </div>
                    </Actions>
                </Modal>
            </form>
        </Overlay>
    );
});

export default UserMoveController;
