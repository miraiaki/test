import { combineReducers } from 'redux';

let arr=[];
function musicList(state=arr,action){
    switch(action.type){
        case 'List': return [...action.data];
        default : return state;
    }
}

export default combineReducers({
    musicList
})