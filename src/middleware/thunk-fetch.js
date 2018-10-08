import { isLoading, loaded } from '../User/store';
export default url => {
	return dispatch => {
		dispatch(isLoading({isLoading: true}));
	
		fetch(url)
			.then(res => res.json())
			.then(res => dispatch(loaded({userInfo: res, isLoading: false})))
	}
}
