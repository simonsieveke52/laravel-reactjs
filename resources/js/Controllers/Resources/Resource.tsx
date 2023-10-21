import { ChevronLeftIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { Context, Controller } from '@sihq/ui-components';
import React, { useContext, useEffect, useState } from 'react';

import { Button } from '@sihq/ui-components';
import { Helmet } from 'react-helmet';
import { Render } from '@sihq/ui-components';
import { useParams } from 'react-router-dom';

const Properties = {
    controller: 'App\\Http\\Controllers\\Resources\\View',
    parameters: ['resourceId'],
};

const ResourceController = Controller(Properties, (): JSX.Element => {
    const [title, setTitle] = useState('');
    const { resourceId } = useParams();
    const { state } = useContext(Context);
    const role = state?.role ?? '';

    useEffect(() => {
        if (state && state.content) {
            setTitle(state.content.title);
        }
    }, [state]);

    return (
        <div className="p-3 sm:p-6 w-full flex flex-col">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title} - Foremind</title>
            </Helmet>
            <div className="flex items-center justify-between">
                <div>
                    <Button icon={<ChevronLeftIcon />} to={-1}>
                        Back
                    </Button>
                </div>
                {['developer'].includes(role) ? (
                    <div className="flex space-x-4">
                        <Button to={`/resources/${resourceId}/edit`} icon={<PencilAltIcon />}>
                            Edit resource
                        </Button>
                        <Button modal={`/resources/${resourceId}/delete`} icon={<TrashIcon />} />
                    </div>
                ) : null}
            </div>
            <Render name="content.content" />
        </div>
    );
});

export default ResourceController;
