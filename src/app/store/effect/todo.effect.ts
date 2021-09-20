import { HttpClient } from '@angular/common/http'
import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {FailedAction, LOAD, SuccessAction} from '../Action/todo.action';

import { catchError, map, mergeMap } from 'rxjs/operators'
import {of} from 'rxjs';

@Injectable()
export class TodoEffect {

    TodoEffect$ = createEffect( () => this.actions.pipe(
        ofType(LOAD),
        
        mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/todos')
        .pipe(
            map((data) => new SuccessAction(data)),
            catchError((error) => of(new FailedAction(error)))
        ))
    ));

    constructor(private http: HttpClient, private actions: Actions) {

    }


}


