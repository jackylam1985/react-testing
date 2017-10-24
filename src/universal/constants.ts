import { State } from 'common'

export const INITIAL_STATE: State = {
  todos: [],
}

export const isProd = process.env.NODE_ENV === 'production'
