import { useReducer, useCallback, Reducer, ReducerState } from 'react';

// Types
import { ThunkDispatch, ThunkAction, Action } from '../types/reducer';

const useThunkReducer = (
  reducer: Reducer<any, Action>,
  initialState: ReducerState<any>
): [any, ThunkDispatch] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thunkDispatch: ThunkDispatch = useCallback(
    (action: ThunkAction) => {
      if ('function' === typeof action) {
        action(dispatch);
      } else {
        dispatch(action);
      }
    },
    [dispatch]
  );

  return [state, thunkDispatch];
};

export default useThunkReducer;
