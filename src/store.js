import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


import {isDev} from './utils/Env';
 // eslint-disable-next-line
import logger from './middleware/logger';

import { composeWithDevTools } from 'redux-devtools-extension';

import apiMiddleware from "./middleware/api/apiMiddleware";
import apiReducer from './middleware/api/apiReducer';



import AuthAction from './actions/AuthAction';
import HomeAction from './actions/HomeAction';
//import { ProgressPlugin } from 'webpack';
//const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const reducers = combineReducers({
	api: apiReducer,
	AuthData: AuthAction.reducer,
	HomeData:HomeAction.reducer
	/* persistedState: (state = {}, action) => {
		switch(action.type) {
			case 'persist/REHYDRATE': return {...state, CategoryData:action.payload.CategoryData }
			default: return state;
		}
	} */
});


const middlewares = [thunk, apiMiddleware]; //logger

/*
const middlewares = [thunk, myMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(middlewareEnhancer, someOtherEnhancer, autoRehydrate);
const store = createStore(reducer, preloadedState, enhancers);
*/

if (isDev()) {
	const freeze = require('redux-freeze');
	middlewares.push(freeze);
}

const persistConfig = {
	key: 'root',
	storage: storage,
	version: 1,
	stateReconciler: autoMergeLevel2,
	whitelist: ['AuthData']
	// see "Merge Process" section for details.  'LocationData', 'CartData', 'UserData', 'CheckoutData', 
};
	
const persistedReducer = persistReducer(persistConfig, reducers);

//.. Connected with redux dev-tool and thunk middleware
/* export default createStore(
	reducers,
	initialState, 
	composeWithDevTools(applyMiddleware(...middlewares))) */
//const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares))) // using without persistent data; changes in index

//.. enable below 2 for store persitence
const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

export default store;
