import React from "react";
import Form from "./Form";

var userIsRegistered = true;
// If we have to pass this variable to other components obviously we can do it with props

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
      {/* here we are just passing that variable via the props */}
    </div>
  );
}

export default App;
