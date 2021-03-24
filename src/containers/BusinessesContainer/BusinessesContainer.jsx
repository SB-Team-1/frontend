import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import BusinessCreate from "../../screens/BusinessCreate/BusinessCreate";
import BusinessIndex from "../../screens/BusinessIndex/BusinessIndex";
import BusinessProfile from "../../screens/BusinessProfile/BusinessProfile";
import SignIn from "../../screens/SignIn/SignIn";

export default function BusinessesContainer() {
  const [businesses, setBusinesses] = useState([]);

  //businesses api calls, functions state is kept here
  return (
    <Switch>
      <Route path="/businesses">
        <BusinessIndex />
      </Route>
      <Route path="/businesses/:id">
        <BusinessProfile />
      </Route>
      <Route path="/businesses/create">
        <BusinessCreate />
      </Route>
      <Route path="/businesses/sign-in">
        <SignIn />
      </Route>
    </Switch>
  );
}
