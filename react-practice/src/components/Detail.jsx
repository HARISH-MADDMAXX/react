import React from "react";

function Detail(props2)
{
  return(
   <div>
     <p className="info">{props2.detailInfo}</p>

     {/* just on para is enough to display 2 paras in card if incase of confusion of fitting props use devtools */}
   </div>

  )
  

  
}   


export default Detail;