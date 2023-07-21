
//import CacheStorage from '../../utils/CacheStorage';

export const API = "API";
export const API_START = "API_START";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";
export const API_END = "API_END";
export const API_DENIED = "API_DENIED";
//....................................

export const apiStart = label => ({
  type: API_START,
  payload: label
});

export const apiEnd = label => ({
  type: API_END,
  payload: label
});

export const apiDenied = url => ({
  type: API_DENIED,
  payload: {
    url
  }
});

export const apiSuccess = label => ({
  type: API_SUCCESS,
  payload: label
});

export const apiError = error => ({
  type: API_ERROR,
  payload: error
});

export function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = '', /*CacheStorage.getItem("userToken"),*/
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  extraparam = {},
  callback = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      extraparam,
      callback,
      headersOverride
    }
  };
}