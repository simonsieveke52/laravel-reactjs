import { Actions, Modal, Overlay } from '@sihq/ui-components';
import { Context, Controller } from '@sihq/ui-components';
import React, { useContext } from 'react';

import { Button } from '@sihq/ui-components';
import QRCode from 'qrcode.react';

const Properties = {
    controller: 'App\\Http\\Controllers\\Locations\\Share',
};
const LocationShareController = Controller(Properties, (): JSX.Element => {
    const { state } = useContext(Context);
    const location = state?.location ?? {};

    const downloadQRCode = () => {
        // Generate download with use canvas and stream
        const canvas: any = document.getElementById('qr-gen');
        const pngUrl = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
        let downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = `${location?.id}.jpeg`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (
        <Overlay>
            <Modal>
                <div className=" p-10 ">
                    <div className="w-96 ">
                        <div className="flex flex-col flex-grow items-center justify-center">
                            <div className="rounded-lg bg-gray-50 p-5 border border-gray-200 flex items-center justify-center">
                                {/* @ts-ignore */}
                                <QRCode id="qr-gen" value={`${window.location.origin}/register/${location?.id}`} />
                            </div>
                            <div className="text-xs text-gray-500 max-w-xs mt-1 pt-2 mx-auto text-center">
                                <button
                                    type="button"
                                    onClick={downloadQRCode}
                                    className="text-blue-500 hover:underline"
                                >
                                    Download
                                </button>
                                <span>&nbsp;qr code</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-300 my-8 w-full">
                                <div className="flex-grow h-1 bg-gray-200 rounded-full"></div>
                                <div className="px-2">OR</div>
                                <div className="flex-grow h-1 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className="text-xs text-gray-500 max-w-xs mb-2 pt-2 mx-auto text-center">
                                Share link
                            </div>
                            <div className="border border-gray-300 bg-gray-50 select-all shadow-inner rounded p-2 text-gray-600 text-xs flex items-center w-full">
                                <span className="truncate">
                                    {window.location.origin}/register/{location?.id}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <Actions alignment="center">
                    <div>
                        <Button to={-1}>Close</Button>
                    </div>
                </Actions>
            </Modal>
        </Overlay>
    );
});

export default LocationShareController;
