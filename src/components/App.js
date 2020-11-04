import React from "react";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import PrivateRoute from '../pages/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthWrapper from "../pages/AuthWrapper";

const App = () => {
  return (
  <AuthWrapper>
    <Router>
      <Switch>
        <PrivateRoute exact={true} path="/">
          <Dashboard />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  </AuthWrapper>
  );
};

export default App;
