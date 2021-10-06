import React from "react";
import UserContext from './context'

function AllData(){
  
  const ctx = React.useContext(UserContext);
  const [data, setData] = React.useState(ctx)
  
  return (
    <>
       <div className="card mb-3" style={{maxWidth: "540px", backgroundColor: 'rgb(230, 255, 238'}}>
        <div className="card-body">
          <h5 className="card-title">All Data</h5>
         {JSON.stringify(data.users)}     
        </div>
      </div>
    </>
  )
}

export default AllData;