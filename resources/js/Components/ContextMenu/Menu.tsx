import React, { useContext } from 'react';

import { ContextMenuContext } from '../../Contexts/ContextMenuContext';

export interface MenuProps {
    children?: JSX.Element | JSX.Element[] | string | null | undefined;
}

export const Menu = ({ children }: MenuProps): JSX.Element | null => {
    const [active] = useContext(ContextMenuContext)
    return active ? (
        <div className="z-5 absolute right-0 mt-2 py-2 bg-white rounded-md shadow-xl border border-gray-200 z-30">
            <div className="w-4 overflow-hidden inline-block absolute top-0 right-0 transform -translate-y-full">
                <div className=" h-2 w-2 bg-white rotate-45 transform origin-bottom-left"></div>
            </div>
            {children}
        </div>
    ) : null;
};

export default Menu;
