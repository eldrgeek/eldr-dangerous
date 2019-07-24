import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Topics from "./Topics";
import Header from "./Header";
function App() {
  return (
    <Router>
      <div>
        <h1>Danger is on its way!</h1>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

// export default App;
// function App() {
//   return (
//     <div className="App" s>
//       <h1>More Dangerous Devices</h1>
//       <h2>Something really dangerous is about to happen</h2>
//       And there's a pixel here to prove it.
//     </div>
//   );
// }
export default App;
