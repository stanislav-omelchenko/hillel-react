import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import WaitersList from "../WaitersList/WaitersList";
import WaiterPage from "../WaiterPage/WaiterPage";
import { connect } from "react-redux";
import { getWaiters } from "../../../store/actions/waiters";
import propTypes from "../../propTypes";

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

Waiters.propTypes = {
  getWaiters: propTypes.func.isRequired
};

const mapDispatchToProps = {
  getWaiters: getWaiters
};

export default connect(null, mapDispatchToProps)(Waiters);
