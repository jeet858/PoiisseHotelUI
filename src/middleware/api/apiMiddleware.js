import { apiStart, apiEnd, apiSuccess, apiError, apiDenied, API } from "./apiActions";
import {isProd, Global } from '../../utils/Env';
import { httpClient } from './httpClient';

const apiMiddleware = ({ dispatch }) => next => action => {

  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    /* accessToken, */
    onSuccess,
    label,
    extraparam,
    callback,
    headers
  } = action.payload;

  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";


  if (label) {
    dispatch(apiStart(label));
  }

  httpClient
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({data}) => {
      
      //if(!isProd()) dispatch(apiSuccess(label));

      dispatch(onSuccess({...data, extraparam}));
      
      if(callback !== "") Global["callback"][callback+'_onComplete'](); //
      
    }).catch(error => {
     
      let enhancedError = error;
      enhancedError.pathname = window.location.pathname;
      
      if(!isProd()) dispatch(apiError(enhancedError))

     /*  if(isDev()) dispatch(onFailure(error)); */

      if (error.response && error.response.status === 403) {
        dispatch(apiDenied(window.location.pathname));
      }
    }).finally(() => {
      if (label) {
          dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;