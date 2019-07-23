import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function emitEvent() {
  window.fbq("track", "CompleteRegistration", {
    value: 100,
    currency: "USD"
  });
}
function Register() {
  return (
    <div>
      <h2>Register</h2>
      <button id="submitButton" onClick={emitEvent}>
        Complete Registration
      </button>
      {/* <script type="text/javascript">
document.getElementById('submitButton').addEventListener('click', function() {
insert_event_code_here;
...
}, false);
</script> */}
    </div>
  );
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
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
