import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  // to get current time

  // this is  breaking point1 complete the full code skipping the breaking points 1 and 2
  setInterval(update ,1000);
  // this set interval is responsible for changing the seconds continously
  // breaking point 2


  const [time , setTime] = useState(now);
  // just this part of the code will render the current time in h1
  // but we need to update the time whenever the button is clicked
  // so we add onclick in button and give  afunction to it


  function update()
  {
    // to update the time , we need to get the time once again
    const up = new Date().toLocaleTimeString();
    // now we use the 2nd parameter of usestate
    // we use to 2nd parameter and enter the up const in it
    setTime(up);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update} >Get Time</button>
    </div>
  );
}

// the above code updates time whenever the button is clicked
// refer line 7

export default App;
