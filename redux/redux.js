const { createStore } = require('redux');

function reducer(state, action){
    if(state === undefined){
        return {color : 'yellow'}
    }
}
var store = createStore(reducer);

console.log(store.getState());