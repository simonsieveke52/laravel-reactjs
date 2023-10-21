import React, { useContext } from 'react';

import { ContextMenuContext } from '../../Contexts/ContextMenuContext';

export interface ActivatorProps {
    children?: JSX.Element | JSX.Element[] | string | null | undefined;
    className?: string;
}

export const Activator = ({ children, className }: ActivatorProps): JSX.Element => {
    const [active, setActive] = useContext(ContextMenuContext)
    return (
        <button type="button" className={className} onClick={(): void => setActive(!active)}>
            {children}
        </button>
    );
};

export default Activator;
