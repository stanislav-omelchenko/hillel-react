import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Groups from "./components/groups/Groups";

function App() {
  return (
    <Router>
      <header>
        <Link to="/students">Students</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/">Home</Link>
      </header>
      <section className="content">
        <Switch>
          <Route path="/students" component={Home} />
          <Route path="/groups" component={Groups} />
          <Route path="/" component={Home} />
        </Switch>
      </section>
      <footer></footer>
    </Router>
  );
}

export default App;
