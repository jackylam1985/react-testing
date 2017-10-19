declare module 'common' {
  import { Todo } from 'todo'

  interface State {
    todos?: Todo[]
  }

  interface StaticRouterContext {
    status?: number
  }
}
