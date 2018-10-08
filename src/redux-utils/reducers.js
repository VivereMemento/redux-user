const callReducer = (reducer, state, action) => (
  typeof reducer === 'function'
    ? reducer(state, action)
    : state
);

export const createReducer = (intialState, reducers) => (
  (state = intialState, action) => callReducer(
    reducers[action.type], state, action
  )
);


export const usersList = (state, { payload }) => {
  const user = payload.userInfo;
  const isLoading = payload.isLoading;
  
  return {...state, user: user, loading: isLoading}
};
