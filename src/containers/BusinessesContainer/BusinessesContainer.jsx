import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router";
import BusinessCreate from "../../screens/BusinessCreate/BusinessCreate";
import BusinessEdit from "../../screens/BusinessEdit/BusinessEdit";
import BusinessIndex from "../../screens/BusinessIndex/BusinessIndex";
import BusinessProfile from "../../screens/BusinessProfile/BusinessProfile";
import SignIn from "../../screens/SignIn/SignIn";
import {
  createBusiness,
  showBusinesses,
  updateBusiness,
} from "../../services/businesses";

export default function BusinessesContainer({
  handleLogin,
  currentUser,
  userBusinesses,
}) {
  const [businesses, setBusinesses] = useState([]);
  const history = useHistory();

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
    history.push("/businesses");
    return resp;
  };

  const handleUpdate = async (id, data) => {
    const resp = await updateBusiness(id, data);
    return resp;
  };

  return (
    <Switch>
      <Route path="/businesses/:id/edit">
        <BusinessEdit handleUpdate={handleUpdate} />
      </Route>
      <Route path="/businesses/create">
        <BusinessCreate handleCreate={handleCreate} currentUser={currentUser} />
      </Route>
      <Route path="/businesses/:id">
        <BusinessProfile businesses={businesses} currentUser={currentUser} />
      </Route>
      <Route path="/businesses/sign-in">
        <SignIn />
      </Route>
      <Route path="/businesses">
        <BusinessIndex
          businesses={businesses}
          userBusinesses={userBusinesses}
        />
      </Route>
    </Switch>
  );
}
