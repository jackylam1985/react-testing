import { ADD_TODO } from '../actions/actionTypes'

const initialState = {
  id: 0,
  text: 'This is a todo',
  completed: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          completed: false,
          text: action.text,
        },
      ]
    default:
      return state
  }
}
