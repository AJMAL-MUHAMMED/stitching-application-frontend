import axios from "axios";
const host = process.env.REACT_APP_BACKEND_URL;

export const adminLogin = async (datas) => {
  try {
    const { data } = await axios.post(`${host}/admin/auth/login`, datas);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
