import {Global} from './Env';
import React from 'react';
import axios from 'axios';
import getSymbolFromCurrency from 'currency-symbol-map'

export const hasProps = (node, attr) => {
    return node.hasOwnProperty(attr) ? true : false;
}

export const isPromise = value => {
    return value && value.then && typeof value.then === 'function';
}

export function to2Decimal(val=0){
    //let _val = val ? val : 0 
    return (val).toFixed(2);
}

export function formatINR(currency='', spacing=' ', symbol='₹'){
    return `${symbol}${spacing}${currency}`
}

export function getNetworkConnectionType(){
    return Global.navigator.connection || Global.navigator.mozConnection || Global.navigator.webkitConnection
}
export function formatSymbolFromCurrency(currencyCode='',currency='', spacing=' ',symbol=''){
    symbol=getSymbolFromCurrency(currencyCode)
    return `${symbol}${spacing}${currency}`
}

//.. USAGE 
/* <Col>
                        {true && 
                        <button type="button" onClick={handleButtonClick}>
                            theme
                        </button>
                        }
                    </Col> 

    import {addStyle} from '../../utils/CommonUtil';                

    const [stylePath, setStylePath] = useState('./assets/css/style1.css');
    
    const [toggle, setToggle] = useState(false);
    const handleButtonClick = (e) => {  
      setToggle(!toggle);
      setStylePath((toggle) ? './assets/css/style1.css' : './assets/css/style2.css');
      console.log('handleButtonClick theme changed to ', stylePath);
    }

    useEffect(() => {
      addStyle(stylePath);
    }, [stylePath]); 
    */
export function addStyle(url){
    const style = Global.document.createElement("link");
    style.href = url;
    style.rel = "stylesheet";
    style.type = "text/css";
    style.async = true;
    
    const head = Global.document.head;
    head.appendChild(style);
    return () => { head.removeChild(style) }
}




export const setTheme = (themeName) => {
    // Get all 'selected' custom CSS properties from the ':root'.
    // These are the variables that are actually used (as oppose to vars to store the alternatives from different themes)
    const selectedCssProps = Array.from(document.styleSheets)
        .reduce((acc, sheet) =>
            (acc = [
            ...acc,
            ...Array.from(sheet.cssRules).reduce((def, rule) =>
                (def = rule.selectorText === ":root"
                    ? [
                        ...def,
                        ...Array.from(rule.style).filter(name =>
                            name.startsWith("--selected")
                        )] : def), [])
            ]), []);

    // Set the selected values to values of a different theme
    selectedCssProps.forEach(prop => {
        // set each selected variable with its analogous variable from the new theme
        document.documentElement.style.setProperty(prop, `var(--${themeName}${prop.substring(10)})`);
    });
}

export async function getThemeColors() {
    //let data = [];
    return await axios.post('http://colormind.io/api/', { model: 'default'})
    /* .then(response => {
        data = response.data.result
    })
    return response.data.result   */
}

export function versionInfo(){
    let divStyle = {
        color: 'red'
    };
    return (
        (process.env.NODE_ENV === "development") 
            ? null 
            : <span style={divStyle}><b>v{process.env.REACT_APP_VERSION}</b></span>)
}


export function convertTime(input, separator) {
    var pad = function (input) {
        return input < 10
            ? "0" + input
            : input;
    };
    return [
        /* pad(Math.floor(input / 3600)), */
        pad(Math.floor(input % 3600 / 60)),
        pad(Math.floor(input % 60))
    ].join(typeof separator !== 'undefined'
        ? separator
        : ':');
}

/*
function seconds_to_days_hours_mins_secs_str(seconds)
{ // day, h, m and s
  var days     = Math.floor(seconds / (24*60*60));
      seconds -= days    * (24*60*60);
  var hours    = Math.floor(seconds / (60*60));
      seconds -= hours   * (60*60);
  var minutes  = Math.floor(seconds / (60));
      seconds -= minutes * (60);
  return ((0<days)?(days+" day, "):"")+hours+"h, "+minutes+"m and "+seconds+"s";
}

> seconds_to_days_hours_mins_secs_str(9432+60*60*24)
'1 days, 2h, 37m and 12s'
*/

export const ColorLuminance = (col, amt) => {
    var usePound = true;
	if (col[0] == "#") {
		col = col.slice(1);
		usePound = true;
	}
	var num = parseInt(col, 16);
	var r = (num >> 16) + amt;
	if (r > 255) {
		r = 255;
	} else if (r < 0) {
		r = 0;
	}
	var b = ((num >> 8) & 0x00FF) + amt;
	if (b > 255) {
		b = 255;
	} else if (b < 0) {
		b = 0;
	}
	var g = (num & 0x0000FF) + amt;
	if (g > 255) {
		g = 255;
	} else if (g < 0) {
		g = 0;
	}
	return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
export function restAPIKey(){
    let restAPIKey=`926e46a9f67bf9d56c5021e7f8a778a7`;
    return (restAPIKey);
}
export function reverseGeoCodeAPI(){
    let reverseGeoCodeAPI=`https://apis.mapmyindia.com/advancedmaps/v1/`;
    return (reverseGeoCodeAPI);
}
export function merchantId(){
    let merchantId=`MERCHANTUAT`;
    return (merchantId);
}
export function saltkey(){
    let saltkey=`a6334ff7-da0e-4d51-a9ce-76b97d518b1e`;
    return (saltkey);
}
export function saltindex(){
    let saltindex=`1`;
    return (saltindex);
}
