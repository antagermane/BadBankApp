import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import NavBar from './components/nav';
import {Route, HashRouter} from 'react-router-dom';
import Home from './components/homePage';
import CreateAccount from './components/createAccount';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/allData';
import UserContext from './components/context'

function App() {
  
  return (
      <>
        <h1>Bad Bank Banking</h1>
          
        <HashRouter>
          <NavBar/>
            <UserContext.Provider value={{name:'', email:'', password:'', balance:0}}>
            <hr/>
              <Route path="/" exact component={Home}/>
              <Route path="/createaccount" component = {CreateAccount}/>
              <Route path="/deposit" component = {Deposit}/>
              <Route path="/withdraw" component = {Withdraw}/>
              <Route path="/alldata" component = {AllData}/>
            </UserContext.Provider>
        </HashRouter>
       
      </>
    
  );
}

export default App;
