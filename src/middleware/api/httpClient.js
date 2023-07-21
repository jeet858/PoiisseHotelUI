import axios from 'axios';
import { cache } from './cacheHandler';
import {config} from '../../config';
import API from '../../actions/APIConst';

//export const httpClient = axios.create({ baseURL: config.app.API_URL, withCredentials: true });
export const httpClient = axios.create({ baseURL: config.app.API_URL, withCredentials: false });
// axios default configs
//httpClient.defaults.baseURL = config.app.API_URL; //getEnvVariable('REACT_APP_REST_API') || "";
httpClient.defaults.headers.common["Content-Type"] = "application/json";
httpClient.defaults.headers.common["Authorization"] = ''; //`Bearer ${accessToken}`

//.. Axios interceptors
httpClient.interceptors.request.use((request) => requestHandler(request));
httpClient.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error),
);

const whiteList = [API.GET_COMPANY_INFO, API.VALIDATE_PIN, API.PLACE_ORDER, API.SEND_OTP, API.VALIDATE_OTP, API.VALIDATE_DISCOUNT, API.CHECKOUT_ORDER]; //

function isURLInWhiteList(url) {
    return whiteList.includes(url.split('/')[1]);
}

function isMethodGet(o){
    return (o.method.toUpperCase() === 'GET') ? true : false
}

function requestHandler(request) {
    if (isMethodGet(request)) {
        const checkIsValidResponse = cache.isValid(request.url || '');
        //console.log(request.method, " Req-> ", request.url);
        if (checkIsValidResponse.isValid) {
            console.log('serving cached data ', request.url);
            request.headers.cached = true;
            request.data = JSON.parse(checkIsValidResponse.value || '{}');
            return Promise.reject(request);
        }
    }
    return request;
}

function responseHandler(response) {
    if (isMethodGet(response.config)) {
        if (response.config.url && !isURLInWhiteList(response.config.url)) {
            cache.store(response.config.url, JSON.stringify(response.data));
            //console.log(response.config.method, '->storing in cache ->', response.config.url);
        } 
    }
    return response;
}

function errorHandler(error) {
    //console.log("error ", error);
    if (error.headers.cached === true) {
        console.log('got cached data in response, serving it directly');
        return Promise.resolve(error);
    }
    return Promise.reject(error);
} 
//.. axios interceptors ends