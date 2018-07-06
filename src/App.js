import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Catalogue from './pages/Catalogue/Catalogue';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route path ='/Catalogue' component={Catalogue} />
        <Route path ='/Contact' component={Contact} /> */}
      </div>
    </Router>
    );
  }
}

export default App;
