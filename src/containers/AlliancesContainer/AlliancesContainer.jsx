import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AllianceCreate from "../../screens/AllianceCreate/AllianceCreate";
import AllianceEdit from "../../screens/AllianceEdit/AllianceEdit";
import AllianceIndex from "../../screens/AllianceIndex/AllianceIndex";
import AllianceProfile from "../../screens/AllianceProfile/AllianceProfile";

export default function AlliancesContainer() {
  const [alliances, setAlliances] = useState([]);

  //alliance api calls and functions and state can go here

  return (
    <Switch>
      <Route path="/alliances">
        <AllianceIndex alliances={alliances} />
      </Route>
      <Route path="/alliances/:id">
        <AllianceProfile alliances={alliances} />
      </Route>
      <Route path="/alliances/create">
        <AllianceCreate />
      </Route>
      <Route path="/alliances/:id/edit">
        <AllianceEdit />
      </Route>
    </Switch>
  );
}
