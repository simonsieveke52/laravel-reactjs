import { Actions, Content, Header, Modal, Overlay } from '@sihq/ui-components';
import { CSVDownload, CSVLink } from 'react-csv';
import { Context, Controller } from '@sihq/ui-components';
import { DownloadIcon, UploadIcon } from '@heroicons/react/outline';
import React, { SyntheticEvent, useContext, useRef } from 'react';

import { Button } from '@sihq/ui-components';

const Properties = {
    controller: 'App\\Http\\Controllers\\Users\\Management',
};
const UserCreateController = Controller(Properties, (): JSX.Element => {
    const inputEl = useRef<HTMLInputElement>(null);

    const { dispatch, dispatching, state } = useContext(Context);
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('upload');
        e.preventDefault();
    };

    const handleFileUpload = (event: any) => {
        console.log(event.target.files[0].name);
    };

    const headers = [
        { label: 'First Name', key: 'firstname' },
        { label: 'Last Name', key: 'lastname' },
        { label: 'Eamil', key: 'email' },
        { label: 'Phone', key: 'phone' },
        { label: 'New Location', key: 'location' },
    ];

    const data = [{}];

    const handleUpload = (e: any) => {
        if (inputEl && inputEl.current) {
            inputEl.current.click();
        }
    };

    return (
        <Overlay>
            <form {...{ onSubmit }} method="post">
                <Modal>
                    <Header title="User Management" />
                    <Content>
                        <div className=" p-10 ">
                            <div className="w-96 flex items-center justify-center justify-between">
                                <div>
                                    <CSVLink
                                        headers={headers}
                                        data={data}
                                        filename={'new_location_template.csv'}
                                        className="rounded w-full bg-blue-500 text-white p-3 text-xs"
                                        target="_blank"
                                    >
                                        Download CSV
                                    </CSVLink>
                                </div>
                                {/* we need to add File Fiend Here */}
                                <div>
                                    <input
                                        ref={inputEl}
                                        onChange={(e) => handleFileUpload(e)}
                                        type="file"
                                        name="file"
                                        style={{ display: 'none' }}
                                    />
                                    <button
                                        type="button"
                                        className="rounded w-full bg-blue-500 text-white p-3 text-xs"
                                        onClick={(e) => handleUpload(e)}
                                    >
                                        Choose File.....
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Content>
                    <Actions alignment="between">
                        <div>
                            <Button to={-1}>Cancel</Button>
                        </div>
                        <div>
                            <Button variant="primary" type="submit" disabled={dispatching('upload')}>
                                {dispatching('upload') ? 'uploading...' : 'Upload'}
                            </Button>
                        </div>
                    </Actions>
                </Modal>
            </form>
        </Overlay>
    );
});

export default UserCreateController;
