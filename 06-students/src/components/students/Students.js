import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import StudentsList from "./StudentsList";
import StudentForm from "./StudentForm";

function Students() {
    const { path } = useRouteMatch();
    return (
      <div>
        <Switch>
          <Route exact path={`${path}/`} component={StudentsList} />
          <Route path={`${path}/:id`} component={StudentForm} />
        </Switch>
      </div>
    );
}

export default Students;
