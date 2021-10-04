import React from 'react';
import UserContext from './context'



function Deposit(){
  const [status, setStatus] = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const ctx = React.useContext(UserContext);
  const isEnabladed = fieldsUsed()

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
    console.log(deposit);
    if (!validate(deposit, 'deposit')) return;
    setBalance(balance + parseInt(deposit));
    ctx.users.push({deposit});
    setStatus('');
    setDeposit('')
  }

  return (
    <>
    <div className="card mb-3" style={{maxWidth: "540px", backgroundColor: 'rgb(230, 255, 238'}}>
      <div class="card-body"></div>
       <div style={{color:'red'}}>{status}</div>

          <h5 class="card-title">Deposit Money</h5>
          <form>
          <div className="mb-3">
    
            <label class="form-label">Balance: £{balance}</label>
            <input type="input" class="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/>
          </div>
          
          {isEnabladed ?
          (<button type="submit" class="btn btn-light" onClick={handleCreate} >Deposit</button>)
          :
          (<button type="submit" class="btn btn-light" onClick={handleCreate} disabled>Deposit</button>)
          }
          

        </form>

        </div>
    </>
  )
}

export default Deposit;