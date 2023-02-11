import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

// arguement can either be props or some other word but by convention we use props
function Card(props1){
    return (
        <div className="card">
        <div className="top">
          <p>{props1.key1}</p>
          <h2 className="name">{props1.name}</h2>
          <Avatar
          imgUrl = {props1.imgUrl}
          />
          {/* as this image style can be used in any part of the page , we can make a seperate component of that called avatar.jsx */}
        </div>
        <div className="bottom">
          <Detail 

           detailInfo = {props1.phone}
          />
          <Detail 

           detailInfo = {props1.email}
           />
        </div>
      </div>
    
    // the above code is creating card components manually,now we use contact.js to create card components
    
    )
}
export default Card;