
import { connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { MainBody } from './Components/MainBody';
import { ActionCrWork } from './Actions/ActionCrWork';
import { ActionCrHobbies } from './Actions/ActionCrHobbies';
import { ActionCrAboutMe } from './Actions/ActionCrAbMe';
import { ReducerAbMe } from './Reducers/ReducerAbMe';
import { ReducerHobbies } from './Reducers/ReducerHobbies';
import { ReducerPhoto } from './Reducers/ReducerPhoto';
import { ReducerWork } from './Reducers/ReducerWork';
import { ReducerError } from './Reducers/ReducerErr';
import { InitState } from './InitSatate/initState';
import { mainBodyMiddleware } from './Requests/asyncMiddleware/mainBodyMiddleware';


const reducers = combineReducers({
    work: ReducerWork,
    hobbies: ReducerHobbies,
    aboutMe: ReducerAbMe,
    photo: ReducerPhoto,
    error: ReducerError
});

const store = createStore(reducers, applyMiddleware(thunk, mainBodyMiddleware));

store.dispatch(InitState());



const HeaderComponent = connect(
    state => state
)(Header);

const BodyComponent = connect(
    state =>  state,
    dispatch => {
                return {
                    dispatchWork (){
                        dispatch(ActionCrWork());
                    },
                    dispatchHobbies (){
                        dispatch(ActionCrHobbies());
                    },
                    dispatchAbMe (){
                        dispatch(ActionCrAboutMe());
                    },
                };
            }
)(MainBody);

export { HeaderComponent, BodyComponent, Footer, store };