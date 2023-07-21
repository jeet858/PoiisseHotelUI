

import AuthAction from './AuthAction';

import store from '../store';

export const DispatchAction = (action) => {
    store.dispatch(action)
}

let actionList = [ AuthAction];

const _actions = actionList.map((item)=>{
    return Object.values(item.actions)
}).flat();

const Actions = {};
for(var i=0; i<_actions.length; i++){
    Actions[_actions[i].name] = _actions[i];
}

export const Action = {};
export default Actions






