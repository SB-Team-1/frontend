import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import BusinessCreate from "../../screens/BusinessCreate/BusinessCreate";
import BusinessIndex from "../../screens/BusinessIndex/BusinessIndex";
import BusinessProfile from "../../screens/BusinessProfile/BusinessProfile";
import SignIn from "../../screens/SignIn/SignIn";
import { createBusiness, showBusinesses } from "../../services/businesses";

export default function BusinessesContainer({ handleLogin, currentUser }) {
  const [businesses, setBusinesses] = useState([]);

  //businesses api calls, functions state is kept here

  useEffect(() => {
    const fetchBusinesses = async () => {
      const resp = await showBusinesses();
      setBusinesses(resp);
    };
    fetchBusinesses();
  }, []);

  const handleCreate = async (data) => {
    const resp = await createBusiness(data);
    return resp;
  };

  return (
    <Switch>
      <Route path="/businesses">
        <BusinessIndex businesses={businesses} />
      </Route>
      <Route path="/businesses/:id">
        <BusinessProfile />
      </Route>
      <Route path="/businesses/create">
        <BusinessCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/businesses/sign-in">
        <SignIn />
      </Route>
    </Switch>
  );
}
