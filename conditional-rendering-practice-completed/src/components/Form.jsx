import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {/* here using the props value we r determining whether a confirm password field should be applied or not */}
      {/* generally for displaying seperate input fields we need 2 values but here the and n ternary operators simplified the job  */}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>

    {/* depending on the condition using the ternary operator we switch to login or register from the imported props value of the variable */}
    </form>
  );
}

export default Form;
