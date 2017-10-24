import NotFound from '../components/NotFound'
import App from '../containers/App'
import Home from '../containers/Home'
import Node from '../containers/Node'

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        exact: true,
        path: '/',
      },
      {
        component: Node,
        exact: true,
        path: '/node',
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
]
