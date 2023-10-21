import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { TypeColor } from '../../Definitions/Colors';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

export interface CardProps {
    color?: TypeColor;
    label?: string;
    image?: string;
    title?: string;
    description?: string;
    to: string;
}

const COLOR_MAP = {
    blue: {
        border: 'border-blue-500',
        button: 'bg-blue-500',
        label: 'bg-blue-500',
    },
    red: {
        border: 'border-red-500',
        button: 'bg-red-500',
        label: 'bg-red-500',
    },
    green: {
        border: 'border-green-500',
        button: 'bg-green-500',
        label: 'bg-green-500',
    },
    purple: {
        border: 'border-purple-500',
        button: 'bg-purple-500',
        label: 'bg-purple-500',
    },
    orange: {
        border: 'border-orange-500',
        button: 'bg-orange-500',
        label: 'bg-orange-500',
    },
    gray: {
        border: 'border-gray-500',
        button: 'bg-gray-500',
        label: 'bg-gray-500',
    },
};

const Card = (props: CardProps): JSX.Element => {
    const { color, label, image, title, description, to } = props;

    const height = 'h-36 -mb-0'; // 'h-40 mb-4';      // 'h-64 mb-28';
    const offset = '-mt-18'; // '-mt-32'; // height / 2

    const navigate = useNavigate();

    return (
        <div className="rounded-xl h-full w-full cursor-default bg-white overflow-hidden relative group border border-gray-200 transition-all ease-in-out duration-150">
            <div className="bg-gray-700 h-full pb-20">
                <div
                    className={`${height}  group-hover:opacity-50 transition-all ease-in-out duration-200 flex items-center overflow-hidden relative`}
                >
                    {label ? (
                        <div
                            className={`px-4 p-1  absolute right-0 top-4 text-xs text-white rounded-l ${_.get(
                                COLOR_MAP,
                                `${color}.label`,
                            )}`}
                        >
                            {label}
                        </div>
                    ) : null}
                    <div className="inset-0 absolute opacity-50 filter blur brightness-120 bg-cover"></div>
                    <div
                        style={{
                            backgroundImage: `url(${image})`,
                            boxShadow:
                                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                        }}
                        className="h-full w-full bg-cover "
                    ></div>
                </div>
            </div>
            <div
                style={{ boxShadow: '0px -4px 3px rgba(50, 50, 50, 0.20)' }}
                className={`w-full ${_.get(
                    COLOR_MAP,
                    `${color}.border`,
                )}   ${offset} rounded-t-xl border-t-4  bg-white  group-hover:mt-0 group-hover:translate-y-14 -mt-20 pb-14 transition-all ease-in-out duration-300  overflow-hidden absolute top-0 h-full transform translate-y-full`}
            >
                <div className="flex flex-col h-full p-2 pb-5 px-5 ">
                    <div className="flex justify-between items-center py-1 mb-2">
                        <span className="text-lg text-gray-600 truncate flex-1 font-bold">{title}</span>
                        <span className="text-xs text-gray-700 font-semibold"></span>
                    </div>
                    <div className="flex-grow scrollbar text-gray-700 px-5 -mx-5">
                        <div className="line-clamp-3 group-hover:line-clamp-none text-xs">{description}</div>
                    </div>
                    <div>
                        <div className="flex flex-col mt-2">
                            <button
                                type="button"
                                onClick={(): void => navigate(to)}
                                className={`rounded-md p-2 px-5 flex justify-between items-center flex-grow ${_.get(
                                    COLOR_MAP,
                                    `${color}.button`,
                                )} text-white text-xs font-semibold`}
                            >
                                Open resource
                                <span className="h-4 w-4 ml-2">
                                    <ArrowRightIcon />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
