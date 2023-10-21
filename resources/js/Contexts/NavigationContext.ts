import { Dispatch, SetStateAction, createContext } from 'react';
const set = () => undefined;
export const NavigationContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, set]);
