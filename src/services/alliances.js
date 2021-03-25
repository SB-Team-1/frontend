import api from "./apiconfig";

//Create a new alliance
export const createAlliance = async (data) => {
  const resp = await api.post("/alliances", { alliance: data });
  return resp.data;
};

//Edit a alliance
export const updateAlliance = async (id, data) => {
  const resp = await api.patch(`/alliances/${id}`, { alliance: data });
  return resp.data;
};

//Delete a alliance
export const deleteAlliance = async (id) => {
  const resp = await api.delete(`/alliances/${id}`);
  return resp;
};

//Get one alliance
export const getAlliance = async (id) => {
  const resp = await api.get(`/alliances/${id}`);
  return resp.data;
};

//show all alliances
export const showAlliances = async () => {
  const resp = await api.get("/alliances");
  return resp.data;
};

export const joinAlliance = async (businessId, allianceId) => {
  const resp = await api.post(`/join/${businessId}/${allianceId}`);
  return resp;
};
