import { Button, Field } from '@sihq/ui-components';
import { ChevronLeftIcon, SaveIcon, TrashIcon } from '@heroicons/react/outline';
import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';

import _ from 'lodash';
import { useParams } from 'react-router-dom';

const Properties = {
    controller: 'App\\Http\\Controllers\\Resources\\Create',
};
const ContentCreateController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching, state } = useContext(Context);
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };
    const { resourceId } = useParams();
    const positions = state?.positions ?? [];
    return (
        <form {...{ onSubmit }} className="p-3 sm:p-6 w-full flex flex-col">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <Button icon={<ChevronLeftIcon />} to={-1}>
                        Back
                    </Button>
                </div>

                <div className="flex space-x-4">
                    {state?.content?.id ? (
                        <Button modal={`/resources/${resourceId}/delete`} icon={<TrashIcon />} />
                    ) : null}

                    <Button variant="primary" type="submit" disabled={dispatching('save')} icon={<SaveIcon />}>
                        {dispatching('save') ? 'saving...' : 'Save'}
                    </Button>
                </div>
            </div>
            <div className="flex space-x-4 mb-5">
                <div className="w-1/2 space-y-4">
                    <Field type="text" name="content.title" label="Title:" />

                    <div className="flex space-x-4">
                        <div className="w-1/3">
                            <Field
                                type="select"
                                name="content.category"
                                label="Category:"
                                options={[
                                    { value: 'Stress', text: 'Stress' },
                                    { value: 'Fitness', text: 'Fitness' },
                                    { value: 'Anxiety', text: 'Anxiety' },
                                    { value: 'Sleep', text: 'Sleep' },
                                    { value: 'Reflection', text: 'Reflection' },
                                    { value: 'Other', text: 'Other' },
                                ]}
                            />
                        </div>
                        <div className="w-1/3">
                            <Field
                                type="select"
                                name="content.pinned_position"
                                label="Pinned:"
                                options={_.remove(
                                    [
                                        { value: '1', text: 'Position 1' },
                                        { value: '2', text: 'Position 2' },
                                        { value: '3', text: 'Position 3' },
                                        { value: '4', text: 'Position 4' },
                                        { value: '5', text: 'Position 5' },
                                        { value: '', text: 'Unpinned' },
                                    ],
                                    ({ value }) =>
                                        !positions.includes(value) || value === state?.content?.pinned_position,
                                )}
                            />
                        </div>
                        <div className="w-1/3">
                            <Field type="image" name="content.cover_image" label="Cover:" />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <Field type="textarea" name="content.description" label="Description:" />
                </div>
            </div>
            <div className="-mx-6 bg-gray-50 border-gray-200 flex-1 border-t flex">
                <div className="flex flex-1 p-6">
                    <Field type="editor" name="content.content" />
                </div>
            </div>
        </form>
    );
});

export default ContentCreateController;
