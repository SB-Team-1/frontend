import api from "./apiconfig";

export const loginUser = async (loginData) => {
  const resp = await api.post("/auth/login", { authentication: loginData });
  console.log(resp);
  localStorage.setItem("authToken", resp.data.user.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.user.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  const resp = await api.post("/users", {
    user: registerData,
  });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

// export const changePassword = async ({ oldPassword, newPassword }) => {
//   const resp = await api.put("/change-pw/", {
//     passwords: { new: newPassword, old: oldPassword },
//   });
//   return resp.data;
// };

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify/");
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};
