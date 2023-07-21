import store from "../store";

//.. gVar
function getGlobal(window) { 
    return Object.assign(window || {}, { callback: () => {}}); 
}
export const Global = getGlobal(window); 

//===========================================
//.. Check for the Environment 
//===========================================
export function isDev() {
    return !process.env.NODE_ENV || (process.env.NODE_ENV === 'development')  
}

export function isProd() {
    return ((process.env.REACT_APP_ENVIRONMENT === "production") && (process.env.NODE_ENV === "production"))
        ? true : false 
}

export function isDebug() {
    return (process.env.DEBUG === 'true') && (process.env.NODE_ENV === 'development')  
}

export function host(){
    return (process.env.NODE_ENV === 'development') ? store.getState().HomeData.url : Global.location.origin+"/" /* Global.location.host href*/
}

//... quick-set for the debugging mode ::flashim
(function(Global){
    //console.log("Global >> ", Global);
})(Global)

//.. Utility func defined
// eslint-disable-next-line
Array.prototype.unique = function () {
    return [...new Set(this)]
}
/* const arr = [1, 5, 2, 2, 2, 3, 4, 3, 2, 1, 5];
const uniqueArr = arr.unique();
console.log(arr, '>> ', uniqueArr) */

Array.prototype.add = function(element) {
    return [...this, element]; 
}
/* console.log('add >> ', uniqueArr.add(200))
console.log(uniqueArr) */

Array.prototype.remove = function(element) {
    const index = this.indexOf(element);
    return [...this.slice(0, index), ...this.slice(index + 1)]
}
/* console.log('remove>> ', uniqueArr.remove(5))
console.log(uniqueArr) */


Array.prototype.addAtIndex = function(item, index) {
    let arr = [...this];
    arr[index] = item;
    return arr
}


Array.prototype.removeAtIndex = function(index) {
    return [...this.slice(0, index), ...this.slice(index + 1)]
}
//console.log('removeAtIndex>> ', uniqueArr.removeAtIndex(2))

Array.prototype.clone = function() {
    return Array.from(this) //or this.slice(0)
}

String.prototype.url = function() {
    //const a = $('<a />').attr('href', this)[0];
    // or if you are not using jQuery 👇🏻
    const a = document.createElement('a'); 
    a.setAttribute('href', this);
    let origin = a.protocol + '//' + a.hostname;
    if (a.port.length > 0) {
        origin = `${origin}:${a.port}`;
    }
    const {host, hostname, pathname, port, protocol, search, hash} = a;
    return {origin, host, hostname, pathname, port, protocol, search, hash};
}


//.. ref:: https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript
export function JSONClone(obj) {
    return JSON.parse(JSON.stringify(obj))
 }

 export function transformObjectValues(obj, fn){
    var transformed = {};
    Object.keys(obj).forEach(key => {
      transformed[key] = fn(obj[key])
    })
    return transformed
  }