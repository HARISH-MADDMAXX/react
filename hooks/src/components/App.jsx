import React , {useState} from "react";
// importing usestate from react module

// usestate is a function which makes our website to render a particular output for its corressponding state
// for example ice and water are 2 different states under 2 different conditions



function App() {

const [count ,setcount] = useState(0);

// the usestate has 2 arguements (a,b)
// by setting a const with[x , y] = useState(a,b)
// this useState is generally represented as useState(some int value)
// that int value is automatically assigned to a
// we directly map x=a and y=b using the const[x,y]

// this is like having 2 states like count and setcount
// initially count is used and if setcount is triggered it is used then

function increase()
{
  setcount(count + 1)
}

function decrease ()
{
  setcount(count-1)

}







  return (
    <div className="container">
        <h1>{count}</h1>
        {/* displaying the count */}

        <button onClick={decrease}>-</button>
        {/* calling the functions using onclick */}
        <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
