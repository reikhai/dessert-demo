import React, { memo } from "react";
import { Route } from "react-router";

const PublicRoute = memo((props) => {
  return <Route {...props} />;
});

export default PublicRoute;
