import { createContext } from 'react';
const set = ():void => undefined;
export const ContextMenuContext = createContext([false, set as any]);
