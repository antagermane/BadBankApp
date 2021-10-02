import React from 'react';
import bank from '../bank.png';

function Home(){
  return (
    <>
    <div className="card mb-3" style={{maxWidth: "540px", backgroundColor: 'rgb(230, 255, 238'}}>
      <div class="card-body">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={bank} className="img-fluid rounded-start" alt="Bad Bank Logo"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Bad Bank Banking Company</h5>
              <p className="card-text">Welcome to BBBC! Here we gather you data and show it to the world. Create an account to see yourself and your data on the All Data list. Try Deposit and Withdraw tools to imagine what consequence free bad banking can offer you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Home


