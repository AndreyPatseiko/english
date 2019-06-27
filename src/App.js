import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Main from "../src/main/Main";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" component={Main} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/topics" component={Topics} /> */}
    </BrowserRouter>
  );
}

// function About() {
//   return <h2>About</h2>;
// }

// function Topic({ match }) {
//   return <h3>Requested Param: {match.params.id}</h3>;
// }

// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:id`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

export default App;
