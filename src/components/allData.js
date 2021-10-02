import React from "react";
import UserContext from './context'


function AllData(){
  const ctx = React.useContext(UserContext);
  
  return (
    <>
       <div className="card mb-3" style={{maxWidth: "540px"}}>
       <div class="card-body">
          <>
        <h5 class="card-title">All Data</h5>
        {JSON.stringify(ctx)}



        </>
        </div>
      </div>
    </>
  )
}
export default AllData;