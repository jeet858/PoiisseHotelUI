import {apiAction} from '../middleware/api/apiActions';
import API from './APIConst';
 
/** @constant
    @type {string}
    @default
*/
const GENERIC_MODAL = 'GENERIC_MODAL';
/** @constant
    @type {string}
    @default
*/

const USER_PHONE_NUMBER='USER_PHONE_NUMBER';
const USER_LOGIN = "USER_LOGIN";
const USER_SIGNIN_BY_OTHERS = "USER_SIGNIN_BY_OTHERS";
const VERYFY_LOGIN_WITH_OTP = "VERYFY_LOGIN_WITH_OTP";
const USER_ORDER="USER_ORDER";
/** @constant
    @type {string}
    @default
*/

const USER_REGISTER = "USER_REGISTER";
/** @constant
    @type {string}
    @default
*/
const USER_AUTHENTICATED = "USER_AUTHENTICATED";
/** @constant
    @type {string}
    @default
*/
const USER_PASSWORD = "USER_PASSWORD";
const CHANGE_PASSWORD="CHANGE_PASSWORD";

//This is for SignUp//
/** @constant
    @type {string}
    @default
*/
const USER_FNAME = "USER_FNAME";
const USER_LNAME = "USER_LNAME";
const USER_MNAME="USER_MNAME";
const USER_ADDRESS2="USER_ADDRESS2";
const USER_CITY="USER_CITY";
const USER_STATE="USER_STATE";
const USER_COUNTRY="USER_COUNTRY";
const USER_ZIP="USER_ZIP";
const FORGOT_PASSWORD='FORGOT_PASSWORD';
const SEND_FORGOT_PASSWORD_OTP='SEND_FORGOT_PASSWORD_OTP';
const VERIFY_FORGOT_PASSWORD_OTP='VERIFY_FORGOT_PASSWORD_OTP';
const USER_TYPE="USER_TYPE";
const USER_WALLET = "USER_WALLET";
const USER_UPDATED_PHONE="USER_UPDATED_PHONE";
const LOGIN_HEADER='LOGIN_HEADER';
const UPDATE_PHONENO = "UPDATE_PHONENO";
/** @constant
    @type {string}
    @default
*/
const USER_PHONE="USER_PHONE";
/** @constant
    @type {string}
    @default
*/
const USER_EMAIL="USER_EMAIL";
/** @constant
    @type {string}
    @default
*/
const USER_ADDRESS1="USER_ADDRESS1";
/** @constant
    @type {string}
    @default
*/
const USER_NAME="USER_NAME";
const USER_SEARCH="USER_SEARCH";
const SIGN_IN="SIGN_IN";
const LOGIN_MODAL_SHOW="LOGIN_MODAL_SHOW";
const USER_INVOICE="USER_INVOICE";

export const setMsgModal = (param) => ({ 
    type: GENERIC_MODAL,
    payload: param
});
export const setLoginModal = (param) => ({ 
    type: LOGIN_MODAL_SHOW,
    payload: param
});
export const setSearch = (param) => ({ 
    type: USER_SEARCH,
    payload: param
});
export const setUpdatedPhoneNumber = (param) => ({ 
    type: USER_UPDATED_PHONE,
    payload: param
});
export const saveCustomerPhone = (obj) => {
    console.log('obj',obj)
   return apiAction({
       url: `${API.UPDATECUSTOMERPHONE}`,
       method: "post",
       data: obj,
       onSuccess: setsaveCustomerPhone,
       onFailure: () => console.log("Error occured in saveCustomerPhone"),
       label: UPDATE_PHONENO
   });
}
export const setsaveCustomerPhone = param => {
    return ({
        type: UPDATE_PHONENO,
        payload: param.data
    })
};

/**
 * Login Action defined.
 * @constructor
 * @param {object} obj - Pass object as payload to check login authentication.
 */
export const order = (obj) => {
    return apiAction({
        url: API.ORDER_GENERATE,
        method: "post",
        data: obj,
        onSuccess: setOrder,
        onFailure: () => console.log("Error occured in order"),
        callback: 'ordergenerated',
        label: USER_ORDER
    });
}
export const setOrder=param=>{
	return{
		type: USER_ORDER,
		payload:param
	}
};

export const invoice = (obj) => {
    return apiAction({
        url: API.ORDER_INVOICE,
        method: "post",
        data: obj,
        onSuccess: setInvoice,
        onFailure: () => console.log("Error occured in invoice"),
        callback: 'invoicegenerated',
        label: USER_INVOICE
    });
}
export const setInvoice=param=>{
	return{
		type: USER_INVOICE,
		payload:param
	}
};

export const forgotPassword = (obj) => {
    return apiAction({
        url: API.FORGOT_PASSWORD,
        method: "post",
        data: obj,
        onSuccess: setForgotPassword,
        onFailure: () => console.log("Error occured in forgotPassword"),
        callback: 'forgotpassword',
        label: FORGOT_PASSWORD
    });
}

export const setForgotPassword = param => ({
    type: FORGOT_PASSWORD,
    payload: param
});

