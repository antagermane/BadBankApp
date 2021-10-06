import React from 'react';
import UserContext from './context'

function CreateAccount(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const isEnabladed = fieldsUsed()
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(0);

  function fieldsUsed(){
    return(
      name.length > 0 || email.length > 0 || password.length > 0
    )
  }

  function validate(field,label){
    if (!field) {
        setStatus('Enter ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    if (password.length <= 7){
      setStatus('Password must be at least 8 characters long')
      return false;
    }
      return true;
    }


  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    setBalance(0)
    ctx.users.unshift({name,email,password,balance})
    setShow(false);
    setStatus('');
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return(

    
    <div className="card mb-3" style={{maxWidth: "540px", backgroundColor: 'rgb(230, 255, 238'}}>
      <div className="card-body">
        <div style={{color:'red'}}>{status}</div>
        {show ? (

          <>
        <h5 className="card-title">Create Account</h5>
        <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="input" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
        </div>

          {isEnabladed ?
          (<button type="submit" className="btn btn-light" onClick={handleCreate} >Create Account</button>)
          :
          (<button type="submit" className="btn btn-light" onClick={handleCreate} disabled>Create Account</button>)
          }

        </form>
        </>








        ):(
          <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Create Another Account</button>
          </>
        )}
      </div>
    </div>
  )
  

  }

export default CreateAccount