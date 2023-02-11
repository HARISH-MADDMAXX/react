import React from "react";
import ReactDOM from "react-dom";

// we generally use attributes like type,placeholder,value for html tags
// in react, these attributes area called as props but html attributes are pre defined and react props can be made by the user 
// NOTE:html attributes are pre defined and can never be given by the user

// props arguement is passed to the function
function Card(props) {
  return (
    // u can add classname for this div

    <div>
      <h2>{props.name}</h2>
      {/* this will be of arguement.props */}
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.mail}</p>
    </div>

  )
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
 {/* u cannot add class name inside custom card component as it take even the classname as an attribute i.e props */}
    <Card name="Harish" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
    tel ="9789928004"
    mail = "email"/>
   <Card
   name="kirubaa"
   img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
   tel ="9789928004"
   mail = "email"

   />

  </div>,
  // if this card is called it goes to the function which has arguement as props
  document.getElementById("root")
);