export const validateForgotPasswordOtp = (obj) => {
    return apiAction({
        url: API.VERIFY_FORGOT_PASSWORD_OTP,
        method: "post",
        data: obj,
        onSuccess: setForgotPasswordValidateOtp,
        onFailure: () => console.log("Error occured in  validateForgotPasswordOtp"),
        callback: 'validateforgotpasswordotp',
        label: VERIFY_FORGOT_PASSWORD_OTP
    });
}

export const setForgotPasswordValidateOtp = param => ({
    type: VERIFY_FORGOT_PASSWORD_OTP,
    payload: param
});



/**
 * Action sendOtp defined.
 * @constructor
 * @param {string} param - Pass param to update the payload.
 */ 
export const sendForgotPasswordOtp = (obj) => {
    return apiAction({
        url: API.SEND_FORGOT_PASSWORD_OTP, 
        method: "post",
        data: obj,
        onSuccess: setForgotPasswordOtpSent,
		callback:'sendforgotpasswordotp',
        onFailure: () => console.log("Error occured in sendForgotPasswordOtp"),
        label: SEND_FORGOT_PASSWORD_OTP
      });
}

export const setForgotPasswordOtpSent = param => ({
    type: SEND_FORGOT_PASSWORD_OTP,
    payload: param
  });

export const login = (obj) => {
    return apiAction({
        url: API.LOG_IN,
        method: "post",
        data: obj,
        onSuccess: setLogin,
        onFailure: () => console.log("Error occured in setLogin"),
        callback: 'login',
        label: USER_LOGIN
    });
}
export const SigninByOthers = (obj) => {
    return apiAction({
        url: API.SIGNIN_BY_OTHERS,
        method: "post",
        data: obj,
        onSuccess: setLoginSigninByOthers,
        onFailure: () => console.log("Error occured in setLogin"),
        callback: 'SigninByOthers',
        label: USER_SIGNIN_BY_OTHERS
    });
}
export const verifyLoginwithotp = (obj) => {
    return apiAction({
        url: API.VERYFY_LOGIN_WITH_OTP,
        method: "post",
        data: obj,
        onSuccess: setverifyLoginwithotp,
        onFailure: () => console.log("Error occured in setLogin"),
        callback: 'login',
        label: VERYFY_LOGIN_WITH_OTP
    });
}
export const WalletInfo = (obj) => {
    return apiAction({
        url: API.WALLET_INFO,
        method: "post",
        data: obj,
        onSuccess: setWalletInfo,
        onFailure: () => console.log("Error occured in setWalletInfo"),
        // callback: 'WalletInfo',
        label: USER_WALLET
    });
}
/**
 * setLogin Action define.
 * @constructor
 * @param {object} param - Pass object as payload to check login authentication.
 */
export const setLogin = param => {
    return {
        type: USER_LOGIN,
        payload: param
    }
};
/**
 * setLoginSigninByOthers Action define.
 * @constructor
 * @param {object} param - Pass object as payload to check login by others authentication.
 */
 export const setLoginSigninByOthers = param => {
    return {
        type: USER_SIGNIN_BY_OTHERS,
        payload: param
    }
};
/**
 * setverifyLoginwithotp Action define.
 * @constructor
 * @param {object} param - Pass object as payload to check login by others authentication.
 */
 export const setverifyLoginwithotp = param => {
    return {
        type: VERYFY_LOGIN_WITH_OTP,
        payload: param
    }
};
/**
 * setWalletInfo Action define.
 * @constructor
 * @param {object} param - Pass object as payload to check WalletInfo authentication.
 */
export const setWalletInfo = param => {
    return {
        type: USER_WALLET,
        payload: param
    }
};


/**
 * signup Action define.
 * @constructor
 * @param {object} obj - Pass object as payload to save registration data.
 */
export const signup = (obj) => {
    return apiAction({
        url: API.SIGN_UP,
        method: "post",
        data: obj,
        onSuccess: setSignUp,
        onFailure: () => console.log("Error occured in setLogin"),
        callback: 'signup',
        label: USER_REGISTER
    });
}
export const changePassword = (obj) => {
    return apiAction({
        url: API.CHANGE_PASSWORD,
        method: "post",
        data: obj,
        onSuccess: setPassword,
        onFailure: () => console.log("Error occured in setPassword"),
        callback: 'password',
        label: CHANGE_PASSWORD
    });
}
export const setPassword = param => ({
    type: CHANGE_PASSWORD,
    payload: param
});
/**
 * setSignUp Action as payload.
 * @constructor
 * @param {object} param - Pass object as payload to set registration data.
 */
export const setSignUp = param => ({
    type: USER_REGISTER,
    payload: {...{}, signupData: param.data, message: param.message, status:param.status}
});



export const set_password = (param) => ({ type: USER_PASSWORD, payload: param })

export const set_authenticated = (param) => ({ type: USER_AUTHENTICATED, payload: param })


