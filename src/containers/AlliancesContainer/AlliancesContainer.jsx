import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import AllianceCreate from "../../screens/AllianceCreate/AllianceCreate";
import AllianceEdit from "../../screens/AllianceEdit/AllianceEdit";
import AllianceIndex from "../../screens/AllianceIndex/AllianceIndex";
import AllianceProfile from "../../screens/AllianceProfile/AllianceProfile";
import {
  createAlliance,
  showAlliances,
  updateAlliance,
} from "../../services/alliances";

export default function AlliancesContainer() {
  const [alliances, setAlliances] = useState([]);
  const history = useHistory();

  //alliance api calls and functions and state can go here
  useEffect(() => {
    const fetchAlliances = async () => {
      const resp = await showAlliances();
      setAlliances(resp);
    };
    fetchAlliances();
  }, []);

  const handleCreate = async (data) => {
    const resp = await createAlliance(data);
    history.push("/alliances");
    return resp;
  };

  const handleUpdate = async (id, data) => {
    const resp = await updateAlliance(id, data);
    return resp;
  };
  return (
    <Switch>
      <Route path="/alliances/:id/edit">
        <AllianceEdit handleUpdate={handleUpdate} />
      </Route>
      <Route path="/alliances/create">
        <AllianceCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/alliances/:id">
        <AllianceProfile alliances={alliances} />
      </Route>
      <Route path="/alliances">
        <AllianceIndex alliances={alliances} />
      </Route>
    </Switch>
  );
}
