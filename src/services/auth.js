import api from "./apiconfig";

export const loginUser = async (loginData) => {
  const resp = await api.post("/sign-in/", { credentials: loginData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Token ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  const resp = await api.post("/sign-up/", {
    credentials: registerData,
  });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Token ${resp.data.token}`;
  return resp.data.user;
};

export const changePassword = async ({ oldPassword, newPassword }) => {
  const resp = await api.put("/change-pw/", {
    passwords: { new: newPassword, old: oldPassword },
  });
  return resp.data;
};

// export const verifyUser = async () => {
//   const token = localStorage.getItem("authToken");
//   if (token) {
//     api.defaults.headers.common.authorization = `Token ${token}`;
//     const resp = await api.get("/verify/");
//     return resp.data;
//   }
//   return null;
// };

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};
