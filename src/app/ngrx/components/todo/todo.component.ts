import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Todo } from '../../models/todo';
import { TodoRemove } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor(
    private store: Store<{ todos: Todo[] }>//todos -> same name in app.module StoreModule.forRoot({ todos: TodoReducer })
  ) {
    store.pipe(select('todos')).subscribe(values => {
      console.log(values);
      this.todos = values;
    })
  }

  ngOnInit(): void {
  }

  removeTodo(index: number) {
    this.store.dispatch(new TodoRemove(index));
  }

}
