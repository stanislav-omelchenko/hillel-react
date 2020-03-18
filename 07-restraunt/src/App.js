import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.scss";
import NavBar from "./components/common/NavBar/NavBar";
import Waiters from "./components/waiters/Waiters/Waiters";
import Tables from "./components/tables/Tables/Tables";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <h1>Restraunt Control Panel</h1>
        </header>
        <nav className="navbar">
          <NavBar />
        </nav>
        <section className="body">
          <Switch>
            <Route path="/tables" component={Tables} />
            <Route path="/waiters" component={Waiters} />
            <Route path="*">
              <Redirect to="/tables" />
            </Route>
          </Switch>
        </section>
        <footer className="footer"></footer>
      </div>
    </Router>
  );
}

export default App;
