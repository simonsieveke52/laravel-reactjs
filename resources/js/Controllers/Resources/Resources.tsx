import { Context, Controller } from '@sihq/ui-components';
import { PencilIcon, RefreshIcon } from '@heroicons/react/outline';
import React, { useContext, useEffect, useState } from 'react';

import { Button } from '@sihq/ui-components';
import Card from '../../Components/Card/Card';
import Helmet from 'react-helmet';
import _ from 'lodash';

const Properties = {
    controller: 'App\\Http\\Controllers\\Resources\\Catalog',
};

const CATEGORY_COLORS = {
    Sleep: {
        inactive: 'bg-blue-500 hover:bg-blue-800',
        active: 'bg-blue-800 hover:bg-blue-500 shadow-xl',
    },
    Stress: {
        inactive: 'bg-orange-500 hover:bg-orange-800',
        active: 'bg-orange-800 hover:bg-orange-500 shadow-xl',
    },
    Fitness: {
        inactive: 'bg-red-500 hover:bg-red-800',
        active: 'bg-red-800 hover:bg-red-500 shadow-xl',
    },
    Anxiety: {
        inactive: 'bg-purple-500 hover:bg-purple-800',
        active: 'bg-purple-800 hover:bg-purple-500 shadow-xl',
    },
    Reflection: {
        inactive: 'bg-green-500 hover:bg-green-800',
        active: 'bg-green-800 hover:bg-green-500 shadow-xl',
    },
    Other: {
        inactive: 'gray',
        active: 'gray',
    },
};

const TILE_CATEGORY_COLORS = {
    Sleep: 'blue',
    Stress: 'orange',
    Fitness: 'red',
    Anxiety: 'purple',
    Reflection: 'green',
    Other: 'gray',
};

const ResourcesController = Controller(Properties, (): JSX.Element => {
    const { state } = useContext(Context);
    const catalog = state?.catalog ?? [];
    const role = state?.role ?? '';

    const [filteredCatalogs, setFilteredCatalogs] = useState([]);
    const [allCatalogs, setAllCatalogs] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');

    useEffect(() => {
        if (state && state.catalog) {
            setAllCatalogs(state.catalog);
            setFilteredCatalogs(state.catalog);
        }
    }, [state]);

    const onClickFilter = (category: string) => {
        console.log(category);
        setSelectedFilter(category);
        let tempFilteredCatalogs = allCatalogs.filter((catalog: any) => {
            return catalog.category === category;
        });
        setFilteredCatalogs(tempFilteredCatalogs);
    };

    const resetFilter = () => {
        setSelectedFilter('');
        setFilteredCatalogs(allCatalogs);
    };

    return (
        <div className="p-3 pb-0 sm:p-6 sm:pb-0 w-full flex flex-col">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Resources - Foremind</title>
            </Helmet>
            {/* <div className="flex items-center justify-between mb-5">
                <div>
                    <div className="font-bold text-2xl p-3 text-gray-600">Recommended</div>
                </div>

                <div>
                    <Button to="/resources/create" icon={<PencilIcon />}>
                        Create new resource
                    </Button>
                </div>
            </div>

            <div className=" w-full">
                <div className="inline-block  w-1/4 aspect-video p-3 ">
                    <Card color="blue" label="Sleep" image="https://picsum.photos/300/150?random=1" />
                </div>
                <div className="inline-block w-1/4 aspect-video p-3 ">
                    <Card color="purple" label="Stress" image="https://picsum.photos/300/150?random=2" />
                </div>
                <div className="inline-block w-1/4 aspect-video p-3 ">
                    <Card color="green" label="Anxiety" image="https://picsum.photos/300/150?random=3" />
                </div>
                <div className="inline-block w-1/4 aspect-video p-3 ">
                    <Card color="red" label="Fitness" image="https://picsum.photos/300/150?random=4" />
                </div>
            </div> */}

            <div>
                <div className="flex flex-wrap items-center justify-between mb-5 ">
                    <div className="w-full md:w-auto">
                        <div className="font-bold text-2xl pb-3 sm:pb-0 text-gray-600">Discover resources</div>
                    </div>
                    {['developer'].includes(role) ? (
                        <div className="w-full md:w-auto flex">
                            <Button to="/resources/create" variant="primary" icon={<PencilIcon />}>
                                Create new resource
                            </Button>
                        </div>
                    ) : null}
                </div>
                <div className="mb-5 pt-0 space-x-2">
                    {['Sleep', 'Fitness', 'Stress', 'Anxiety', 'Reflection'].map((category: string) => {
                        return (
                            <div
                                className={
                                    `px-4 p-1 inline-block text-xs text-white rounded cursor-pointer transition-all duration-500 ease-in-out ${_.get(
                                        CATEGORY_COLORS,
                                        category,
                                    )}` +
                                    (selectedFilter === category
                                        ? ` ${_.get(CATEGORY_COLORS, category).active}`
                                        : ` ${_.get(CATEGORY_COLORS, category).inactive}`)
                                }
                                onClick={(e) => {
                                    onClickFilter(category);
                                }}
                            >
                                {`${category}`}
                            </div>
                        );
                    })}

                    <div className="inline-block rounded cursor-pointer absolute">
                        {selectedFilter && (
                            <Button
                                variant="flat-destructive"
                                size="xs"
                                icon={<RefreshIcon />}
                                onClick={() => resetFilter()}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="-mx-6 bg-gray-50 border-gray-200 flex-1 border-t">
                <div className="w-full px-3 py-6">
                    {filteredCatalogs.map((content: any) => {
                        const { id, category, title, description, cover_image } = content;
                        return (
                            <div key={id} className="inline-block w-full lg:w-1/2 2xl:w-1/4 p-3 ">
                                <Card
                                    color={_.get(TILE_CATEGORY_COLORS, category)}
                                    label={category}
                                    title={title}
                                    description={description}
                                    image={`${cover_image?.url}`}
                                    to={`/resources/${id}`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
});

export default ResourcesController;
