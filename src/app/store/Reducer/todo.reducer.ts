
import { customAction } from "../store";


const success = 'success';
const failed = 'failed';

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export function TodoReducer (state : Todo[], action : any) { // insted customAction used any
    
    switch(action.type){

        case success:
            return action.payload

        case failed:
            console.log('err', action.payload);
            return state
    }
}