import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/outline';
import { Context, Controller } from '@sihq/ui-components';
import React, { useContext, useEffect, useState } from 'react';

import AppointmentCard from '../../Components/Card/AppointmentCard';
import Card from '../../Components/Card/Card';
import FindingHelp from '../../Blocks/Home/FindingHelp';
import WelcomeBlock from '../../Blocks/Home/WelcomeBlock';
import _ from 'lodash';
import moment from 'moment';
import Moment from 'react-moment';

const Properties = {
    controller: 'App\\Http\\Controllers\\Home\\Home',
};

const CATEGORY_COLORS = {
    Sleep: 'blue',
    Stress: 'orange',
    Fitness: 'red',
    Anxiety: 'purple',
    Reflection: 'green',
    Other: 'gray',
};

const HomeController = Controller(Properties, (): JSX.Element => {
    const { state } = useContext(Context);

    const catalog = state?.catalog ?? [];
    const employer = state?.employer ?? [];
    const location = state?.location ?? [];
    const appointments = state.appointments ?? {};

    const user = (state.user as any) ?? {};

    const check = (state.check as any) ?? {};

    const [upComingAppointments, setUpComingAppointments] = useState<any[]>([]);
    const [nextAppointment, setNextAppointment] = useState<any>({});

    useEffect(() => {
        if (state && state.appointments) {
            state.appointments.forEach((appointment: any) => {
                let isFuture = moment().diff(appointment.start_at, 'minutes');
                if (isFuture < 0) {
                    setUpComingAppointments((old) => [...old, appointment]);
                }
            });
        }
    }, [state]);

    useEffect(() => {
        if (upComingAppointments.length > 0) {
            let nextAppoint = upComingAppointments[0];

            upComingAppointments.forEach((appointment) => {
                if (moment(nextAppoint.start_at) > moment(appointment.start_at)) {
                    nextAppoint = appointment;
                }
            });

            setNextAppointment(nextAppoint);
        }
    }, [upComingAppointments]);

    return (
        <div className="p-3 lg:p-6 flex w-full flex-wrap lg:flex-nowrap lg:space-x-6 space-y-3 lg:space-y-0 ">
            <div className="w-full lg:w-1/2 flex flex-col space-y-3 lg:space-y-6">
                <div className="h-1/2 overflow-hidden flex">
                    <WelcomeBlock />
                </div>
                <div className="h-1/2 flex">
                    <FindingHelp />
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-wrap">
                <div className="flex flex-wrap flex-1 -mx-3 -my-3">
                    <div className="flex w-full xl:w-1/2 p-3">
                        {upComingAppointments && upComingAppointments.length ? (
                            <div className="flex-1 bg-blue-50 border border-t-8 border-t-blue-500 border-gray-300 rounded-2xl flex flex-col items-center justify-center">
                                <div className="uppercase font-bold text-center text-gray-600">next appointment</div>
                                <div className="w-full">
                                    <div className="inline-block w-full px-4">
                                        <AppointmentCard
                                            first_name={`${user?.first_name}`}
                                            last_name={`${user?.last_name}`}
                                            email={`${user?.email}`}
                                            name={`${nextAppointment.user?.first_name}`}
                                            type={nextAppointment.type}
                                            image={nextAppointment.user?.photo}
                                            date={nextAppointment.start_at}
                                            time={nextAppointment.end_at}
                                            next_appointment="true"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 bg-gray-100 border border-t-8 border-t-gray-400 border-gray-200 rounded-2xl flex flex-col items-center justify-center space-y-4">
                                <div className="uppercase text-gray-600">Next appointment</div>
                                <div className="text-gray-400">
                                    <CalendarIcon className="h-12 w-12" />
                                </div>
                                <div className="text-xs">You have no upcoming appointments</div>
                                {location.maximum_sessions != 0 && employer.maximum_sessions != 0 && (
                                    <div>
                                        <a
                                            href={`https://foremind.sihq.com.au/sso?token=${btoa(
                                                JSON.stringify({
                                                    first_name: user?.first_name,
                                                    last_name: user?.last_name,
                                                    email: user?.email,
                                                }),
                                            )}`}
                                            className="rounded-full mt-2 p-2 px-5 flex justify-between items-center flex-grow bg-gray-500 text-white text-xs font-semibold"
                                        >
                                            Book a counsellor
                                            <span className="h-4 w-4 ml-2">
                                                <ArrowRightIcon />
                                            </span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {check && check.created_at && (
                        <div className="flex w-full xl:w-1/2 p-3">
                            <div className="flex-1 bg-[#FBEEFF] border border-t-8 border-t-[#A21CD1] rounded-2xl flex flex-col items-center justify-center space-y-4">
                                <div className="uppercase text-gray-600">Wellness check in</div>
                                <div className="text-gray-400 text-xl font-bold">
                                    {/* @ts-ignore */}
                                    {<Moment format="DD">{check.created_at}</Moment>} Days
                                </div>
                                <div className="text-xs">Since Last Check In</div>
                                <div>
                                    <a
                                        href="check-in"
                                        className="rounded-full mt-2 p-2 px-5 flex justify-between items-center flex-grow bg-[#A21CD1] text-white text-xs font-semibold"
                                    >
                                        Check In Now
                                        <span className="h-4 w-4 ml-2">
                                            <ArrowRightIcon />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {catalog.map((content: any) => {
                        const { id, title, description, category, cover_image } = content;
                        return (
                            <div key={id} className="flex w-full xl:w-1/2 p-3">
                                <Card
                                    color={_.get(CATEGORY_COLORS, category)}
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

export default HomeController;
