
import { ActionCrWork } from '../Actions/ActionCrWork';
import { ActionCrPhoto } from '../Actions/ActionCrHdrPhoto';


export const InitState =  () => {
	return dispatch => {
		dispatch(ActionCrPhoto());
		dispatch(ActionCrWork());
		
	};
};