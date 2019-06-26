
const isLoadingReducer = state => ({
    ...state,
    error: null,
    isLoading: true,
});

const successReducer = state => ({
    ...state,
    error: null,
    isLoading: false
})

const errorReducer = (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
})


// No operation reducer (default case) to take and return state
export const blankReducer = state => state;

/*
  ActionTypes is an object that has three key value pairs
    - isLoadingActionType
    - successActionType
    - errorActionType
  with each value being the action type for the associated reducer
*/
export const withAsyncLoadable = actionTypes => {
    // Create an object to map the the given action types to
    // the correct reducer defined above
    const actionReducerMap = {
        [actionTypes.isLoadingAction]: isLoadingReducer,
        [actionTypes.successAction]: successReducer,
        [actionTypes.errorAction]: errorReducer
    };

    // Returns a higher order reducer that takes a baseReducer
    return baseReducer =>
        // Returns a new reducer
        (state, action) => {
            // Is the action type a loadable action specified above?
            // if yes, set the action reducer, else set the noopReducer
            const reducerFunction = actionReducerMap[action.type] || blankReducer;
            // compute new state with the specificed reducer set in reducerAction
            const newState = reducerFunction(state, action);
            // return the result of the newState and action passed into the baseReducer
            return baseReducer(newState, action);
        };
};