import React from 'react'
import './App.scss'
import Header from 'components/Header/Header'
import Products from 'components/Products/Products'
import Slider from 'components/Slider/Slider'
import Footer from 'components/Footer/Footer'

import { store, persistor } from 'redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Slider />
          <Products />
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
