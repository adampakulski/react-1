import React from 'react';
import boxesInfo from "../data/boxesInfo"

const Box = () => {

  return(
  <div className="kafelki">
    {boxesInfo.map(({id, name, isNew}) => (

      <div key={id} className='kafelek'> <div className='kropka' style={isNew ? {display:"flex"}: {display:"none"}} > </div>
       <span> {name} </span>  
       <small  >
        { isNew ? ("(nowość)") : ("")}
        </small>
       </div> 
    ))}



  </div>
  )
}


export default Box;
