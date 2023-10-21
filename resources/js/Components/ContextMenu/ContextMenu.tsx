import React, { useState } from 'react';

import { ContextMenuContext } from '../../Contexts/ContextMenuContext';

export interface ContextMenuProps {
    children?: JSX.Element | JSX.Element[] | string | null | undefined;
}

export const ContextMenu = ({ children }: ContextMenuProps): JSX.Element => {
    const [active, setActive] = useState(false);
    return <ContextMenuContext.Provider value={[active, setActive]}>{children}</ContextMenuContext.Provider>;
};

export default ContextMenu;
