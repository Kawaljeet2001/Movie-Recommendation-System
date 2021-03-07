import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import App from './App';
import Recommendations from "./Components/Recommendations";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path = "/" component = {App}/>
      <Route path = "/recommend" component = {Recommendations}/>
    </Switch>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

