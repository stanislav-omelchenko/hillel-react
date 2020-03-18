import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import TablesList from "../TablesList/TablesList";
import TablePage from "../TablePage/TablePage";
import { connect } from "react-redux";
import { getTables } from "../../../store/actions/tables";
import propTypes from "../../propTypes";

function Tables({ getTables }) {
  const { path } = useRouteMatch();
  useEffect(() => {
    getTables();
  }, []);
  return (
    <Switch>
      <Route exact path={`${path}/`} component={TablesList} />
      <Route path={`${path}/:id`} component={TablePage} />
    </Switch>
  );
}

Tables.propTypes = {
  getTables: propTypes.func.isRequired
};

const mapDispatchToProps = {
  getTables: getTables
};

export default connect(null, mapDispatchToProps)(Tables);
