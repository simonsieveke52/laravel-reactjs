import { Context, Controller } from '@sihq/ui-components';
import React, { useContext, useEffect, useState } from 'react';

import AppointmentCard from '../../Components/Card/AppointmentCard';
import { Button } from '@sihq/ui-components';
import { CalendarIcon } from '@heroicons/react/outline';
import { Helmet } from 'react-helmet';
import moment from 'moment';

const Properties = {
    controller: 'App\\Http\\Controllers\\Appointments\\Appointments',
};

const AppointmentsController = Controller(Properties, (): JSX.Element => {
    const { state } = useContext(Context);
    const auth_user = (state.user as any) ?? {};

    const [upComingAppointments, setUpComingAppointments] = useState<any[]>([]);
    const [pastAppointments, setPastAppointments] = useState<any[]>([]);

    const [nextAppointment, setNextAppointment] = useState<any>({});

    const appointments = state.appointments ?? {};
    const employer = state?.employer ?? [];
    const location = state?.location ?? [];

    useEffect(() => {
        if (state && state.appointments) {
            state.appointments.forEach((appointment: any) => {
                let isFuture = moment().diff(appointment.start_at, 'minutes');
                if (isFuture > 0) {
                    setPastAppointments((old) => [...old, appointment]);
                } else {
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
        <div className="p-3 sm:p-6 w-full flex flex-col">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Appointments - Foremind</title>
            </Helmet>
            <div className="flex flex-wrap items-center justify-between mb-5 ">
                <div className="w-full sm:w-auto pb-3 sm:pb-0">
                    <div className="font-bold text-2xl text-gray-600">Appointments</div>
                </div>

                {location.maximum_sessions != 0 && employer.maximum_sessions != 0 && (
                    <div className="w-full sm:w-auto flex">
                        <Button
                            variant="primary"
                            onClick={(): void =>
                                window.location.assign(
                                    `https://foremind.sihq.com.au/sso?token=${btoa(
                                        JSON.stringify({
                                            first_name: auth_user?.first_name,
                                            last_name: auth_user?.last_name,
                                            email: auth_user?.email,
                                        }),
                                    )}`,
                                )
                            }
                            icon={<CalendarIcon />}
                        >
                            New appointment
                        </Button>
                    </div>
                )}
            </div>
            <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/4 py-2 sm:py-3 p-3">
                    <div className="rounded-2xl border border-t-8 bg-blue-50 border-t-blue-500 border-gray-300 p-5 flex flex-col h-full">
                        <div className="uppercase font-bold text-center text-gray-600">next appointment</div>

                        {upComingAppointments && upComingAppointments.length ? (
                            <div className="w-full">
                                <div className="inline-block w-full p-3">
                                    <AppointmentCard
                                        first_name={`${auth_user?.first_name}`}
                                        last_name={`${auth_user?.last_name}`}
                                        email={`${auth_user?.email}`}
                                        name={`${nextAppointment.user?.first_name}`}
                                        address={`${nextAppointment.user?.address}`}
                                        type={nextAppointment.type}
                                        image={nextAppointment.user?.photo}
                                        date={nextAppointment.start_at}
                                        time={nextAppointment.end_at}
                                        next_appointment="true"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center space-y-2 flex-1">
                                <CalendarIcon className="h-12 w-12 text-gray-400" />
                                <div className="text-xs">You have no upcoming appointments</div>
                                {location.maximum_sessions != 0 && employer.maximum_sessions != 0 && (
                                    <div className="pt-4">
                                        <Button
                                            variant="flat-primary"
                                            onClick={(): void =>
                                                window.location.assign(
                                                    `https://foremind.sihq.com.au/sso?token=${btoa(
                                                        JSON.stringify({
                                                            first_name: auth_user?.first_name,
                                                            last_name: auth_user?.last_name,
                                                            email: auth_user?.email,
                                                        }),
                                                    )}`,
                                                )
                                            }
                                        >
                                            Book a counselling session
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-3/5 xl:w-3/4 py-2 sm:py-3 p-3">
                    <div className="rounded-2xl bg-white border border-t-8 border-t-teal-500 border-gray-300 p-5 flex flex-col">
                        <div className="uppercase font-bold text-center text-gray-600">upcoming appointments</div>
                        <div className="flex flex-col items-center space-y-2 flex-1 max-h-72 overflow-scroll">
                            {upComingAppointments && upComingAppointments.length ? (
                                <div className="w-full">
                                    {upComingAppointments.map((content: any) => {
                                        const { user, type, start_at, end_at } = content;
                                        return (
                                            <div
                                                key={user.first_name}
                                                className="inline-block w-full lg:w-1/2 2xl:w-1/3 p-3"
                                            >
                                                <AppointmentCard
                                                    first_name={`${auth_user?.first_name}`}
                                                    last_name={`${auth_user?.last_name}`}
                                                    email={`${auth_user?.email}`}
                                                    name={`${user.first_name}`}
                                                    address={`${user.address}`}
                                                    type={type}
                                                    image={user.photo}
                                                    date={start_at}
                                                    time={end_at}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div>
                                    <CalendarIcon className="h-12 w-12 text-gray-400 m-auto" />
                                    <div className="text-xs">You have no upcoming appointments</div>
                                    {location.maximum_sessions != 0 && employer.maximum_sessions != 0 && (
                                        <div className="pt-4">
                                            <Button
                                                variant="flat-primary"
                                                onClick={(): void =>
                                                    window.location.assign(
                                                        `https://foremind.sihq.com.au/sso?token=${btoa(
                                                            JSON.stringify({
                                                                first_name: auth_user?.first_name,
                                                                last_name: auth_user?.last_name,
                                                                email: auth_user?.email,
                                                            }),
                                                        )}`,
                                                    )
                                                }
                                            >
                                                Book a counselling session
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 -mx-3">
                <div className="w-full flex-1 flex py-2 sm:py-3 p-3">
                    <div
                        style={{ minHeight: 300 }}
                        className="rounded-2xl flex-1 bg-white-50 border border-t-8 border-t-orange-500 border-gray-300 p-5 flex flex-col"
                    >
                        <div className="uppercase font-bold text-center text-gray-600">Past appointments</div>
                        <div className="flex flex-col items-center space-y-2 flex-1 max-h-64 overflow-scroll">
                            {pastAppointments && pastAppointments.length ? (
                                <div className="w-full">
                                    {pastAppointments.map((content: any) => {
                                        const { user, type, start_at, end_at } = content;
                                        return (
                                            <div
                                                key={user.first_name}
                                                className="inline-block w-full lg:w-1/2 2xl:w-1/4 p-3 "
                                            >
                                                <AppointmentCard
                                                    first_name={`${auth_user?.first_name}`}
                                                    last_name={`${auth_user?.last_name}`}
                                                    email={`${auth_user?.email}`}
                                                    name={`${user.first_name}`}
                                                    address={`${user.address}`}
                                                    type={type}
                                                    image={user.photo}
                                                    date={start_at}
                                                    time={end_at}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div>
                                    <CalendarIcon className="h-12 w-12 text-gray-400 m-auto" />
                                    <div className="text-xs">You have no past appointments</div>
                                    {location.maximum_sessions != 0 && employer.maximum_sessions != 0 && (
                                        <div className="pt-4">
                                            <Button
                                                variant="flat-primary"
                                                onClick={(): void =>
                                                    window.location.assign(
                                                        `https://foremind.sihq.com.au/sso?token=${btoa(
                                                            JSON.stringify({
                                                                first_name: auth_user?.first_name,
                                                                last_name: auth_user?.last_name,
                                                                email: auth_user?.email,
                                                            }),
                                                        )}`,
                                                    )
                                                }
                                            >
                                                Book a counselling session
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default AppointmentsController;
