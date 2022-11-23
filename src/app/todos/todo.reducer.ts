import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, toggleAll, limpiarCompletados } from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Sacar la basura'),
  new Todo('Regar plantas'),
  new Todo('Cortar pasto'),
  new Todo('Cocinar'),
  new Todo('Dormir'),
];

export const todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [ ...state, new Todo( texto ) ]),

  on(borrar, (state, { id }) => state.filter( todo => todo.id !== id ) ),

  on(toggle, (state, { id }) => {
    return state.map( todo => {

      if( todo.id === id ){

        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),

  on(toggleAll, (state, { completado }) => {
    return state.map( todo => {
        return {
          ...todo,
          completado
        };
    });
  }),

  on(limpiarCompletados, state => state.filter( todo => !todo.completado)),

  on(editar, (state, { id, texto }) => {
    return state.map( todo => {

      if( todo.id === id ){

        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
  }),
);
