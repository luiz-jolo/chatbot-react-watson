import React from 'react';
import {Provider} from 'react-redux'
import './App.css';

import store from './store';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Chatbot from './Components/Chatbot'

function App() {
  return (
    <Provider store={store}>
      <div className="conteudo">
        <Header />
        <Home />
        <Chatbot />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
