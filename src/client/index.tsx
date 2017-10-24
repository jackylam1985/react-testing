import * as React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Store } from 'redux'

declare const module: { hot: any }

import store from '../universal/redux/store'
import routes from '../universal/routes'

const renderApp = (theStore: Store<{}>) => hydrate(
  <Provider store={theStore}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

renderApp(store)

if (module.hot) {
  module.hot.accept()

  // Doesn't need this for now.
  // module.hot.accept('./redux/reducers', () => {
  //   store.replaceReducer(require('./redux/reducers').default)
  // })

}
