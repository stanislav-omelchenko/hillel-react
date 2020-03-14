import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.scss";
import NavBar from "./components/common/NavBar/NavBar";
import Waiters from "./components/waiters/Waiters/Waiters";
import Tables from "./components/tables/Tables/Tables";

function App() {
  return (
    <Router>
      <div class="grid-container">
        <header class="header">
          <h1>Restraunt Control Panel</h1>
        </header>
        <nav class="navbar">
          <NavBar />
        </nav>
        <section class="body">
          <Switch>
            <Route path="/tables" component={Tables} />
            <Route path="/waiters" component={Waiters} />
            <Route path="*">
              <Redirect to="/tables" />
            </Route>
          </Switch>
        </section>
        <footer class="footer"></footer>
      </div>
    </Router>
  );
}

export default App;
