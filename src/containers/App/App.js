import React from 'react';
import Home from '../Home/Home.js';
import Creator from '../Creator/Creator.js';
import Store from '../Store/Store.js';

import {BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
 


  return (
      <Router>
            <div className="App">

      <Route path="/" exact component ={Home} />
      <Route path="/create" exact component ={Creator} />
      
      <Route path="/store" exact component ={Store} />
      </div>

      </Router>
  );
}


export default App;
