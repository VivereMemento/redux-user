import {
	action,
  createReducer,
  usersList,
} from '../redux-utils';

export const isLoading = action('USER:LOADING');
export const loaded = action('LOADED');

const initialState = {
  loading: false,
  user: {},
};
export const user = createReducer(initialState, {
  [isLoading.type]: usersList,
  [loaded.type]: usersList,
});

// ------- SELECTORS --------
const createSelector = (...selectors) => {
  const selector = selectors.pop();
  return (...args) => {
    return selector(
      ...selectors.map(s => s(...args))
    );
  }
}

