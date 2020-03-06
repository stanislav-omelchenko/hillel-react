import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import GroupsList from "./GroupsList";
import GroupForm from "./GroupForm";

function Groups() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${path}/`} component={GroupsList} />
        <Route path={`${path}/:id`} component={GroupForm} />
      </Switch>
    </div>
  );
}

export default Groups;
