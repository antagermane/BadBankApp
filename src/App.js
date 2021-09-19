
import React from 'react';
import './App.css';
import { HashRouter, Link, Route, } from 'react-router-dom';
import Home from './components/homePage';
import CreateAccount from './components/createAccount';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/allData';

function App() {
  
  return (
    <HashRouter>
      
      <div>
        <h1>Routing - hello world</h1>
        <Link to="/">Home</Link>
        <Link to="/createaccount">Create Account</Link>
        <Link to="/deposit">Deposit</Link>
        <Link to="/withdraw">Withdraw</Link> 
        <Link to="/alldata">All Data</Link>
        <hr/>
        <Route path="/" exact component={Home}/>
        <Route path="/createaccount" component = {CreateAccount}/>
        <Route path="/deposit" component = {Deposit}/>
        <Route path="/withdraw" component = {Withdraw}/>
        <Route path="/alldata" component = {AllData}/>

      </div>
    </HashRouter>
  );
}

export default App;
