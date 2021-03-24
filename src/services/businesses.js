import api from "./apiconfig";

//Create a new business
export const createBusiness = async (data) => {
  const resp = await api.post("/business-create/", { business: data });
  return resp.data;
};

//Edit a business
export const updateBusiness = async (id, data) => {
  const resp = await api.patch(`/business-edit/${id}/`, { business: data });
  return resp.data;
};

//Delete a business
export const deleteBusiness = async (id) => {
  const resp = await api.delete(`/business/${id}/`);
  return resp;
};

//Get one business
export const getBusiness = async (id) => {
  const resp = await api.get(`/business/${id}`);
  return resp.data;
};

//show all businesses
export const showBusinesses = async () => {
  const resp = await api.get("/business");
  return resp.data;
};
