import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import WaitersList from "../WaitersList/WaitersList";
import WaiterPage from "../WaiterPage/WaiterPage";

function Waiters() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/`} component={WaitersList} />
      <Route path={`${path}/:id`} component={WaiterPage} />
    </Switch>
  );
}

export default Waiters;
