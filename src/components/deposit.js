import React from 'react';
import UserContext from './context'



function Deposit(){
  const [status, setStatus] = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext);
  //const starterBalance = ctx.users[0].balance;
  //const [balance, setBalance] = React.useState(null);
  var balance = ctx.users[0].balance;
  const isEnabladed = fieldsUsed();
  


  function fieldsUsed(){
    return(
      deposit.length > 0
    )
  }
  
 

  function validate(){
    if (isNaN(deposit)){
      setStatus('Not a number! Please enter number only');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (deposit<0){
      setStatus('Negative number! Please enter positive number only');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
      return true;
    }

  function handleCreate(){
    if (!validate(deposit, 'deposit')) return;
    balance += parseInt(deposit);
    console.log(balance);
    ctx.users.unshift({deposit, balance});
    setStatus('Succefull deposit of £' + deposit);
    setTimeout(() => setStatus(''),3000);
    setDeposit('');
  }

  return (
    <>
    <div className="card mb-3" style={{maxWidth: "540px", backgroundColor: 'rgb(230, 255, 238'}}>
      <div className="card-body"></div>
       <div style={{color:'red'}}>{status}</div>

          <h5 className="card-title">Deposit Money</h5>
          <form>
          <div className="mb-3">
    
            <label className="form-label">Balance: £{balance}</label>
            <input type="input" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/>
          </div>
          
          {isEnabladed ?
          (<button type="submit" className="btn btn-light" onClick={handleCreate} >Deposit</button>)
          :
          (<button type="submit" className="btn btn-light" onClick={handleCreate} disabled>Deposit</button>)
          }
          

        </form>

        </div>
    </>
  )
}

export default Deposit;