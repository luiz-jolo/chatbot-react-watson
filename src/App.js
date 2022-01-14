// import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Chatbot from './Components/Chatbot'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Chatbot />
      <Footer />
      
    </div>
  );
}

export default App;
