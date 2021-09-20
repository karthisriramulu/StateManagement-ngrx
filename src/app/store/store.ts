
import {ActionReducerMap} from "@ngrx/store";
import {Counter, CounterReducer} from "./Reducer/counter.reducer";
import {Todo, TodoReducer} from "./Reducer/todo.reducer";


export interface StoreInterface {
    count : Counter,
    todos : Todo[]
}

export interface customAction {
    type: string,
    payload: any
}

// export const reducers : ActionReducerMap<StoreInterface> = { count : CounterReducer }
export const reducers : ActionReducerMap<any> = { 
    count : CounterReducer,
    todos : TodoReducer
 }
