import Moment from 'react-moment';
import React from 'react';
import _ from 'lodash';
import moment from 'moment';

export interface CardProps {
    first_name?: string;
    last_name?: string;
    address?: string;
    email?: string;
    name?: string;
    image?: string;
    type?: string;
    date?: string;
    time?: string;
    next_appointment?: string;
}

const AppointmentCard = (props: CardProps): JSX.Element => {
    const { first_name, last_name, email, address, name, image, type, date, time, next_appointment } = props;
    const isFuture = moment().diff(date, 'minutes');
    return (
        <div
            className={`${
                next_appointment != 'true' ? 'bg-white border border-gray-200 px-5' : ''
            } rounded-xl h-full w-full cursor-default overflow-hidden relative group ease-in-out py-5`}
        >
            <div className="flex items-center justify-center justify-between h-14 mb-4">
                <div className="flex space-x-2">
                    <img src={image} className="h-12 w-12 bg-cover " />
                    <div className="mt-auto">
                        <p className="font-bold text-center text-gray-600">{name}</p>
                    </div>
                </div>
                <div>
                    <div
                        className={`${
                            type == 'face-to-face' ? 'opacity-40' : ''
                        } p-1 flex flex-row bg-[#2885c526] rounded-md`}
                    >
                        <button
                            type="button"
                            className={`${type == 'telephone-call' ? 'bg-white' : ''} px-4 py-2 rounded-md`}
                        >
                            <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.5643 11.0085L13.3315 8.91519C12.534 8.16759 11.1784 8.46666 10.8594 9.43852C10.6202 10.1114 9.82271 10.4852 9.10501 10.3356C7.51012 9.96184 5.35702 8.01807 4.9583 6.4481C4.71906 5.77522 5.19753 5.02762 5.91523 4.80336C6.95191 4.50432 7.27089 3.23339 6.47344 2.48579L4.2406 0.392493C3.60264 -0.130831 2.6457 -0.130831 2.08749 0.392493L0.572347 1.81294C-0.942799 3.30815 0.731836 7.27046 4.47983 10.7842C8.22782 14.298 12.4543 15.9427 14.0492 14.4475L15.5643 13.027C16.1226 12.4289 16.1226 11.5318 15.5643 11.0085Z"
                                    fill="#2885C5"
                                />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className={`${type == 'video-call' ? 'bg-white' : ''} px-4 py-2 rounded-md`}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_117_4868)">
                                    <path
                                        d="M9.05033 3.2998H1.75055C0.787746 3.2998 0 4.08755 0 5.05035V10.9497C0 11.9125 0.787746 12.7002 1.75055 12.7002H9.05033C10.0131 12.7002 10.8009 11.9125 10.8009 10.9497V5.05035C10.8009 4.07005 10.0131 3.2998 9.05033 3.2998Z"
                                        fill="#2885C5"
                                    />
                                    <path
                                        d="M14.7047 4.26257C14.5997 4.28008 14.4947 4.33259 14.4071 4.38511L11.6763 5.9606V10.0219L14.4246 11.5974C14.9323 11.895 15.5625 11.7199 15.8601 11.2122C15.9476 11.0547 16.0001 10.8796 16.0001 10.6871V5.27789C16.0001 4.63019 15.3874 4.10502 14.7047 4.26257Z"
                                        fill="#2885C5"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_117_4868">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    {type == 'face-to-face' && (
                        <div className="flex items-center space-x-2 mt-2">
                            <svg
                                width="14"
                                height="12"
                                viewBox="0 0 14 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.40943 3.04935C4.14943 3.04935 4.7521 2.44801 4.7521 1.70668C4.7521 0.96668 4.14943 0.364014 3.40943 0.364014C2.6681 0.364014 2.06543 0.96668 2.06543 1.70668C2.06543 2.44801 2.6681 3.04935 3.40943 3.04935Z"
                                    fill="#2885C5"
                                />
                                <path
                                    d="M5.87357 6.11865C5.83757 6.02532 5.81757 5.92399 5.81757 5.81599C5.81757 5.44665 6.03757 5.10399 6.35491 4.92932L6.11224 4.88932C5.90157 4.85465 5.71224 4.73998 5.58291 4.56932L5.50957 4.47332C4.96424 3.75465 4.10024 3.32532 3.19757 3.32532C2.55357 3.32532 1.92024 3.54265 1.41357 3.93732C0.981574 4.27465 0.705574 4.75865 0.63624 5.30132L0.470907 6.59465C0.430907 6.90799 0.630907 7.19865 0.926907 7.25732C1.08157 7.28932 1.23891 7.25732 1.36824 7.16799C1.49757 7.07999 1.58424 6.94532 1.61091 6.79065L1.78957 5.77599C1.83224 5.53465 1.94557 5.31065 2.11224 5.13465V7.41332L1.80691 10.9187C1.78957 11.1027 1.85224 11.2867 1.97757 11.4227C2.10157 11.5587 2.27891 11.6373 2.46424 11.6373C2.79891 11.6373 3.08157 11.3867 3.12024 11.0533L3.40957 8.57199L3.69757 11.0533C3.73757 11.3867 4.01891 11.6373 4.35357 11.6373C4.53891 11.6373 4.71624 11.5587 4.84157 11.4227C4.96557 11.2867 5.02824 11.1027 5.01224 10.9187L4.70557 7.41332V5.53332C5.05091 5.80932 5.44824 6.00799 5.87357 6.11865Z"
                                    fill="#2885C5"
                                />
                                <path
                                    d="M9.24707 1.70668C9.24707 0.96668 9.84974 0.364014 10.5897 0.364014C11.3311 0.364014 11.9337 0.96668 11.9337 1.70668C11.9337 2.44801 11.3311 3.04935 10.5897 3.04935C9.84974 3.04935 9.24707 2.44801 9.24707 1.70668Z"
                                    fill="#2885C5"
                                />
                                <path
                                    d="M13.0725 7.25866C12.9178 7.29066 12.7605 7.25866 12.6311 7.16933C12.5018 7.08133 12.4151 6.94666 12.3885 6.79199L12.2098 5.77733C12.1671 5.53599 12.0538 5.31199 11.8871 5.13599V7.41333L12.1938 10.9187C12.2098 11.1027 12.1471 11.2867 12.0218 11.4227C11.8978 11.5587 11.7205 11.6373 11.5351 11.6373C11.2005 11.6373 10.9178 11.3867 10.8791 11.0533L10.5898 8.57199L10.3018 11.0533C10.2631 11.3867 9.98047 11.6373 9.64581 11.6373C9.46047 11.6373 9.28314 11.5587 9.15781 11.4227C9.03381 11.2867 8.97114 11.1027 8.98714 10.9187L9.29381 7.41333V5.53333C8.86314 5.87999 8.34981 6.10533 7.80181 6.18799L6.70581 6.35199C6.54314 6.37599 6.38714 6.33466 6.26847 6.23199C6.14981 6.13066 6.08447 5.98266 6.08447 5.81733C6.08447 5.47066 6.36314 5.14266 6.70581 5.08533L7.88714 4.89066C8.09914 4.85599 8.28714 4.74133 8.41647 4.57066L8.48981 4.47466C9.03514 3.75599 9.89914 3.32666 10.8018 3.32666C11.4458 3.32666 12.0791 3.54399 12.5858 3.93866C13.0178 4.27599 13.2938 4.75999 13.3631 5.30266L13.5285 6.59599C13.5685 6.90933 13.3685 7.19999 13.0725 7.25866Z"
                                    fill="#2885C5"
                                />
                            </svg>
                            <span className="text-xs text-gray-600">face to face</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-between w-full mb-3">
                <div className="flex items-center text-sm text-black/70 dark:text-white/50 space-x-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.9375 1.25H12.5V0.5C12.5 0.223875 12.2762 0 12 0C11.7238 0 11.5 0.223875 11.5 0.5V1.25H4.5V0.5C4.5 0.223875 4.27616 0 4 0C3.72384 0 3.5 0.223875 3.5 0.5V1.25H2.0625C0.925219 1.25 0 2.17522 0 3.3125V13.9375C0 15.0748 0.925219 16 2.0625 16H13.9375C15.0748 16 16 15.0748 16 13.9375V3.3125C16 2.17522 15.0748 1.25 13.9375 1.25ZM2.0625 2.25H3.5V2.75C3.5 3.02612 3.72384 3.25 4 3.25C4.27616 3.25 4.5 3.02612 4.5 2.75V2.25H11.5V2.75C11.5 3.02612 11.7238 3.25 12 3.25C12.2762 3.25 12.5 3.02612 12.5 2.75V2.25H13.9375C14.5234 2.25 15 2.72662 15 3.3125V4.5H1V3.3125C1 2.72662 1.47662 2.25 2.0625 2.25ZM13.9375 15H2.0625C1.47662 15 1 14.5234 1 13.9375V5.5H15V13.9375C15 14.5234 14.5234 15 13.9375 15Z"
                            fill="#2885C5"
                        />
                    </svg>

                    <span className="font-bold text-center text-gray-600">
                        {/* @ts-ignore */}
                        <Moment format="dddd MMMM Do">{date}</Moment>
                    </span>
                </div>
            </div>
            <div className="flex justify-between w-full mb-3">
                <div className="flex items-center text-sm text-black/70 dark:text-white/50 space-x-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15V15Z"
                            fill="#2885C5"
                        />
                        <path d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79296V3Z" fill="#2885C5" />
                    </svg>

                    <span className="text-center text-gray-600">
                        {/* @ts-ignore */}
                        <Moment date={time} format="hh:mm a" />
                    </span>
                </div>
            </div>

            {isFuture < 0 && (
                <div className="flex justify-between w-full mb-3">
                    <div className="flex items-center text-sm text-black/70 dark:text-white/50 space-x-2">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.08559 16.7782C6.17796 16.9168 6.33349 17 6.5 17C6.66651 17 6.82204 16.9168 6.91441 16.7782C8.09309 15.0102 9.82918 12.8268 11.039 10.6061C12.0063 8.83054 12.4766 7.31618 12.4766 5.97656C12.4766 2.68109 9.79548 0 6.5 0C3.20452 0 0.523438 2.68109 0.523438 5.97656C0.523438 7.31618 0.993693 8.83054 1.96103 10.6061C3.16993 12.8251 4.90934 15.0139 6.08559 16.7782ZM6.5 0.996094C9.24623 0.996094 11.4805 3.23033 11.4805 5.97656C11.4805 7.14545 11.0499 8.50392 10.1643 10.1296C9.12145 12.0437 7.63336 13.9854 6.5 15.6177C5.36681 13.9856 3.87861 12.0438 2.83574 10.1296C1.95008 8.50392 1.51953 7.14545 1.51953 5.97656C1.51953 3.23033 3.75377 0.996094 6.5 0.996094Z"
                                fill="#2885C5"
                            />
                            <path
                                d="M6.5 8.96484C8.14774 8.96484 9.48828 7.6243 9.48828 5.97656C9.48828 4.32882 8.14774 2.98828 6.5 2.98828C4.85226 2.98828 3.51172 4.32882 3.51172 5.97656C3.51172 7.6243 4.85226 8.96484 6.5 8.96484ZM6.5 3.98438C7.59849 3.98438 8.49219 4.87807 8.49219 5.97656C8.49219 7.07505 7.59849 7.96875 6.5 7.96875C5.40151 7.96875 4.50781 7.07505 4.50781 5.97656C4.50781 4.87807 5.40151 3.98438 6.5 3.98438Z"
                                fill="#2885C5"
                            />
                        </svg>
                        {type == 'video-call' ? (
                            <span className="text-center text-gray-600">Meeting link in email</span>
                        ) : type == 'telephone-call' ? (
                            <span className="text-center text-gray-600">Await Call</span>
                        ) : (
                            <span className="text-center text-gray-600">{address}</span>
                        )}
                    </div>
                </div>
            )}

            {isFuture > 0 ? (
                <button
                    type="button"
                    className="rounded-xl w-full bg-blue-500 text-white py-1"
                    onClick={(): void =>
                        window.location.assign(
                            `https://foremind.sihq.com.au/sso?token=${btoa(
                                JSON.stringify({
                                    first_name: first_name,
                                    last_name: last_name,
                                    email: email,
                                }),
                            )}`,
                        )
                    }
                >
                    Book Again
                </button>
            ) : null}
        </div>
    );
};

export default AppointmentCard;
