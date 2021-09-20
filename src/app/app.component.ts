import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {DecrementAction, IncrementAction} from './store/Action/counterAction.action';
import {LoadTodoAction} from './store/Action/todo.action';
import {selectors} from './store/Reducer/counter.reducer';
import {StoreInterface} from './store/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StateManagement';
  count : number = 0;

  constructor(private store : Store<StoreInterface>){

    // this.store.select(selectors).subscribe(data => console.log(data));
    this.store.select(selectors).subscribe(data => this.count = data )
    this.store.subscribe(data => console.log(data.todos));
  }

  increment() {
    this.store.dispatch(new IncrementAction(2))
  }

  decrement() {
    this.store.dispatch(new DecrementAction(2))
  }


  load(){

    this.store.dispatch(new LoadTodoAction())
  }
}
