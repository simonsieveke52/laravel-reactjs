import { Button, Field } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';

import Helmet from 'react-helmet';
import _ from 'lodash';

const Properties = {
    controller: 'App\\Http\\Controllers\\Users\\Profile',
};

const UserProfileController = Controller(Properties, (): JSX.Element => {
    const { dispatch, dispatching, state, exceptions } = useContext(Context);

    const [update, setUpdate] = useState<string | null>(null);
    const [requesting, setRequesting] = useState<boolean>(false);

    const onSubmit = (e: SyntheticEvent): void => {
        dispatch(`update_${update}`);
        setRequesting(true);
        e.preventDefault();
    };

    const user = (state.user as any) ?? {};
    const employer = state.employer ?? {};
    const locations = state?.locations ?? [];

    useEffect(() => {
        if (update && requesting && !dispatching(`update_${update}`) && Object.values(exceptions).length === 0) {
            setRequesting(false);
            setUpdate(null);
        }
    }, [update, requesting, dispatching(`update_${update}`)]);

    return (
        <form {...{ onSubmit }} className="w-full flex flex-1">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Change Details - Foremind</title>
            </Helmet>
            <div className="flex w-full flex-1 flex-wrap lg:flex-nowrap space-y-3 lg:space-y-0 lg:space-x-6">
                <div className="w-full lg:w-2/5 flex items-start p-8 lg:p-20 bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-200">
                    <svg viewBox="0 0 288 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_9_348)">
                            <path
                                d="M288 102.577C288 141.615 263.252 174.877 228.589 187.533C223.316 189.463 217.873 190.891 212.332 191.8C197.088 194.299 181.459 192.88 166.915 187.676C132.032 175.124 107.103 141.749 107.12 102.557C107.12 52.6382 147.612 12.1531 197.56 12.1531C216.437 12.1257 234.845 18.0302 250.182 29.0322C273.08 45.4344 288 72.2628 288 102.577Z"
                                fill="#E5E5E5"
                            />
                            <path
                                d="M228.589 187.533C223.316 189.463 217.873 190.891 212.332 191.8C197.088 194.299 181.459 192.88 166.915 187.676L171.091 170.92L171.343 169.915L179.867 169.947L222.686 170.101L223.234 171.72L228.589 187.533Z"
                                fill="#2F2E41"
                            />
                            <path d="M78.5598 0H0V88.8767H78.5598V0Z" fill="#E6E6E6" />
                            <path d="M77.0218 1.88026H1.40073V86.9966H77.0218V1.88026Z" fill="white" />
                            <path
                                d="M39.28 83.9702C41.6211 83.9702 43.5189 82.0728 43.5189 79.7321C43.5189 77.3915 41.6211 75.494 39.28 75.494C36.939 75.494 35.0411 77.3915 35.0411 79.7321C35.0411 82.0728 36.939 83.9702 39.28 83.9702Z"
                                fill="#E6E6E6"
                            />
                            <path d="M38.5639 32.0096H14.2172V34.4998H38.5639V32.0096Z" fill="#E6E6E6" />
                            <path d="M50.963 39.4717H14.2172V41.9619H50.963V39.4717Z" fill="#2B77AE" />
                            <path d="M47.356 46.9807H14.2172V49.4709H47.356V46.9807Z" fill="#E6E6E6" />
                            <path d="M65.3906 54.2913H14.2172V56.7815H65.3906V54.2913Z" fill="#2B77AE" />
                            <path d="M56.4543 61.2537H14.7491V63.7439H56.4543V61.2537Z" fill="#E6E6E6" />
                            <path
                                d="M111.71 144.62C112.008 144.927 112.282 145.257 112.529 145.607L150.928 144.667L155.407 136.483L168.644 141.628L162.122 156.887C161.595 158.119 160.682 159.148 159.521 159.818C158.36 160.488 157.012 160.763 155.681 160.603L112.297 155.363C111.274 156.658 109.881 157.611 108.302 158.095C106.724 158.579 105.036 158.572 103.462 158.073C101.888 157.574 100.503 156.608 99.4918 155.304C98.4804 153.999 97.8903 152.417 97.7999 150.769C97.7095 149.121 98.1232 147.484 98.9858 146.077C99.8484 144.67 101.119 143.558 102.629 142.89C104.139 142.223 105.816 142.03 107.438 142.339C109.06 142.648 110.549 143.443 111.708 144.619L111.71 144.62Z"
                                fill="#9F616A"
                            />
                            <path
                                d="M163.392 97.8877L181.362 91.9995L186.64 84.7626L212.324 86.2823L216.094 94.7273L229.79 101.198L227.685 140.278L224.084 176.852C205.569 167.266 171.016 174.574 170.713 174.693L163.392 97.8877Z"
                                fill="#2B77AE"
                            />
                            <path
                                d="M167.234 150.785L148.955 143.474L149.033 143.148C149.112 142.82 156.891 110.317 157.924 105.094C159 99.6525 162.931 98.1479 163.098 98.0868L163.22 98.0418L170.454 100.243L173.631 125.2L167.234 150.785Z"
                                fill="#2B77AE"
                            />
                            <path
                                d="M206.7 175.244C207.128 175.234 207.557 175.258 207.981 175.315L233.4 146.524L230.443 137.677L243.217 131.471L249.974 146.627C250.519 147.851 250.653 149.22 250.355 150.527C250.057 151.834 249.343 153.009 248.32 153.875L214.98 182.118C215.234 183.749 214.986 185.419 214.268 186.905C213.549 188.391 212.396 189.624 210.96 190.439C209.524 191.253 207.874 191.612 206.23 191.466C204.585 191.32 203.024 190.677 201.754 189.623C200.484 188.568 199.565 187.152 199.119 185.563C198.673 183.974 198.722 182.286 199.259 180.726C199.796 179.165 200.796 177.804 202.125 176.825C203.454 175.846 205.049 175.295 206.7 175.244Z"
                                fill="#9F616A"
                            />
                            <path
                                d="M231.371 149.327L220.768 124.39L224.903 107.02L229.359 101.392C229.686 101.252 230.037 101.182 230.392 101.185C230.747 101.189 231.098 101.266 231.421 101.411C233.066 102.072 234.463 104.099 235.581 107.435L245.518 135.734L231.371 149.327Z"
                                fill="#2B77AE"
                            />
                            <path
                                d="M176.359 75.5224V56.7225C176.348 53.4143 176.989 50.1363 178.245 47.0757C179.501 44.0151 181.348 41.2318 183.68 38.8847C186.012 36.5377 188.783 34.6729 191.836 33.3968C194.889 32.1206 198.163 31.4582 201.472 31.4472C204.781 31.4363 208.059 32.077 211.121 33.3329C214.182 34.5888 216.965 36.4352 219.313 38.7667C221.66 41.0982 223.526 43.8692 224.802 46.9214C226.078 49.9737 226.741 53.2474 226.752 56.5556C226.752 56.6112 226.752 56.6669 226.752 56.7225V75.5224C226.751 76.4195 226.394 77.2797 225.759 77.9141C225.125 78.5485 224.265 78.9054 223.367 78.9064H179.744C178.846 78.9054 177.986 78.5485 177.351 77.9141C176.717 77.2797 176.36 76.4195 176.359 75.5224Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M196.378 78.4684C206.58 78.4684 214.851 70.1992 214.851 59.9987C214.851 49.7982 206.58 41.529 196.378 41.529C186.175 41.529 177.905 49.7982 177.905 59.9987C177.905 70.1992 186.175 78.4684 196.378 78.4684Z"
                                fill="#9F616A"
                            />
                            <path
                                d="M170.398 58.2265C170.404 52.9431 172.506 47.8778 176.242 44.1419C179.979 40.406 185.045 38.3045 190.33 38.2986H194.091C199.375 38.3045 204.441 40.406 208.178 44.1419C211.914 47.8779 214.016 52.9432 214.022 58.2265V58.6025H206.074L203.363 51.0124L202.821 58.6025H198.714L197.347 54.7735L197.073 58.6025H170.398V58.2265Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M194.56 81.0206C194.187 80.5154 193.964 79.9152 193.917 79.289C193.87 78.6627 194.001 78.036 194.295 77.4809C198.28 69.9024 203.86 55.8985 196.454 47.2623L195.922 46.6424H217.424V78.9181L197.892 82.3638C197.694 82.3988 197.494 82.4165 197.293 82.4167C196.76 82.4167 196.234 82.2902 195.759 82.0477C195.284 81.8051 194.874 81.4534 194.561 81.0214L194.56 81.0206Z"
                                fill="#2F2E41"
                            />
                            <path
                                d="M39.2117 6.92207C37.4289 6.92198 35.6861 7.45046 34.2037 8.44069C32.7213 9.43091 31.5658 10.8384 30.8835 12.4852C30.2011 14.132 30.0225 15.9441 30.3703 17.6923C30.718 19.4406 31.5764 21.0465 32.837 22.307C34.0976 23.5674 35.7037 24.4259 37.4522 24.7737C39.2008 25.1216 41.0132 24.9432 42.6604 24.2611C44.3075 23.5791 45.7154 22.424 46.7059 20.942C47.6965 19.4599 48.2253 17.7175 48.2254 15.935V15.9345C48.2254 14.751 47.9922 13.5791 47.5392 12.4856C47.0862 11.3922 46.4222 10.3986 45.5852 9.56176C44.7482 8.72487 43.7544 8.06102 42.6608 7.6081C41.5672 7.15519 40.395 6.92207 39.2113 6.92207H39.2117ZM39.2117 9.62557C39.7465 9.62556 40.2693 9.78412 40.714 10.0812C41.1586 10.3782 41.5052 10.8005 41.7099 11.2945C41.9145 11.7885 41.9681 12.332 41.8638 12.8565C41.7594 13.3809 41.5019 13.8626 41.1237 14.2407C40.7456 14.6188 40.2638 14.8763 39.7393 14.9806C39.2147 15.0849 38.6711 15.0314 38.177 14.8268C37.6829 14.6222 37.2606 14.2756 36.9634 13.8311C36.6663 13.3865 36.5077 12.8638 36.5077 12.3291C36.5077 11.6121 36.7926 10.9244 37.2997 10.4174C37.8068 9.9104 38.4946 9.62557 39.2117 9.62557ZM39.2117 22.6414C38.1434 22.6365 37.0925 22.3711 36.15 21.8682C35.2075 21.3654 34.402 20.6402 33.8033 19.7556C33.8467 17.9531 37.4089 16.9609 39.2117 16.9609C41.0145 16.9609 44.5767 17.9531 44.6202 19.7556C44.0208 20.6395 43.2151 21.3642 42.2728 21.867C41.3305 22.3698 40.2798 22.6356 39.2117 22.6414Z"
                                fill="#2B77AE"
                            />
                            <path
                                d="M39.3165 81.3567C43.03 74.5528 51.926 70.2439 59.2032 74.1278C62.4787 75.8757 65.0826 78.9676 65.9092 82.6221C66.8684 86.8673 64.8472 90.9153 62.7607 94.4818C61.6283 96.4177 60.3874 98.3141 59.4501 100.356C58.4796 102.471 57.786 104.914 58.5166 107.215C59.1744 109.287 60.8237 110.794 62.6297 111.902C64.6231 113.079 66.7433 114.025 68.9499 114.725C73.492 116.235 78.2829 116.855 83.0599 116.55C85.434 116.389 87.7882 116.008 90.0923 115.413C92.5432 114.788 94.9484 113.997 97.4034 113.386C101.502 112.368 106.176 111.861 110.063 113.906C113.839 115.893 115.528 120.049 116.051 124.092C117.016 131.558 114.056 139.305 108.71 144.533C106.145 147.042 102.918 149.114 99.4029 149.962C96.3359 150.702 92.3977 150.654 89.9569 148.362C87.2333 145.803 87.874 141.701 90.0372 139.002C92.7983 135.558 97.476 134.73 101.65 134.647C106.399 134.551 111.143 135.258 115.888 134.819C118.205 134.638 120.478 134.09 122.621 133.195C124.506 132.366 126.225 131.203 127.696 129.762C130.625 126.916 132.601 123.125 133.584 119.183C134.767 114.442 134.509 109.46 133.591 104.699C133.101 102.244 132.471 99.8185 131.703 97.4356C131.386 96.43 129.798 96.8602 130.117 97.8727C132.946 106.839 134.522 117.208 129.058 125.533C126.797 129.063 123.274 131.599 119.207 132.622C114.478 133.798 109.515 133.217 104.707 133.042C100.135 132.876 95.115 133.055 91.1959 135.717C87.9809 137.901 85.7322 142.054 86.7041 145.975C87.6411 149.757 91.2757 151.675 94.9108 151.97C98.7249 152.281 102.478 151.001 105.681 149C112.345 144.837 116.775 137.515 117.702 129.753C118.185 125.708 117.694 121.351 115.859 117.68C114.892 115.693 113.388 114.016 111.516 112.841C109.65 111.697 107.494 111.134 105.329 110.934C100.41 110.482 95.6842 112.17 91.0181 113.462C88.6344 114.153 86.1911 114.619 83.7204 114.854C81.3223 115.053 78.9105 115.014 76.5202 114.737C74.1484 114.457 71.811 113.939 69.5435 113.189C67.3215 112.502 65.194 111.541 63.2105 110.326C61.4606 109.208 59.9472 107.605 59.8612 105.422C59.7677 103.054 60.9618 100.839 62.0975 98.843C64.3413 94.8997 67.1128 91.0427 67.698 86.4264C68.2104 82.3884 66.5853 78.4084 63.7789 75.5282C62.3724 74.0664 60.6792 72.9106 58.8052 72.1333C56.9313 71.356 54.917 70.974 52.8885 71.0112C48.7247 71.1304 44.738 72.9407 41.6753 75.7211C40.1564 77.1009 38.8782 78.7243 37.8933 80.5245C37.386 81.4537 38.8054 82.2842 39.3132 81.3542L39.3165 81.3567Z"
                                fill="#3F3D56"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_9_348">
                                <rect width="288" height="193" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="w-full lg:w-3/5 flex flex-col  p-8 lg:p-20">
                    <div className="-mx-6 flex-1">
                        <div className="w-full px-6">
                            <div className="font-bold text-2xl pb-4">Profile</div>
                            <div className="w-full mt-3">
                                <div className="font-bold text-base">Your details</div>
                                <div className="font-light text-sm mb-5">Your customer details</div>

                                <div className="flex flex-col divide-y divide-gray-300 text-sm">
                                    <div>
                                        <div
                                            className={`my-3 -mx-3 px-3 flex flex-wrap rounded-xl ${
                                                update === 'name' ? 'bg-gray-100 py-3' : ''
                                            }`}
                                        >
                                            <div className="order-1 flex-1 lg:flex-none lg:w-32 font-semibold text-gray-500">
                                                Contact Info
                                            </div>
                                            <div className="order-3 w-full lg:order-2 lg:flex-1  text-gray-700">
                                                {update !== 'name' ? (
                                                    <span className="flex flex-col">
                                                        <span className="font-bold">
                                                            {user?.first_name ?? '-'} {user?.last_name ?? '-'}
                                                        </span>
                                                        <span>{user?.address?.address ?? '-'}</span>
                                                        <span>{user?.phone?.number ?? '-'}</span>
                                                    </span>
                                                ) : (
                                                    <div className="flex flex-col  space-y-2">
                                                        <Field type="text" name="user.first_name" label="First Name" />
                                                        <Field type="text" name="user.last_name" label="Last Name" />
                                                        <Field type="text" name="user.address" label="Address" />
                                                        <Field type="text" name="user.phone" label="Phone" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="order-2 lg:order-3 flex justify-end pl-10">
                                                {update !== 'name' ? (
                                                    <span className="flex items-start flex-1 ">
                                                        <button
                                                            type="button"
                                                            onClick={(): void => setUpdate('name')}
                                                            className="text-blue-500 hover:text-blue-700 hover:underline float-right"
                                                        >
                                                            Update
                                                        </button>
                                                    </span>
                                                ) : (
                                                    <div className="flex items-start space-x-2 flex-1">
                                                        <span>
                                                            <Button
                                                                variant="standard"
                                                                type="button"
                                                                size="xs"
                                                                onClick={(): void => setUpdate(null)}
                                                                disabled={dispatching('update_name')}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </span>
                                                        <span>
                                                            <Button
                                                                variant="primary"
                                                                type="submit"
                                                                size="xs"
                                                                disabled={dispatching('update_name')}
                                                            >
                                                                {dispatching('update_name') ? 'saving...' : 'Save'}
                                                            </Button>
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className={`my-3 -mx-3 px-3 flex flex-wrap rounded-xl ${
                                                update === 'timezone' ? 'bg-gray-100 py-3' : ''
                                            }`}
                                        >
                                            <div className="order-1 flex-1 lg:flex-none lg:w-32 font-semibold text-gray-500">
                                                Timezone
                                            </div>
                                            <div className="order-3 w-full lg:order-2 lg:flex-1   text-gray-700">
                                                {update !== 'timezone' ? (
                                                    <span>Canberra / Australia</span>
                                                ) : (
                                                    <div className="flex flex-col  space-y-2">
                                                        <Field type="timezone" name="user.timezone" label="Timezone" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="order-2 lg:order-3 flex justify-end pl-10">
                                                {update !== 'timezone' ? (
                                                    <span className="flex items-center flex-1 ">
                                                        <button
                                                            type="button"
                                                            onClick={(): void => setUpdate('timezone')}
                                                            className="text-blue-500 hover:text-blue-700 hover:underline float-right"
                                                        >
                                                            Change
                                                        </button>
                                                    </span>
                                                ) : (
                                                    <div className="flex items-start space-x-2 flex-1">
                                                        <span>
                                                            <Button
                                                                variant="standard"
                                                                type="button"
                                                                size="xs"
                                                                onClick={(): void => setUpdate(null)}
                                                                disabled={dispatching('update_timezone')}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </span>
                                                        <span>
                                                            <Button
                                                                variant="primary"
                                                                type="submit"
                                                                size="xs"
                                                                disabled={dispatching('update_timezone')}
                                                            >
                                                                {dispatching('update_timezone') ? 'saving...' : 'Save'}
                                                            </Button>
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className={`my-3 -mx-3 px-3 flex flex-wrap  rounded-xl ${
                                                update === 'email' ? 'bg-gray-100 py-3' : ''
                                            }`}
                                        >
                                            <div className="order-1 flex-1 lg:flex-none lg:w-32 font-semibold text-gray-500">
                                                Email
                                            </div>
                                            <div className="order-3 w-full lg:order-2 lg:flex-1  text-gray-700">
                                                {update !== 'email' ? (
                                                    <span>{user?.email ?? '-'}</span>
                                                ) : (
                                                    <div className="flex flex-col  space-y-2">
                                                        <Field type="text" name="user.email" label="Email" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="order-2 lg:order-3 flex justify-end pl-10">
                                                {update !== 'email' ? (
                                                    <span className="flex items-center flex-1 ">
                                                        <button
                                                            type="button"
                                                            onClick={(): void => setUpdate('email')}
                                                            className="text-blue-500 hover:text-blue-700 hover:underline float-right"
                                                        >
                                                            Change
                                                        </button>
                                                    </span>
                                                ) : (
                                                    <div className="flex items-start space-x-2 flex-1">
                                                        <span>
                                                            <Button
                                                                variant="standard"
                                                                type="button"
                                                                size="xs"
                                                                onClick={(): void => setUpdate(null)}
                                                                disabled={dispatching('update_email')}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </span>
                                                        <span>
                                                            <Button
                                                                variant="primary"
                                                                type="submit"
                                                                size="xs"
                                                                disabled={dispatching('update_email')}
                                                            >
                                                                {dispatching('update_email') ? 'saving...' : 'Save'}
                                                            </Button>
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className={`my-3 -mx-3 px-3 flex flex-wrap  rounded-xl ${
                                                update === 'password' ? 'bg-gray-100 py-3' : ''
                                            }`}
                                        >
                                            <div className="order-1 flex-1 lg:flex-none lg:w-32 font-semibold text-gray-500">
                                                Password
                                            </div>
                                            <div className="order-3 w-full lg:order-2 lg:flex-1  text-gray-700">
                                                {update !== 'password' ? (
                                                    <span>Password</span>
                                                ) : (
                                                    <div className="flex flex-col  space-y-2">
                                                        <Field
                                                            type="password"
                                                            name="password_current"
                                                            label="Current password"
                                                        />
                                                        <Field
                                                            type="password"
                                                            name="password_new"
                                                            label="New Password"
                                                        />
                                                        <Field
                                                            type="password"
                                                            name="password_new_confirmation"
                                                            label="New Password (Confirm)"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="order-2 lg:order-3 flex justify-end pl-10">
                                                {update !== 'password' ? (
                                                    <span className="flex items-center flex-1 ">
                                                        <button
                                                            type="button"
                                                            onClick={(): void => setUpdate('password')}
                                                            className="text-blue-500 hover:text-blue-700 hover:underline float-right"
                                                        >
                                                            Change
                                                        </button>
                                                    </span>
                                                ) : (
                                                    <div className="flex items-start space-x-2 flex-1">
                                                        <span>
                                                            <Button
                                                                variant="standard"
                                                                type="button"
                                                                size="xs"
                                                                onClick={(): void => setUpdate(null)}
                                                                disabled={dispatching('update_password')}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </span>
                                                        <span>
                                                            <Button
                                                                variant="primary"
                                                                type="submit"
                                                                size="xs"
                                                                disabled={dispatching('update_password')}
                                                            >
                                                                {dispatching('update_password') ? 'saving...' : 'Save'}
                                                            </Button>
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-16">
                                <div className="font-bold text-base">Account details</div>
                                <div className="font-light text-sm mb-5">Your customer details</div>

                                <div className="flex flex-col divide-y divide-gray-300 text-sm">
                                    <div>
                                        <div
                                            className={`my-3 -mx-3 px-3 flex flex-wrap rounded-xl ${
                                                update === 'organisation' ? 'bg-gray-100 py-3' : ''
                                            }`}
                                        >
                                            <div className="order-1 flex-1 lg:flex-none lg:w-32 font-semibold text-gray-500">
                                                Organisation
                                            </div>
                                            <div className="order-3 w-full lg:order-2 lg:flex-1  text-gray-700">
                                                {update !== 'organisation' ? (
                                                    <span>{employer?.name ?? '-'}</span>
                                                ) : (
                                                    <div className="flex flex-col  space-y-2">
                                                        Your organisation is the employer that you registered this
                                                        account with, If you have moved employers please contact{' '}
                                                        <a
                                                            href="mailto:support@foremind.com.au"
                                                            className="text-blue-500 hover:underline"
                                                        >
                                                            support@foremind.com.au
                                                        </a>{' '}
                                                        to have your account switched from this employer to your new
                                                        employer.
                                                    </div>
                                                )}
                                            </div>
                                            <div className="order-2 lg:order-3 flex justify-end pl-10">
                                                {update !== 'organisation' ? (
                                                    <span className="flex items-center flex-1 ">
                                                        <button
                                                            type="button"
                                                            onClick={(): void => setUpdate('organisation')}
                                                            className="text-blue-500 hover:text-blue-700 hover:underline float-right"
                                                        >
                                                            How to change
                                                        </button>
                                                    </span>
                                                ) : (
                                                    <div className="flex items-start space-x-2 flex-1">
                                                        <span>
                                                            <Button
                                                                variant="standard"
                                                                type="button"
                                                                size="xs"
                                                                onClick={(): void => setUpdate(null)}
                                                                disabled={dispatching('update_organisation')}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className={`my-3 -mx-3 px-3 flex flex-wrap rounded-xl ${
                                                update === 'location' ? 'bg-gray-100 py-3' : ''
                                            }`}
                                        >
                                            <div className="order-1 flex-1 lg:flex-none lg:w-32 font-semibold text-gray-500">
                                                Location
                                            </div>
                                            <div className="order-3 w-full lg:order-2 lg:flex-1 text-gray-700">
                                                {update !== 'location' ? (
                                                    <span>{(user.locations ?? [])[0]?.name ?? '-'}</span>
                                                ) : (
                                                    <div className="flex flex-col  space-y-2">
                                                        <Field
                                                            type="select"
                                                            name="location_id"
                                                            label="Location:"
                                                            options={(locations ?? []).map((location: any) => ({
                                                                text: location.name,
                                                                value: location.id,
                                                            }))}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="order-2 lg:order-3 flex justify-end pl-10">
                                                {update !== 'location' ? (
                                                    <span className="flex items-center flex-1 ">
                                                        <button
                                                            type="button"
                                                            onClick={(): void => setUpdate('location')}
                                                            className="text-blue-500 hover:text-blue-700 hover:underline float-right"
                                                        >
                                                            Change
                                                        </button>
                                                    </span>
                                                ) : (
                                                    <div className="flex items-start space-x-2 flex-1">
                                                        <span>
                                                            <Button
                                                                variant="standard"
                                                                type="button"
                                                                size="xs"
                                                                onClick={(): void => setUpdate(null)}
                                                                disabled={dispatching('update_location')}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </span>
                                                        <span>
                                                            <Button
                                                                variant="primary"
                                                                type="submit"
                                                                size="xs"
                                                                disabled={dispatching('update_location')}
                                                            >
                                                                {dispatching('update_location') ? 'saving...' : 'Save'}
                                                            </Button>
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
});

export default UserProfileController;
