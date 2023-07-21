import { API_START, API_END, API_DENIED, API_ERROR, API_SUCCESS } from "./apiActions";
import {APIAlert} from '../../utils/AlertUtil';

const initialState = {
	isLoadingData: false,
  stack:[],
  data:{}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case API_START:
          return {
            ...state,
            stack: [...state.stack, action.payload],
            isLoadingData: true
          };
      //break;
    case API_END:
          let availableStack = [...state.stack].filter( val => val !== action.payload ); 
          return {
            ...state,
            stack: availableStack,
            isLoadingData: (availableStack.length > 0) ? true: false
          };
      //break;

      case API_DENIED:
        APIAlert('API:'+action.payload.url).error();
        return {
          ...state
        };

      case API_ERROR:
        let {name, message, config, pathname} = action.payload;
        let errMsg = message +" - "+ pathname; 
        APIAlert('API:'+errMsg).error();
        return {
          ...state
        }

      case API_SUCCESS:
        APIAlert('API:'+action.payload).success();
        return {
          ...state
        }

    default:
      return state;
  }
}