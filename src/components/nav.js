import {Link, HashRouter} from 'react-router-dom';

function NavBar(){
  return(
    <>
       <HashRouter>
      <ul className="nav">
          <li className="nav-item"  >
            <Link className="nav-link"to="/" title="go to home page" >Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link"to="/createaccount" title="go to create account page">Create Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/deposit" title="go to deposit page">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/withdraw" title="go to withdraw page">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/alldata" title="go to all data page">All Data</Link>
          </li>
      </ul>
      </HashRouter>
        
  
      </>
  );
}

export default NavBar;
