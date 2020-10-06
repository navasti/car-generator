import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout'

import { Provider } from 'react-redux'
import store from './store/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

