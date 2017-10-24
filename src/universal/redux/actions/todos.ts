import { createAction } from 'redux-actions'
import { Todo } from 'todo'
import { ADD_TODO, COMPLETE_TODO } from './types'

// Action Creators
const addTodo = createAction<Todo, string>(
  ADD_TODO,
  (text: string) => ({ text, completed: false }),
)

const completeTodo = createAction<Todo, Todo>(
  COMPLETE_TODO,
  (todo: Todo) => todo,
)

export {
  addTodo,
  completeTodo,
}
