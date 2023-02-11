import React from "react";

import Card from "./card";
import contacts from "../contacts";
// importing the exported contacts
import Avatar from "./Avatar";

// pass contact as arguement as this function triggers a single contact from contact.js

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      // key is not a prop ,if we try to call it we end up call nothing
      // to display the id u should create another prop with key1 or whatever but not with "key"
      key1 = {contact.id}
      name={contact.name}
      imgUrl={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  //  code containing only name,imgUrl,phone,email is enough to render the output on screen
  // but it does not satisy the needs of react
  // to do that we add key which is unique for all contacts and in our case is the id from contact js

  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgUrl="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" />
      {/* map function */}

      {contacts.map(createCard)}
      {/* we are actually calling a function called map and passing a function into the map */}
      {/* we pass createCard func into map function */}
      {/* map function loops throught array of conatcts in contact.js
      and for every single item in taht array it calls the creatCard function which passes over each of the objects inside the array
      i.e for first loop the first component with id1 gets executed and so on
      
      */}
      {/* <Card
        name={contacts[0].name}
        imgUrl={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgUrl={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgUrl={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
      {/* we r commenting this as this 0,1,2 can be done with for loop but in react we use map function */}
    </div>
    // this is using array from contact.js
  );
}

export default App;
