import {createStore} from 'redux'

//reducer function

const initialState = 0

export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
    // ASYNC: 'asyncFun'
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + 1
        case ACTIONS.DECREMENT:
            return state - 1
        case ACTIONS.RESET:
            return state = 0
        // case ACTIONS.ASYNC:
        //     return setTimeout(()=>{
        //         state = state + action.payload
        //     }, 4000)
        default:
            return state 
    }
}


// crete the redux store
const counterStore = createStore(counterReducer)
// console.log(store.getState());

// counterStore.dispatch({type: ACTIONS.INCREMENT})
// console.log(store.getState());

// store.dispatch({type: 'decrement'})
// console.log(store.getState());

// counterStore.dispatch({type: ACTIONS.DECREMENT})
// console.log(store.getState());

// counterStore.dispatch({type: ACTIONS.RESET})
// console.log(store.getState());




export default counterStore