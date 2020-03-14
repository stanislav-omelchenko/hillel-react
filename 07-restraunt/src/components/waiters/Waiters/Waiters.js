import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import WaitersList from "../WaitersList/WaitersList";

function Waiters() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/`} component={WaitersList} />
      {/* <Route path={`${path}/:id`} component={WaiterForm} /> */}
    </Switch>
  );
}

export default Waiters;
