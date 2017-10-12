import types from './actionTypes'

export const addTodo = text => ({
  type: types.ADD_TODO,
  text,
})
