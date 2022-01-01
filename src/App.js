import React from 'react'
import CakeContainer from './CakeContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer/>
      </div>
    </Provider>
  )
}

export default App
