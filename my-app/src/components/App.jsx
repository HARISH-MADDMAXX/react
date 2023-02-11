import React from "react";
// importing react for all the components is mandatory
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
// this app.jsx is the main root which have branches lik note,header and the footer
// all these components are imported to enclose them within a div which will be inseted as <App /> in index.js

// every components has a function which returns some html tags,here a div is returned by the function
function App()
{
    return(
    <div>
        
        <Header />
        <Note />
        <Footer />
    </div>
    )
    // all the components imported are called here as self closing tags inside the div to render it on main screen
    // these <Header /> are pascal cased means...its should always start with capital letter , these tags are also called as customized html tags
}

export default App;
// export default is basic operation to express this app fucntion which returns a div
// this exported App will be imported in the index.js