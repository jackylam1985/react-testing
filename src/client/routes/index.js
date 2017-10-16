import App from '../containers/App'
import Home from '../containers/Home'
import Node from '../containers/Node'

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/node',
        exact: true,
        component: Node,
      },
    ],
  },
]
