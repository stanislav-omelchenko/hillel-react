import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Groups from "./components/groups/Groups";
import Students from "./components/students/Students";

import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <Link to="/students">Students</Link>
        <Link to="/groups">Groups</Link>
      </header>
      <section className="content">
        <div>
          <Switch>
            <Route path="/students" component={Students} />
            <Route path="/groups" component={Groups} />
            <Route path="*">
              <Redirect to="/groups" />
            </Route>
          </Switch>
        </div>
      </section>
      <footer></footer>
    </Router>
  );
}

export default App;
