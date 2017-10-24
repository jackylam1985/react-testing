import { Action, handleActions } from 'redux-actions'
import { Todo, TodoState } from 'todo'
import { ADD_TODO, COMPLETE_TODO } from '../actions/types'

const initialState: TodoState = []

export default handleActions<TodoState, Todo>({
  [ADD_TODO]: (state: TodoState, action: Action<Todo>): TodoState => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id || 0, maxId), -1) + 1,
      completed: action.payload!.completed,
      text: action.payload!.text,
    }, ...state]
  },

  [COMPLETE_TODO]: (state: TodoState, action: Action<Todo>): TodoState => {
    return state.map((todo: Todo) =>
      todo.id === action.payload!.id ?
        { ...todo, completed: !todo.completed } :
        todo,
    ) as TodoState
  },
}, initialState)
