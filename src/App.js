import React from 'react'
import './App.scss'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'

import { store } from 'redux/store'
import { Provider } from 'react-redux'
import Products from 'components/Products/Products'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <Products />
        <Footer />
      </Provider>
    </div>
  )
}

export default App
