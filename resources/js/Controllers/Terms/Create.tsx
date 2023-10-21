import { Context, Controller } from '@sihq/ui-components';
import React, { SyntheticEvent, useContext } from 'react';
import Helmet from 'react-helmet';
import Logo from '../../Components/Logo';

const Properties = {
    controller: 'App\\Http\\Controllers\\Terms\\Create',
};
const TermsServiceController = Controller(Properties, (): JSX.Element => {
    return (
        <div className="flex min-h-full flex-col flex-grow bg-gray-100 w-full">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Terms of Service</title>
            </Helmet>
            <div className="bg bg-blue-500 pb-24">
                <div className="container mx-auto flex flex-col lg:space-y-8 px-5 md:my-8">
                    <div className="flex items-center justify-between py-5 md:py-0 relative z-40">
                        <div>
                            <a href="/" className=" h-5 flex  md:transform md:relative ">
                                <Logo className={`text-white h-5`} />
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:flex bg-white bg-opacity-50 h-px w-full"></div>
                </div>
            </div>
            <div className="flex flex-1">
                <div className="container mx-auto -mt-24 bg-white rounded-xl shadow-sm overflow-hidden min-h-full flex border border-gray-200">
                    <div className="w-full flex flex-col p-8 lg:p-20">
                        <div className="flex-1">
                            <div className="w-full px-6 mb-4">
                                <div className="font-bold text-4xl pb-4 text-center	font-sans">
                                    FOREMIND TERMS AND CONDITIONS
                                </div>
                            </div>
                            <div>
                                <ul className="list-decimal">
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4">
                                        <h1 className="font-bold text-2xl mb-4 font-sans">About the Website</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 font-sans mb-2">
                                                Welcome to Foremind (the <span className="font-bold">'Website'</span>).
                                                The Website provides counselling and mental health services (the{' '}
                                                <span className="font-bold">'Services'</span>).
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 font-sans mb-2">
                                                The Website is operated by SIHQ Pty Ltd (ABN 38 615 400 612). Access to
                                                and use of the Website, or any of its associated Products or Services,
                                                is provided by SIHQ Pty Ltd. Please read these terms and conditions (the
                                                <span className="font-bold"> 'Terms'</span>) carefully. By using,
                                                browsing and/or reading the Website, this signifies that you have read,
                                                understood and agree to be bound by the Terms. If you do not agree with
                                                the Terms, you must cease usage of the Website, or any of Services,
                                                immediately.
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 font-sans mb-2">
                                                SIHQ Pty Ltd reserves the right to review and change any of the Terms by
                                                updating this page at its sole discretion. When SIHQ Pty Ltd updates the
                                                Terms, it will use reasonable endeavours to provide you with notice of
                                                updates to the Terms. Any changes to the Terms take immediate effect
                                                from the date of their publication. Before you continue, we recommend
                                                you keep a copy of the Terms for your records.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4">
                                        <h1 className="font-bold text-2xl mb-4 font-sans">Acceptance of the Terms</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mb-2 font-sans">
                                                You accept the Terms by remaining on the Website. You may also accept
                                                the Terms by clicking to accept or agree to the Terms where this option
                                                is made available to you by SIHQ Pty Ltd in the user interface.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4">
                                        <h1 className="font-bold text-2xl mb-4 font-sans">
                                            Registration to use the Services
                                        </h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mb-2 font-sans">
                                                In order to access the Services, you must first register for an account
                                                through the Website (the <span className="font-bold"> 'Account'</span>).
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mb-2 font-sans">
                                                As part of the registration process, or as part of your continued use of
                                                the Services, you may be required to provide personal information about
                                                yourself (such as identification or contact details), including:
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        Email address
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        Preferred username
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        Phone number
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        Password
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        First name, last name, organisation, address
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6  mb-2 font-sans">
                                                You warrant that any information you give to SIHQ Pty Ltd in the course
                                                of completing the registration process will always be accurate, correct
                                                and up to date.
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mb-2 font-sans">
                                                Once you have completed the registration process, you will be a
                                                registered member of the Website{' '}
                                                <span className="font-bold"> 'Member'</span> and agree to be bound by
                                                the Terms.
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mb-2 font-sans">
                                                You may not use the Services and may not accept the Terms if:
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        you are not of legal age to form a binding contract with SIHQ
                                                        Pty Ltd; or
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        you are a person barred from receiving the Services under the
                                                        laws of Australia or other countries including the country in
                                                        which you are resident or from which you use the Services.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4 font-sans">
                                        <h1 className="font-bold text-2xl mb-4">Your obligations as a Member</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 font-sans">
                                                As a Member, you agree to comply with the following:
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        you will use the Services only for purposes that are permitted
                                                        by:
                                                        <ul className="list-none">
                                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                                (A) the Terms; and
                                                            </li>
                                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                                (B) any applicable law, regulation or generally accepted
                                                                practices or guidelines in the relevant jurisdictions;
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        you have the sole responsibility for protecting the
                                                        confidentiality of your password and/or email address. Use of
                                                        your password by any other person may result in the immediate
                                                        cancellation of the Services;
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        any use of your registration information by any other person, or
                                                        third parties, is strictly prohibited. You agree to immediately
                                                        notify SIHQ Pty Ltd of any unauthorised use of your password or
                                                        email address or any breach of security of which you have become
                                                        aware;
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        access and use of the Website is limited, non-transferable and
                                                        allows for the sole use of the Website by you for the purposes
                                                        of SIHQ Pty Ltd providing the Services;
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        you will not use the Services or the Website in connection with
                                                        any commercial endeavours except those that are specifically
                                                        endorsed or approved by the management of SIHQ Pty Ltd;
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        you will not use the Services or Website for any illegal and/or
                                                        unauthorised use which includes collecting email addresses of
                                                        Members by electronic or other means for the purpose of sending
                                                        unsolicited email or unauthorised framing of or linking to the
                                                        Website;
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        you agree that commercial advertisements, affiliate links, and
                                                        other forms of solicitation may be removed from the Website
                                                        without notice and may result in termination of the Services.
                                                        Appropriate legal action will be taken by SIHQ Pty Ltd for any
                                                        illegal or unauthorised use of the Website; and
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        you acknowledge and agree that any automated use of the Website
                                                        or its Services is prohibited.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4 font-sans">
                                        <h1 className="font-bold text-2xl mb-4">Copyright and Intellectual Property</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                The Website, the Services and all of the related products of SIHQ Pty
                                                Ltd are subject to copyright. The material on the Website is protected
                                                by copyright under the laws of Australia and through international
                                                treaties. Unless otherwise indicated, all rights (including copyright)
                                                in the Services and compilation of the Website (including but not
                                                limited to text, graphics, logos, button icons, video images, audio
                                                clips, Website, code, scripts, design elements and interactive features)
                                                or the Services are owned or controlled for these purposes, and are
                                                reserved by SIHQ Pty Ltd or its contributors.
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                All trademarks, service marks and trade names are owned, registered
                                                and/or licensed by SIHQ Pty Ltd, who grants to you a worldwide,
                                                non-exclusive, royalty-free, revocable license whilst you are a Member
                                                to:
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        use the Website pursuant to the Terms;
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        copy and store the Website and the material contained in the
                                                        Website in your device's cache memory; and
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        print pages from the Website for your own personal and
                                                        non-commercial use.
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mt-4">
                                                        SIHQ Pty Ltd does not grant you any other rights whatsoever in
                                                        relation to the Website or the Services. All other rights are
                                                        expressly reserved by SIHQ Pty Ltd.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mt-4">
                                                SIHQ Pty Ltd retains all rights, title and interest in and to the
                                                Website and all related Services. Nothing you do on or in relation to
                                                the Website will transfer any:
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        business name, trading name, domain name, trade mark, industrial
                                                        design, patent, registered design or copyright, or
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        a right to use or exploit a business name, trading name, domain
                                                        name, trade mark or industrial design, or
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        a thing, system or process that is the subject of a patent,
                                                        registered design or copyright (or an adaptation or modification
                                                        of such a thing, system or process),to you.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mt-4">
                                                You may not, without the prior written permission of SIHQ Pty Ltd and
                                                the permission of any other relevant rights owners: broadcast,
                                                republish, up-load to a third party, transmit, post, distribute, show or
                                                play in public, adapt or change in any way the Services or third party
                                                Services for any purpose, unless otherwise provided by these Terms. This
                                                prohibition does not extend to materials on the Website, which are
                                                freely available for re-use or are in the public domain.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4 font-sans">
                                        <h1 className="font-bold text-2xl mb-4">Privacy</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                SIHQ Pty Ltd takes your privacy seriously and any information provided
                                                through your use of the Website and/or Services are subject to SIHQ Pty
                                                Ltd's Privacy Policy, which is available on the Website at
                                                <a href="https://sihq.com.au" className="text-blue-600">
                                                    {' '}
                                                    https://sihq.com.au
                                                </a>
                                                .
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4 font-sans">
                                        <h1 className="font-bold text-2xl mb-4">General Disclaimer</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mb-2">
                                                Nothing in the Terms limits or excludes any guarantees, warranties,
                                                representations or conditions implied or imposed by law, including the
                                                Australian Consumer Law (or any liability under them) which by law may
                                                not be limited or excluded.
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mb-2">
                                                Subject to this clause, and to the extent permitted by law:
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        all terms, guarantees, warranties, representations or conditions
                                                        which are not expressly stated in the Terms are excluded; and
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        SIHQ Pty Ltd will not be liable for any special, indirect or
                                                        consequential loss or damage (unless such loss or damage is
                                                        reasonably foreseeable resulting from our failure to meet an
                                                        applicable Consumer Guarantee), loss of profit or opportunity,
                                                        or damage to goodwill arising out of or in connection with the
                                                        Services or these Terms (including as a result of not being able
                                                        to use the Services or the late supply of the Services), whether
                                                        at common law, under contract, tort (including negligence), in
                                                        equity, pursuant to statute or otherwise.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mb-2">
                                                Use of the Website and the Services is at your own risk. Everything on
                                                the Website and the Services is provided to you "as is" and "as
                                                available" without warranty or condition of any kind. None of the
                                                affiliates, directors, officers, employees, agents, contributors and
                                                licensors of SIHQ Pty Ltd make any express or implied representation or
                                                warranty about the Services or any products or Services (including the
                                                products or Services of SIHQ Pty Ltd) referred to on the Website,
                                                includes (but is not restricted to) loss or damage you might suffer as a
                                                result of any of the following:
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        failure of performance, error, omission, interruption, deletion,
                                                        defect, failure to correct defects, delay in operation or
                                                        transmission, computer virus or other harmful component, loss of
                                                        data, communication line failure, unlawful third party conduct,
                                                        or theft, destruction, alteration or unauthorised access to
                                                        records;
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        the accuracy, suitability or currency of any information on the
                                                        Website, the Services, or any of its Services related products
                                                        (including third party material and advertisements on the
                                                        Website);
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        costs incurred as a result of you using the Website, the
                                                        Services or any of the products of SIHQ Pty Ltd; and
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        the Services or operation in respect to links which are provided
                                                        for your convenience.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4 font-sans">
                                        <h1 className="font-bold text-2xl mb-4">Limitation of liability</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mb-2">
                                                SIHQ Pty Ltd's total liability arising out of or in connection with the
                                                Services or these Terms, however arising, including under contract, tort
                                                (including negligence), in equity, under statute or otherwise, will not
                                                exceed the resupply of the Services to you.
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mb-2">
                                                You expressly understand and agree that SIHQ Pty Ltd, its affiliates,
                                                employees, agents, contributors and licensors shall not be liable to you
                                                for any direct, indirect, incidental, special consequential or exemplary
                                                damages which may be incurred by you, however caused and under any
                                                theory of liability. This shall include, but is not limited to, injury,
                                                loss of life, any loss of profit (whether incurred directly or
                                                indirectly), any loss of goodwill or business reputation and any other
                                                intangible loss.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4 font-sans">
                                        <h1 className="font-bold text-2xl mb-4">Termination of Contract</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                The Terms will continue to apply until terminated by either you or by
                                                SIHQ Pty Ltd as set out below.
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                If you want to terminate the Terms, you may do so by:
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        providing SIHQ Pty Ltd with 14 days' notice of your intention to
                                                        terminate; and
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        closing your accounts for all of the services which you use,
                                                        where SIHQ Pty Ltd has made this option available to you.
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        Your notice should be sent, in writing, to SIHQ Pty Ltd via the
                                                        'Contact Us' link on the{' '}
                                                        <a
                                                            href="https://foremind.com.au/contact"
                                                            className="text-blue-600"
                                                        >
                                                            Foremind
                                                        </a>{' '}
                                                        homepage.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mt-4">
                                                SIHQ Pty Ltd may at any time, terminate the Terms with you if:
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        you have breached any provision of the Terms or intend to breach
                                                        any provision;
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        SIHQ Pty Ltd is required to do so by law;
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        the provision of the Services to you by SIHQ Pty Ltd is, in the
                                                        opinion of SIHQ Pty Ltd, no longer commercially viable.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6 mt-4">
                                                Subject to local applicable laws, SIHQ Pty Ltd reserves the right to
                                                discontinue or cancel your access at any time and may suspend or deny,
                                                in its sole discretion, your access to all or any portion of the Website
                                                or the Services without notice if you breach any provision of the Terms
                                                or any applicable law or if your conduct impacts SIHQ Pty Ltd's name or
                                                reputation or violates the rights of those of another party.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4 font-sans">
                                        <h1 className="font-bold text-2xl mb-4">Indemnity</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                You agree to indemnify SIHQ Pty Ltd, its affiliates, employees, agents,
                                                contributors, third party content providers and licensors from and
                                                against:
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        all actions, suits, claims, demands, liabilities, costs,
                                                        expenses, loss and damage (including legal fees on a full
                                                        indemnity basis) incurred, suffered or arising out of or in
                                                        connection with your interactions;
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        any direct or indirect consequences of you accessing, using or
                                                        transacting on the Website or attempts to do so; and/or
                                                    </li>
                                                    <li className="relative md:text-xl md:leading-loose w-11/12 pl-4 md:pl-6 mt-2 font-sans">
                                                        <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                        any breach of the Terms.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4 font-sans">
                                        <h1 className="font-bold text-2xl mb-4">Dispute Resolution</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                <h2 className="font-bold text-xl font-bold">Compulsory:</h2>
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                        If a dispute arises out of or relates to the Terms, either party
                                                        may not commence any Tribunal or Court proceedings in relation
                                                        to the dispute, unless the following clauses have been complied
                                                        with (except where urgent interlocutory relief is sought).
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                <h2 className="font-bold text-xl font-bold">Notice:</h2>
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                        A party to the Terms claiming a dispute (
                                                        <span className="font-bold"> 'Dispute'</span>) has arisen under
                                                        the Terms, must give written notice to the other party detailing
                                                        the nature of the dispute, the desired outcome and the action
                                                        required to settle the Dispute.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                <h2 className="font-bold text-xl font-bold">Resolution:</h2>
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                        On receipt of that notice (
                                                        <span className="font-bold"> 'Notice'</span>) by that other
                                                        party, the parties to the Terms (
                                                        <span className="font-bold"> 'Parties'</span>) must:
                                                        <ul className="list-none">
                                                            <li className="relative md:text-xl md:leading-loose text-gray-700 dark:text-gray-300 w-11/12 pl-4 md:pl-6 mt-2">
                                                                <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                                Within 30 days of the Notice endeavour in good faith to
                                                                resolve the Dispute expeditiously by negotiation or such
                                                                other means upon which they may mutually agree;
                                                            </li>
                                                            <li className="relative md:text-xl md:leading-loose text-gray-700 dark:text-gray-300 w-11/12 pl-4 md:pl-6 mt-2">
                                                                <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                                If for any reason whatsoever, 30 days after the date of
                                                                the Notice, the Dispute has not been resolved, the
                                                                Parties must either agree upon selection of a mediator
                                                                or request that an appropriate mediator be appointed by
                                                                the President of the ACAT or his or her nominee;
                                                            </li>
                                                            <li className="relative md:text-xl md:leading-loose text-gray-700 dark:text-gray-300 w-11/12 pl-4 md:pl-6 mt-2">
                                                                <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                                The Parties are equally liable for the fees and
                                                                reasonable expenses of a mediator and the cost of the
                                                                venue of the mediation and without limiting the
                                                                foregoing undertake to pay any amounts requested by the
                                                                mediator as a pre-condition to the mediation commencing.
                                                                The Parties must each pay their own costs associated
                                                                with the mediation;
                                                            </li>
                                                            <li className="relative md:text-xl md:leading-loose text-gray-700 dark:text-gray-300 w-11/12 pl-4 md:pl-6 mt-2">
                                                                <div className="h-1 w-3 rounded-full border-b border-gray-500 absolute left-0 mt-4"></div>
                                                                The mediation will be held in Canberra, Australia.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                <h2 className="font-bold text-xl font-bold">Confidential:</h2>
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                        All communications concerning negotiations made by the Parties
                                                        arising out of and in connection with this dispute resolution
                                                        clause are confidential and to the extent possible, must be
                                                        treated as "without prejudice" negotiations for the purpose of
                                                        applicable laws of evidence.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                <h2 className="font-bold text-xl font-bold">
                                                    Termination of Mediation:
                                                </h2>
                                                <ul className="list-none">
                                                    <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                        If 1 month have elapsed after the start of a mediation of the
                                                        Dispute and the Dispute has not been resolved, either Party may
                                                        ask the mediator to terminate the mediation and the mediator
                                                        must do so.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4 font-sans">
                                        <h1 className="font-bold text-2xl mb-4">Venue and Jurisdiction</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                The Services offered by SIHQ Pty Ltd is intended to be viewed by
                                                residents of Australia. In the event of any dispute arising out of or in
                                                relation to the Website, you agree that the exclusive venue for
                                                resolving any dispute shall be in the courts of Australia Capital
                                                Territory, Australia.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative md:text-xl md:leading-loose dark:text-gray-300 w-11/12 pl-6 mb-4 font-sans">
                                        <h1 className="font-bold text-2xl mb-4">Governing Law</h1>
                                        <ul className="list-disc">
                                            <li className="relative md:text-xl md:leading-loose leading-5 pl-6">
                                                The Terms are governed by the laws of Australia Capital Territory,
                                                Australia. Any dispute, controversy, proceeding or claim of whatever
                                                nature arising out of or in any way relating to the Terms and the rights
                                                created hereby shall be governed, interpreted and construed by, under
                                                and pursuant to the laws of Australia Capital Territory, Australia,
                                                without reference to conflict of law principles, notwithstanding
                                                mandatory rules. The validity of this governing law clause is not
                                                contested. The Terms shall be binding to the benefit of the parties
                                                hereto and their successors and assigns.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default TermsServiceController;
