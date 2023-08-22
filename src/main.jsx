import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Redux
import { Provider } from 'react-redux';
import store from './store/store.js'


import {store} from './store/index.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
<<<<<<< HEAD
=======
    
>>>>>>> tests
  </React.StrictMode>,
)
