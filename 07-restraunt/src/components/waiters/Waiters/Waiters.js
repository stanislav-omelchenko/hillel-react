import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import WaitersList from "../WaitersList/WaitersList";
import WaiterPage from "../WaiterPage/WaiterPage";
import { connect } from "react-redux";
import { getWaiters } from "../../../store/actions/waiters";

function Waiters({ getWaiters }) {
  const { path } = useRouteMatch();
  useEffect(() => {
    getWaiters();
  }, []);
  return (
    <Switch>
      <Route exact path={`${path}/`} component={WaitersList} />
      <Route path={`${path}/:id`} component={WaiterPage} />
    </Switch>
  );
}

const mapDispatchToProps = {
  getWaiters: getWaiters
};

export default connect(null, mapDispatchToProps)(Waiters);
