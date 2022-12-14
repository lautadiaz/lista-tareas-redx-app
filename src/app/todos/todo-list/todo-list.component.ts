import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: actions.filtrosValidos = 'todos';

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.store.subscribe( state =>{

      this.todos = state.todos;
      this.filtro = state.filtro;
    });

  }

}
