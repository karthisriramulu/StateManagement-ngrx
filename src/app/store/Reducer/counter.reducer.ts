import {Action, createFeatureSelector, createSelector} from "@ngrx/store"
import {customAction} from '../store';

export interface Counter {
    n: number,
    z: number
}

let initialstate : Counter = {
    n:0,
    z: 100
}

// export function CounterReducer(state = initialstate, action: Action){ //only action type
// export function CounterReducer(state = initialstate, action: Action){ //action type and payload
export function CounterReducer(state = initialstate, action: any){ // working for me 
        
    if(action.type === 'increment'){
        return {
            n: state.n + action.payload
        }
    }
    else if(action.type === 'decrement'){
        return {
            n: state.n - action.payload
        }
    } else{
        return state
    }
}

let counterFS = createFeatureSelector<Counter>('count')
export let selectors = createSelector(counterFS, s=> s.n)

