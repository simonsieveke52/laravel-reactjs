import { Context, Controller } from '@sihq/ui-components';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Button, Field } from '@sihq/ui-components';
import FindingHelp from '../../Blocks/Home/FindingHelp';
import Card from '../../Components/Card/Card';
import Moment from 'react-moment';
import Helmet from 'react-helmet';
import _ from 'lodash';

const Properties = {
    controller: 'App\\Http\\Controllers\\CheckIn\\Index',
};

const CheckInController = Controller(Properties, (): JSX.Element => {
    const { state } = useContext(Context);
    const { dispatch, dispatching } = useContext(Context);
    const catalog = state?.catalog ?? [];
    const role = state?.role ?? '';
    const checks = state?.checks ?? [];

    console.log(checks);

    const [filteredCatalogs, setFilteredCatalogs] = useState([]);
    const [allCatalogs, setAllCatalogs] = useState([]);
    const [selectedCheckBox, setSelectedCheckbox] = useState<string[]>([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isDisabled, setDisabled] = useState(true);

    const questions = [
        'Roughly how often did you feel tired out for no good reason?',
        'Roughly how often did you feel nervous?',
        'Roughly how often did you feel so nervous that nothing could calm you down?',
        'Roughly how often did you feel hopeless?',
        'Roughly how often did you feel restless or fidgety?',
        'Roughly how often did you feel so restless you could not sit still?',
        'Roughly how often did you feel depressed?',
        'Roughly how often did you feel that everything was an effort?',
        'Roughly how often did you feel so sad that nothing could cheer you up?',
        'Roughly how often did you feel worthless?',
    ];

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

    const onChangeCheckbox = (e: any) => {
        console.log(e.target.name);
        if (selectedCheckBox.indexOf(e.target.name) === -1) {
            setSelectedCheckbox([...selectedCheckBox, e.target.name]);
        }
    };

    useEffect(() => {
        if (selectedCheckBox && selectedCheckBox.length === 10) {
            setDisabled(false);
        }
    }, [selectedCheckBox]);

    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };

    const isMobile = width <= 480;

    return (
        <div className="p-3 pb-0 sm:p-6 sm:pb-0 w-full flex flex-col">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Check In - Foremind</title>
            </Helmet>

            <div>
                <div className="flex flex-wrap items-center justify-between mb-5 ">
                    <div className="w-full md:w-auto">
                        <div className="font-bold text-2xl pb-3 sm:pb-0 text-gray-600">Wellness Check In</div>
                    </div>
                </div>
            </div>
            <form {...{ onSubmit }}>
                <div className="flex w-full flex-wrap lg:flex-nowrap lg:space-x-8 space-y-3 lg:space-y-0 ">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="shadow overflow-hidden rounded border-b border-gray-200">
                            {isMobile ? (
                                <>
                                    <div className="w-full">
                                        <span className="w-full px-8 py-2 text-base text-center inline-block text-xs bg-[#5994BD] text-white rounded-2xl">
                                            In the past 4 weeks...
                                        </span>
                                    </div>

                                    <div className="w-full space-y-2 mt-4">
                                        {questions.map((question, i) => {
                                            return (
                                                <div className="w-full justify-center border-b-2 pb-4">
                                                    <div className="mb-2">
                                                        <a className="text-[#429AC5] text-sm font-medium">{question}</a>
                                                    </div>

                                                    <div className="text-sm">
                                                        <Field
                                                            type="select"
                                                            name={`list_radio[${i}]`}
                                                            size="sm"
                                                            options={[
                                                                { value: '', text: 'Choose answer' },
                                                                { value: '1', text: 'None of the time' },
                                                                { value: '2', text: 'A little of the time' },
                                                                { value: '3', text: 'Some of the time' },
                                                                { value: '4', text: 'Most the time' },
                                                                { value: '5', text: 'All of the time' },
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>
                            ) : (
                                <table className="min-w-full bg-white border-spacing-0">
                                    <thead className="bg-[#5994BD] text-white">
                                        <tr>
                                            <th className="w-3/8 text-left py-3 px-4 text-xs rounded-tl-xl rounded-bl-xl">
                                                In the past 4 weeks...
                                            </th>
                                            <th className="w-1/8 text-center py-3 px-4 text-xs">None of the time</th>
                                            <th className="w-1/8 text-center py-3 px-4 text-xs">
                                                A little of the time
                                            </th>
                                            <th className="w-1/8 text-center py-3 px-4 text-xs">Some of the time</th>
                                            <th className="w-1/8 text-center py-3 px-4 text-xs">Most the time</th>
                                            <th className="w-1/8 text-center py-3 px-4 text-xs rounded-br-xl rounded-tr-xl">
                                                All of the time
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        {questions.map((question, i) => {
                                            return (
                                                <tr className={i % 2 == 0 ? `` : `bg-[#F2F2F2]`}>
                                                    <td className="w-3/8 text-left text-xs py-4 px-4">
                                                        <a className="text-[#429AC5]">{question}</a>
                                                    </td>
                                                    <td className="w-1/8 text-center py-4 px-4">
                                                        <Field type="radio" name={`list_radio[${i}]`} value="1" />
                                                    </td>
                                                    <td className="w-1/8 text-center py-4 px-4">
                                                        <Field type="radio" name={`list_radio[${i}]`} value="2" />
                                                    </td>
                                                    <td className="w-1/8 text-center py-4 px-4">
                                                        <Field type="radio" name={`list_radio[${i}]`} value="3" />
                                                    </td>
                                                    <td className="w-1/8 text-center py-4 px-4">
                                                        <Field type="radio" name={`list_radio[${i}]`} value="4" />
                                                    </td>
                                                    <td className="w-1/8 text-center py-4 px-4">
                                                        <Field type="radio" name={`list_radio[${i}]`} value="5" />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            )}
                        </div>
                        <div className="mb-4 mt-6">
                            <Button variant="primary" type="submit" disabled={dispatching('save')}>
                                {dispatching('save') ? 'submitting...' : 'Submit'}
                            </Button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-2 justify-center">
                        <div className="text-sm">
                            This simple checklist asks you to reflect on your feelings over the past four weeks. It is a
                            measure of distress commonly used by Australian GPs and mental health professionals to
                            determine what level of support you may require and some next steps to help.
                        </div>

                        <div className="text-sm">
                            Once you complete the checklist we will provide you with some recommendations or you can
                            take the results and action them as you see fit.
                        </div>

                        <div className="text-sm">
                            We will not share this with your employer and it will only ever be shared with a counsellor
                            if you book a session with them for their benefit.
                        </div>

                        <div className="w-full md:w-auto">
                            <div className="font-bold text-2xl pb-3 sm:pb-0 text-gray-600">Previous Check Ins</div>
                            <div className="w-full max-h-36	overflow-auto mb-4">
                                <table className="w-full text-gray-700 text-xs">
                                    <thead>
                                        <tr className="text-left">
                                            <th className="py-2 uppercase text-center">Check in Date</th>
                                            <th className="py-2 px-4 uppercase">Score</th>
                                            <th className="py-2 px-4 uppercase text-center">actions</th>
                                        </tr>
                                    </thead>
                                    {checks.map((check: any) => {
                                        const { id, check_in, created_at } = check;
                                        return (
                                            <tr>
                                                <td className="w-1 whitespace-nowrap py-2 px-4 pl-0 text-center">
                                                    <span className="w-20 block truncate text-xs">
                                                        {/* @ts-ignore */}
                                                        {<Moment format="DD/MM/YYYY">{created_at}</Moment>}
                                                    </span>
                                                </td>
                                                <td className="py-2 px-4">
                                                    <span className="w-20 block truncate text-xs">Very High</span>
                                                </td>

                                                <td className="w-1 whitespace-nowrap py-2 px-4 text-center">
                                                    <div className="flex">
                                                        <Button
                                                            modal={`/check-in/${id}/view`}
                                                            variant="flat-primary"
                                                            size="xs"
                                                            icon={<PencilIcon />}
                                                        ></Button>

                                                        <Button
                                                            modal={`/check-in/${id}/delete`}
                                                            variant="flat-destructive"
                                                            size="xs"
                                                            icon={<TrashIcon />}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                        </div>

                        <div className="h-1/2 flex">
                            <FindingHelp />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
});

export default CheckInController;
