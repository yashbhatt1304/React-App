import React, { Component } from 'react'
import Header from './Bootstrap/Header';
import { Routes,Route } from 'react-router-dom';
import CreateOrder from './Bootstrap/CreateOrder';
import GetOrderDetails from './Bootstrap/GetOrderDetails';
import Home from './Bootstrap/Home';
import About from './Bootstrap/About';
import Contact from './Bootstrap/Contact';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header><b>Connect World</b></Header>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/createorder" element={<CreateOrder />}/>
        <Route exact path="/getorderdetails" element={<GetOrderDetails />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    )
  }
}

export default App;