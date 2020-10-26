import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import Infos from "./Infos";
import Home from './Home';

export default function App() {
  return (
    // <div className="App">
    //   <Home/>
    // </div>
    <div className = "App">
      <nav className="navbar navbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/infos">Infos</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/infos" component={Infos} />
      </Switch>
    </div>
  );
}


