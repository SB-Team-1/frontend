import api from "./apiconfig";

//Create a new alliance
export const createAlliance = async (data) => {
  const resp = await api.post("/alliance-create/", { alliance: data });
  return resp.data;
};

//Edit a alliance
export const updateAlliance = async (id, data) => {
  const resp = await api.patch(`/alliance-edit/${id}/`, { alliance: data });
  return resp.data;
};

//Delete a alliance
export const deleteAlliance = async (id) => {
  const resp = await api.delete(`/alliance/${id}/`);
  return resp;
};

//Get one alliance
export const getAlliance = async (id) => {
  const resp = await api.get(`/alliance/${id}`);
  return resp.data;
};

//show all alliances
export const showAlliancees = async () => {
  const resp = await api.get("/alliance");
  return resp.data;
};
