import {apiAction} from '../middleware/api/apiActions';
import API from './APIConst';

import {host} from '../utils/Env';

const CONFIG_INFO = "CONFIG_INFO";
const COMPANY_ID = "COMPANY_ID";
const SET_IN_VIEW="SET_IN_VIEW";
const SET_MENU_STATE = 'SET_MENU_STATE';
const TOGGLE_MENU_STATE = 'TOGGLE_MENU_STATE';
const SET_MOBILE_MENU = 'SET_MOBILE_MENU';
/**
 * Action getCompanyDetails defined.
 * @constructor
 * @param {string} param - Pass param to update the payload.
 */ 


/**
 * Action  defined.
 * @constructor
 * @param {string} param - Pass param to update the payload.
 */ 
export const getCompanyId = (ob) => {
    return apiAction({
        url: `${API.GET_COMPANY_INFO}${ob}`, 
		method: "post",
        onSuccess: setCompanyId,
        onFailure: () => console.log("Error occured in getCompanyId"),
		callback: 'getcompanydetails',
        label: COMPANY_ID
      });
}

export const setInView = param => {
    return ({
    type: SET_IN_VIEW,
    payload: param
})}
export const getConfigInfo = () => {
    return apiAction({       
        url: window.location.origin+'/config.json', 
        onSuccess: setConfigInfo,
        onFailure: () => console.log("Error occured in getConfigInfo"),
		callback: 'getConfigInfo',
        label: CONFIG_INFO
      });
}

export const setConfigInfo = param => ({
    type: CONFIG_INFO,
    payload: param.data.company
    
  });
  
  export const setCompanyId = param => ({
    type: COMPANY_ID,
    payload: param.data
  });
//...................................................................
/**
 * Action toggleMenuState defined.
 * @constructor
 *
 */  
export const toggleMenuState = () => ({
    type: TOGGLE_MENU_STATE,
  });
//...................................................................
/**
 * Action setMenuState defined.
 * @constructor
 * @param
 */  
export const setMenuState = (param) => ({
    type: SET_MENU_STATE,
    payload:param
  });
  
  //...................................................................
  /**
   * Action setMobileMenu defined.
   * @constructor
   * @param
   */  
  export const setMobileState = (param) => ({
    type: SET_MOBILE_MENU,
    payload:param
  });
/**
 * set up with initial state.
 */
const initialState = {
    companyid: '',
	template:{},
	templateStatus:false,
	templateMessage:'',
	companyDetails:{},
    inView:false
}

/**
 * reducer .
 * @constructor
 * @param {string} state - state of the data shape.
 * @param {string} action - action payload passed for data updates.
 */
let reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONFIG_INFO: return {...state, ...action.payload }
        case COMPANY_ID: return {...state, companyid:action.payload.companyid,companyDetails:action.payload,...action.payload }
        case SET_IN_VIEW: return {...state,inView:action.payload}
        case TOGGLE_MENU_STATE: return {...state, menuState: !state.menuState }
        case SET_MENU_STATE : return { ...state, menuState: action.payload }
        case SET_MOBILE_MENU :  return { ...state, isMobileMenu: action.payload }
        default: return state;
    }
}

/**
 * Export Object (Action + Reducer)
 */
const HomeAction = {
    reducer: reducer,
    actions: {
        getConfigInfo,
        toggleMenuState,
		getCompanyId,
        setMenuState,
        setMobileState
    }
}

export default HomeAction