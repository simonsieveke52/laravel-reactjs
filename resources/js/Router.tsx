import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import AppointmentsController from './Controllers/Appointments/Appointments';
import AuthenticationLayout from './Layouts/Authentication';
import Base from './Layouts/Base';
import ContentCreateController from './Controllers/Resources/Create';
import E404 from './Controllers/Exceptions/E404';
import EmployerCreateController from './Controllers/Employers/Create';
import EmployerDeleteController from './Controllers/Employers/Delete';
import EmployerRenameController from './Controllers/Employers/Rename';
import EmployersController from './Controllers/Employers/Employers';
import ForgotController from './Controllers/Authentication/Forgot';
import { Helmet } from 'react-helmet';
import HomeController from './Controllers/Home/Home';
import LocationCreateController from './Controllers/Locations/Create';
import LocationDeleteController from './Controllers/Locations/Delete';
import LocationEditController from './Controllers/Locations/Edit';
import LocationSendController from './Controllers/Locations/Send';
import LocationShareController from './Controllers/Locations/Share';
import { LocationState } from './Definitions/LocationState';
import LocationsController from './Controllers/Locations/Locations';
import LoginController from './Controllers/Authentication/Login';
import LogoutController from './Controllers/Authentication/Logout';
import PortalLayout from './Layouts/Portal';
import React from 'react';
import { Reactive } from '@sihq/ui-components';
import RecoverController from './Controllers/Authentication/Recover';
import RegisterController from './Controllers/Authentication/Register';
import ResourceController from './Controllers/Resources/Resource';
import ResourceDeleteController from './Controllers/Resources/Delete';
import ResourcesController from './Controllers/Resources/Resources';
import CheckInController from './Controllers/CheckIn/CheckIn';
import CheckInSubmitController from './Controllers/CheckIn/Submit';
import CheckInViewController from './Controllers/CheckIn/View';
import CheckInDeleteController from './Controllers/CheckIn/Delete';
import SupportCreateController from './Controllers/Support/Create';
import TermsServiceController from './Controllers/Terms/Create';
import UsageController from './Controllers/Usage/Usage';
import UserCreateController from './Controllers/Users/Create';
import UserDeleteController from './Controllers/Users/Delete';
import UserEditController from './Controllers/Users/Edit';
import UserImpersonateController from './Controllers/Users/Impersonate';
import UserMoveController from './Controllers/Users/Move';
import UserProfileController from './Controllers/Users/Profile';
import UsersController from './Controllers/Users/Users';
import UsersManagementController from './Controllers/Users/Management';

const Router = (): JSX.Element => {
    const location = useLocation();
    const { from } = (location?.state as LocationState) ?? {};
    return (
        <>
            <Routes location={from || location}>
                <Route path="/" element={<Base />}>
                    <Route path="/" element={<PortalLayout />}>
                        <Route index element={<HomeController />} />
                        <Route path="/appointments" element={<AppointmentsController />} />
                        <Route path="/resources" element={<ResourcesController />} />
                        <Route path="/resources/create" element={<ContentCreateController />} />
                        <Route path="/resources/:resourceId" element={<ResourceController />} />
                        <Route path="/resources/:resourceId/edit" element={<ContentCreateController />} />
                        <Route path="/usage" element={<UsageController />} />
                        <Route path="/locations" element={<LocationsController />} />
                        <Route path="/check-in" element={<CheckInController />} />
                        <Route path="/check-in/submit" element={<CheckInSubmitController />} />
                        <Route path="/employers" element={<EmployersController />} />
                        <Route path="/users" element={<UsersController />} />
                        <Route path="/user/profile" element={<UserProfileController />} />
                    </Route>
                    <Route path="/" element={<AuthenticationLayout />}>
                        <Route path="/login" element={<LoginController />} />
                        <Route path="/logout" element={<LogoutController />} />
                        <Route path="/forgot" element={<ForgotController />} />
                        <Route path="/forgot/:token" element={<RecoverController />} />
                        <Route path="/register/:locationId" element={<RegisterController />} />
                    </Route>
                    <Route path="*" element={<E404 />} />
                </Route>
            </Routes>
            {/* Modals */}
            <Routes>
                <Route path="/locations/create" element={<LocationCreateController />} />
                <Route path="/locations/:locationId/edit" element={<LocationEditController />} />
                <Route path="/locations/:locationId/delete" element={<LocationDeleteController />} />
                <Route path="/locations/:locationId/send" element={<LocationSendController />} />
                <Route path="/locations/:locationId/share" element={<LocationShareController />} />
                {/* Resources */}
                <Route path="/resources/:resourceId/delete" element={<ResourceDeleteController />} />
                {/* Employers */}
                <Route path="/employers/create" element={<EmployerCreateController />} />
                <Route path="/employers/:employerId/rename" element={<EmployerRenameController />} />
                <Route path="/employers/:employerId/delete" element={<EmployerDeleteController />} />

                {/* Users */}
                <Route path="/users/create" element={<UserCreateController />} />
                <Route path="/users/:userId/delete" element={<UserDeleteController />} />
                <Route path="/users/:userId/edit" element={<UserEditController />} />
                <Route path="/users/:userId/impersonate" element={<UserImpersonateController />} />
                <Route path="/users/management" element={<UsersManagementController />} />
                <Route path="/users/:userId/move" element={<UserMoveController />} />

                {/* check In */}
                <Route path="/check-in/:checkId/view" element={<CheckInViewController />} />
                <Route path="/check-in/:checkId/delete" element={<CheckInDeleteController />} />

                {/* Support */}
                <Route path="/support" element={<SupportCreateController />} />
                {/* Terms Of Service */}
                <Route path="/terms-of-service" element={<TermsServiceController />} />
            </Routes>
        </>
    );
};

export default (): JSX.Element => {
    return (
        <BrowserRouter>
            <Helmet>
                <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
                <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#3b82f6" />
            </Helmet>
            <Reactive debug>
                <Router />
            </Reactive>
        </BrowserRouter>
    );
};
