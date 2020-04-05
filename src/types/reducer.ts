import { Dispatch } from 'react';

export type Action = { type: string; payload?: any; [key: string]: any };
export type Thunk = (dispatch: Dispatch<Action>) => void;
export type ThunkAction = Action | Thunk;
export type ThunkDispatch = (action: ThunkAction) => void;
