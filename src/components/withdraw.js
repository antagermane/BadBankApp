
import React from 'react';
import UserContext from './context'

function Withdraw(){
  const [status, setStatus] = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const ctx = React.useContext(UserContext);
  //const starterBalance = ctx.users[0].balance;
 // const [balance, setBalance] = React.useState(starterBalance);
  var balance = ctx.users[0].balance;
  const isEnabladed = fieldsUsed();

  function fieldsUsed(){
    return(
      withdraw.length > 0
    )
  }

  function validate(){
    if (isNaN(withdraw)){
      setStatus('Not a number! Please enter number only');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (balance-withdraw<0){
      setStatus('You are attempting to overdraft, choose a different amount');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
      return true;
    }

  function handleCreate(){
    if (!validate(withdraw, 'withdraw')) return;
    balance -= parseInt(withdraw);
    ctx.users.unshift({withdraw, balance});
    setStatus('Succefull withdrawl of £' + withdraw);
    setTimeout(() => setStatus(''),3000);
    setWithdraw('')
  }

  return (
    <>
    <div className="card mb-3" style={{maxWidth: "540px", backgroundColor: 'rgb(230, 255, 238'}}>
      <div className="card-body"></div>
       <div style={{color:'red'}}>{status}</div>

          <h5 className="card-title">Withdraw Money</h5>
          <form>
          <div className="mb-3">
    
            <label className="form-label">Balance: £{balance}</label>
            <input type="input" className="form-control" id="withdraw" placeholder="Enter amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/>
          </div>
          
          {isEnabladed ?
          (<button type="submit" className="btn btn-light" onClick={handleCreate} >Withdraw</button>)
          :
          (<button type="submit" className="btn btn-light" onClick={handleCreate} disabled>Withdraw</button>)
          }
          

        </form>

        </div>
    </>
  )
}

export default Withdraw;