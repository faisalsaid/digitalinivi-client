import axios from 'axios';
import { apiURI } from '../../../config/environtment';

const getAllStore = async (token) => {
  //   console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${apiURI}/stores`, config);

  return response.data;
};

const storeServices = {
  getAllStore,
};
export default storeServices;
