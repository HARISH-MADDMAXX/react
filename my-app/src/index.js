import React from 'react';
import ReactDOM from 'react-dom';
// above 2 imports are essential for any react app to run
// npx create-react-app command creates a react app
// npm i installs all the node modules,from that we import react n react dom
// npm start runs the react app in localhost:3000

import App from "./components/App"
// this import is from the local files

ReactDOM.render(
  <App/>,
  // app is a jsx component exported from app.jsx
  // generally in react app,index.js contains a simple <App /> which renders all the sub components..look int app.jsx for a clear picture
  document.getElementById("root")
)
// the above format is the render the elements in the div which has root id
