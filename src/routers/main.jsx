import React, { memo } from "react";
import { Switch } from "react-router-dom";
import routes from "./routes";
import PublicRoute from "./public.jsx";

const Routes = memo(() => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <PublicRoute key={i} {...route} />;
      })}
    </Switch>
  );
});

export default Routes;
