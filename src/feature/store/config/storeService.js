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

const getStoreById = async (storeId, token) => {
  // console.log('getStoreById', storeId, token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${apiURI}/stores/${storeId}`, config);
  // console.log(response.data);

  return response.data;
};

const createStore = async (payload, token) => {
  console.log('createStore', payload, token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // const response = await axios.post(`${apiURI}/stores`,payload,  config);
  // console.log(response.data);

  return response.data;
};

const storeServices = {
  getAllStore,
  getStoreById,
  createStore,
};
export default storeServices;
