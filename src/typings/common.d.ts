declare module 'common' {
  import { Todo } from 'todo'
  import { RouteConfig } from 'react-router-config'
  interface AppProps {
    route?: RouteConfig
  }
  interface State {
    todos?: Todo[]
  }

  interface StaticRouterContext {
    status?: number
  }
}
