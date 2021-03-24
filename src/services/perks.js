import api from "./apiconfig";

//Create a new perk
export const createPerk = async (data, allianceId) => {
  const resp = await api.post("/perks-create/", {
    perk: { ...data, alliance_id: allianceId },
  });
  return resp.data;
};

//Edit a business
export const updatePerk = async (id, data) => {
  const resp = await api.patch(`/perks-edit/${id}/`, { perk: data });
  return resp.data;
};

//Delete a business
export const deletePerk = async (id) => {
  const resp = await api.delete(`/perks/${id}/`);
  return resp;
};

//Get one business
export const getBusiness = async (id) => {
  const resp = await api.get(`/perks/${id}`);
  return resp.data;
};

//show all businesses
export const showBusinesses = async () => {
  const resp = await api.get("/perks");
  return resp.data;
};
