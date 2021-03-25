import api from "./apiconfig";

//Create a new business
export const createBusiness = async (data) => {
  const resp = await api.post("/businesses", { business: data });
  return resp.data;
};

//Edit a business
export const updateBusiness = async (id, data) => {
  const resp = await api.patch(`/businesses/${id}`, { business: data });
  return resp.data;
};

//Delete a business
export const deleteBusiness = async (id) => {
  const resp = await api.delete(`/businesses/${id}`);
  return resp;
};

//Get one business
export const getBusiness = async (id) => {
  const resp = await api.get(`/businesses/${id}`);
  return resp.data;
};

//show all businesses
export const showBusinesses = async () => {
  const resp = await api.get("/businesses");
  return resp.data;
};

export const getUserBusiness = async () => {
  const resp = await api.get()
}
