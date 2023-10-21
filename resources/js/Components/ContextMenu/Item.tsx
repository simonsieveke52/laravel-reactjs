import React from 'react';
import { Link } from 'react-router-dom';

export interface ItemProps {
    children?: JSX.Element | JSX.Element[] | string | null | undefined;
    icon?: JSX.Element;
    label?: string;
    route?: string;
}

export const Item = ({ children, icon, label, route }: ItemProps): JSX.Element => {
    return (
        <Link
            to={route ? route : ''}
            className="group flex w-full focus:outline-none relative overflow-hidden items-center px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
        >
            {icon ? (
                <span className="block h-4 w-4 mr-2 text-sm text-blue-500 group-hover:text-white">{icon}</span>
            ) : null}
            {children ?? label}
        </Link>
    );
};

export default Item;
