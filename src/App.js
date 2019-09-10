import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import './App.css';
import  'react-bootstrap';
import './assets/css/style.css'
import Sidebar from './component/Navbar';
import Main from './component/Main';
import Footer from './component/Footer';
import About from './component/About';
import Services from './component/Services';
import Contactus from './component/Contactus';
function App() {
  return (<Router>
    <div className="App">
     <Sidebar />

      <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/services' component={Services} />
      <Route path='/about' component={About} />
      <Route path='/contactus' component={Contactus} />
      </Switch>

      <Footer />

    </div>
  </Router>);
}

export default App;
