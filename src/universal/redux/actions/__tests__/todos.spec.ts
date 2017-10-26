import { addTodo, completeTodo } from '../todos'

describe('actions/todos', () => {
  describe('addTodo', () => {
    it('should have a type of "ADD_TODO"', () => {
      expect(addTodo('test').type).toEqual('ADD_TODO')
    })
  })
  describe('completeTodo', () => {
    it('should have a type of "COMPLETE_TODO"', () => {
      expect(completeTodo(null).type).toEqual('COMPLETE_TODO')
    })
  })
})