//This is for SignUp//
export const set_fname= (param) => ({ type: USER_FNAME, payload: param })
export const set_phone= (param) => ({ type: USER_PHONE, payload: param })
export const set_email= (param) => ({ type: USER_EMAIL, payload: param })
export const set_address1= (param) => ({ type: USER_ADDRESS1, payload: param })
export const set_phoneNumber= (param) => ({ type: USER_PHONE_NUMBER, payload: param })
export const set_user_name= (param) => ({ type: USER_NAME, payload: param })
export const set_lname= (param) => ({ type: USER_LNAME, payload: param })
export const set_mname= (param) => ({ type: USER_MNAME, payload: param })
export const set_address2= (param) => ({ type: USER_ADDRESS2, payload: param })
export const set_city= (param) => ({ type: USER_CITY, payload: param })
export const set_state= (param) => ({ type: USER_STATE, payload: param })
export const set_country= (param) => ({ type: USER_COUNTRY, payload: param })
export const set_zip= (param) => ({ type: USER_ZIP, payload: param })
export const set_login_head= (param) => ({ type: LOGIN_HEADER, payload: param })
export const set_Type= (param) => ({ type: USER_TYPE, payload: param })


/**
 * set up with initial state.
 */
const initialState = {

    modal: {},

    loginData:{},
    signinloginData:{},
    signupData:{},
    password:'',
    authenticated: false,
	name:'',
	phoneNumber:'',
    fname:'',
    phone:'',
    email:'',
    address1:'',
    message:'',
    status:'',
	mname:'',
	lname:'',
	address2:'',
	city:'',
	state:'',
	zip:'',
	country:'',
	chgepassword:{},
	search: false,
	order_generated: {},
	loginmodalshow:false,
	forgotpassworddata:{},
	validateforgotpasswordotpdata:{},
	sendforgotpasswordotpdata:{},
	invoicedata:{},
	loginhead:'',
    userType:'',
    userWalletInfo:{},
    updatedUserPhoneNumber:'',
    updatedUserPhoneNo:''
}




/**
 * reducer .
 * @constructor
 * @param {string} state - state of the data shape.
 * @param {string} action - action payload passed for data updates.
 */
let reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_PASSWORD: return {...state, password: action.payload } 
        case USER_AUTHENTICATED: return {...state, authenticated: action.payload } 
		case LOGIN_MODAL_SHOW: return {...state, loginmodalshow: action.payload } 

        case USER_LOGIN: return {...state, loginData: action.payload }   
        case USER_SIGNIN_BY_OTHERS: return {...state, loginData: action.payload }       
        case VERYFY_LOGIN_WITH_OTP: return {...state, loginData: action.payload }  
        case USER_REGISTER: return {...state, signupData: action.payload.signupData,message:action.payload.message,status:action.payload.status }      
        
        case USER_FNAME: return {...state, fname: action.payload } 
        case USER_PHONE:  return {...state, phone: action.payload } 
        case USER_EMAIL:  return {...state, email: action.payload } 
        case USER_ADDRESS1:  return {...state, address1: action.payload } 
		case USER_PHONE_NUMBER:  return {...state, phoneNumber: action.payload }
        case USER_NAME:  return {...state, name: action.payload }
        case GENERIC_MODAL: return { ...state, modal: action.payload }
		case USER_MNAME: return { ...state, mname: action.payload }
		case USER_ADDRESS2: return { ...state, address2: action.payload }
		case USER_LNAME: return { ...state, lname: action.payload }
		case USER_CITY: return { ...state, city: action.payload }
		case USER_COUNTRY: return { ...state, country: action.payload }
		case USER_STATE: return { ...state, state: action.payload }
		case USER_ZIP: return { ...state, zip: action.payload }
        case USER_ZIP: return { ...state, zip: action.payload }
		case CHANGE_PASSWORD: return { ...state, chgepassword: action.payload }
		case USER_SEARCH: return { ...state, search: action.payload }
		case USER_ORDER: return {...state,order_generated:action.payload}
		case FORGOT_PASSWORD: return { ...state, forgotpassworddata: action.payload }
		case SEND_FORGOT_PASSWORD_OTP: return { ...state, sendforgotpasswordotpdata: action.payload }
		case VERIFY_FORGOT_PASSWORD_OTP: return { ...state, validateforgotpasswordotpdata: action.payload }
        case USER_INVOICE: return {...state,invoicedata:action.payload}
		case LOGIN_HEADER: return {...state,loginhead:action.payload}
        case USER_TYPE: return { ...state, userType: action.payload }
        case USER_WALLET: return {...state, userWalletInfo: action.payload } 
        case USER_UPDATED_PHONE: return {...state, updatedUserPhoneNumber: action.payload } 
        case UPDATE_PHONENO: return {...state, updatedUserPhoneNo: action.payload }
		default: return state;
    }
}

/**
 * Export Object (Action + Reducer)
 */
const AuthAction = {
    reducer: reducer,
    actions: {
        login,
		signup,
		changePassword,
		order,
		forgotPassword,
		sendForgotPasswordOtp,
		validateForgotPasswordOtp,
		invoice,
        WalletInfo,
        SigninByOthers,
        setUpdatedPhoneNumber,
        saveCustomerPhone
    }
}

export default AuthAction
