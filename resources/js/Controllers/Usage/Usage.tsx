import {
    BookmarkIcon,
    CalendarIcon,
    PresentationChartLineIcon,
    PresentationChartBarIcon,
    QrcodeIcon,
    ScaleIcon,
    UserCircleIcon,
} from '@heroicons/react/outline';
import { Context, Controller } from '@sihq/ui-components';
import React, { useContext, useEffect, useState } from 'react';

import ContentEngagement from '../../Blocks/Usage/ContentEngagement';
import FeedbackGrid from '../../Blocks/Usage/FeedbackGrid';
import LocationEngagement from '../../Blocks/Usage/LocationEngagement';
import SiteEngagement from '../../Blocks/Usage/SiteEngagement';
import Helmet from 'react-helmet';
import moment from 'moment';

const Properties = {
    controller: 'App\\Http\\Controllers\\Usage\\Usage',
};

const toHex = (data: String) => {
    var hash = 0;
    if (data.length === 0) return hash;
    for (var i = 0; i < data.length; i++) {
        hash = data.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    var color = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 255;
        color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
};

const UsageController = Controller(Properties, (): JSX.Element => {
    const { state } = useContext(Context);
    const allUser = state?.allUser ?? [];
    const content_engagement = state?.content_engagement ?? [];
    const activeUser = state?.activeUser ?? [];
    const loginCount = state?.loginCount ?? [];
    const current_employer = state?.current_employer ?? [];
    const usersByLocation = state?.usersByLocation ?? [];
    const usersBySite = state?.usersBySite ?? [];

    const [locationEngagementData, setLocationEngagementData] = useState<any>([]);
    const [siteEngagementData, setSiteEngagementData] = useState<any>([]);

    const sessionBar = [];
    if (current_employer?.used_sessions !== -1 && current_employer?.maximum_sessions !== -1) {
        for (var i = 0; i < current_employer?.maximum_sessions; i++) {
            let usedSession = current_employer?.used_sessions;
            let className = 'h-2 flex-1';

            if (i == 0) {
                className += ' rounded-l';
            }
            if (i == current_employer?.maximum_sessions - 1) {
                className += ' rounded-r';
            }

            if (i < usedSession) {
                className += ' bg-blue-500';
            } else {
                className += ' bg-gray-500';
            }

            sessionBar.push(<div className={className}></div>);
        }
    }

    const utilisationBar = [];
    if (allUser?.length !== -1) {
        for (var i = 0; i < allUser?.length; i++) {
            let activeUsers = activeUser?.length;
            let className = 'h-2 flex-1';

            if (i == 0) {
                className += ' rounded-l';
            }
            if (i == allUser?.length - 1) {
                className += ' rounded-r';
            }

            if (i < activeUsers) {
                className += ' bg-blue-500';
            } else {
                className += ' bg-gray-500';
            }

            utilisationBar.push(<div className={className}></div>);
        }
    }

    const calcEstDate = (maximum_sessions: any) => {
        if (maximum_sessions === -1 || maximum_sessions === 0) {
            return false;
        } else {
            // will calculate date once got used sessions
            const left_day = 5;
            const result = new Date();
            result.setDate(result.getDate() + left_day);
            return moment(result).format('Do MMMM');
        }
    };

    useEffect(() => {
        let temp: any = [];
        let sites: any = [];
        if (state && state.usersByLocation) {
            state.usersByLocation.forEach((le: any) => {
                temp.push({
                    name: le.name,
                    value: le.users.length,
                    fill: toHex(le.name),
                });
            });
            setLocationEngagementData(temp);
        }

        if (state && state.usersBySite) {
            state.usersBySite.forEach((le: any) => {
                sites.push({
                    name: le.name,
                    pv: Math.round((le.users.length / allUser.length) * 100),
                });
            });
            setSiteEngagementData(sites);
        }
    }, [state]);

    return (
        <div className="p-3 sm:p-6 w-full flex flex-col">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Usage - Foremind</title>
            </Helmet>
            <div className="flex flex-wrap -mx-3 -my-3">
                <div className="flex flex-wrap flex-grow">
                    <div className="w-1/2 md:w-1/4 p-3 flex">
                        <div className="bg-gray-100 flex-grow flex flex-col rounded-xl p-2 md:p-5">
                            <div className="flex items-center text-gray-700 font-semibold">
                                <span className="h-5 w-5 mr-2 text-blue-500">
                                    <UserCircleIcon />
                                </span>
                                Sessions this month
                            </div>
                            <div className="pt-8 pb-5 flex flex-col">
                                <span className="text-4xl pb-2 text-gray-600">
                                    {current_employer?.used_sessions === -1
                                        ? 'Used Sessions'
                                        : current_employer?.used_sessions}
                                </span>
                            </div>
                            <div>
                                {current_employer?.used_sessions !== -1 && current_employer?.maximum_sessions !== -1 ? (
                                    <>
                                        <div className=" text-xs mb-2"> / Sessions for this month</div>
                                        <div className="flex space-x-1">{sessionBar}</div>
                                    </>
                                ) : (
                                    <div className="flex space-x-1"></div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3 flex">
                        <div className="bg-gray-100 flex-grow flex flex-col rounded-xl p-2 md:p-5">
                            <div className="flex items-center text-gray-700 font-semibold">
                                <span className="h-5 w-5 mr-2 text-blue-500">
                                    <ScaleIcon />
                                </span>
                                Utilisation Rate
                            </div>
                            <div className="pt-8 pb-5 flex flex-col">
                                <span className="text-4xl pb-2 text-gray-600">
                                    {((activeUser?.length / allUser?.length) * 100).toFixed(2)}%
                                </span>
                            </div>
                            <div>
                                <div className=" text-xs mb-2">
                                    {activeUser?.length} / {allUser?.length} users for this month
                                </div>
                                <div className="flex space-x-1">{utilisationBar}</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3 flex">
                        <div className="bg-gray-100 flex-grow flex flex-col rounded-xl p-2 md:p-5">
                            <div className="flex items-center text-gray-700 font-semibold">
                                <span className="h-5 w-5 mr-2 text-blue-500">
                                    <QrcodeIcon />
                                </span>
                                Remaining Sessions
                            </div>
                            <div className="pt-8 pb-5 flex flex-col flex-grow">
                                <span className="text-4xl pb-2 text-gray-600">
                                    {current_employer?.maximum_sessions === -1
                                        ? 'No Limit'
                                        : current_employer?.maximum_sessions === 0
                                        ? '0'
                                        : current_employer?.maximum_sessions - current_employer?.used_sessions}
                                </span>
                            </div>
                            <div className=" space-x-2 flex h-2 w-full">
                                <div className="bg-blue-500 rounded-full h-full" style={{ width: '75%' }}></div>
                                <div className="bg-gray-500 rounded-full h-full flex-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3 flex">
                        <div className="bg-gray-100 flex-grow flex flex-col rounded-xl p-2 md:p-5">
                            <div className="flex items-center text-gray-700 font-semibold">
                                <span className="h-5 w-5 mr-2 text-blue-500">
                                    <CalendarIcon />
                                </span>
                                Logins this month
                            </div>
                            <div className="pt-8 pb-5 flex flex-col">
                                <span className="text-4xl pb-2 text-gray-600">
                                    {loginCount?.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-2/6 p-3 flex">
                        <div className="rounded-xl bg-gray-100  w-full relative">
                            <div className="p-2 md:p-5 flex flex-col">
                                <div className="flex items-center text-gray-700 font-semibold">
                                    <span className="h-5 w-5 mr-2 text-blue-500">
                                        <BookmarkIcon />
                                    </span>
                                    Content Engagement
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-full aspect-video ">
                                    <ContentEngagement data={content_engagement} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/6 p-3 flex">
                        <div className="rounded-xl bg-gray-100  w-full relative">
                            <div className="p-2 md:p-5 flex flex-col">
                                <div className="flex items-center text-gray-700 font-semibold">
                                    <span className="h-5 w-5 mr-2 text-blue-500">
                                        <PresentationChartLineIcon />
                                    </span>
                                    Site engagement
                                </div>
                                <div className="mt-4 flex space-x-4">
                                    {locationEngagementData.map((le: any) => {
                                        return (
                                            <div className="flex items-center text-xs text-gray-700">
                                                <span
                                                    className="h-3 w-3 mr-2 rounded-full"
                                                    style={{ backgroundColor: le.fill }}
                                                ></span>
                                                {le.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-full  aspect-video ">
                                    <LocationEngagement data={locationEngagementData} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/6 p-3 flex">
                        <div className="rounded-xl bg-gray-100  w-full relative">
                            <div className="p-2 md:p-5 flex flex-col">
                                <div className="flex items-center text-gray-700 font-semibold">
                                    <span className="h-5 w-5 mr-2 text-blue-500">
                                        <PresentationChartBarIcon />
                                    </span>
                                    Utilisation Rate by Site
                                </div>
                                <div className="mt-4 flex space-x-4 text-xs">
                                    How many users are active on each site across the previous month
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-2">
                                <div className="w-full  aspect-video overflow-hidden rounded-lg">
                                    <SiteEngagement data={siteEngagementData} xKey="name" yKey="pv" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default UsageController;
