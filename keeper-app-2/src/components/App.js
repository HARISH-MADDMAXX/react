import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function note1(data1)
// {
//  return(
//   <Note 
//   key = {data1.id}
//   title = {data1.title}
//   content = {data1.content}
//   />
//  )
// }
// above code is the normal function






function App() {
  return (
    <div>

   <Header />
      
    
      {notes.map((data1) =>
{
 return(
  <Note 
  key = {data1.id}
  title = {data1.title}
  content = {data1.content}
  />
 )
})}

{/* => this denotes an arrow function */}
      <Footer />
    </div>
  );
}

export default App;
