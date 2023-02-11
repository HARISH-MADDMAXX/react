import React from "react";

import Login from "./Login";

// General Method
// create a var with a boolean
var logged = true;
// if we change the var to false it displays the form

// function renderCon()
// {
//   if(logged === true)
//   {
//     return(
//       <h1>Hello</h1>

//     )
//   }
//   else{
//     <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>

//   }
// }

// ternary practice adding time

const time = new Date().getHours();





function App() {
  return (
    <div className="container">
      {/* <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form> */}
      {/* {renderCon()} */}
      {/* jsx wont accept statements,it only accepts expression here if else is a statement so we use ternary operator */}

{      logged === true ? <h1>Hello</h1> : <Login/>
}     

{
  time >12 ? <h1> Why are You Still Working?</h1> : null
}

{/* or else we can use && operator and no need of null there */}
 
 {/*time >12 && <h1> Why are You Still Working?</h1>  */}

    </div>
  );
}

export default App;
