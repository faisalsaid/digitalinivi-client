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
  const response = await axios.post(`${apiURI}/stores`, payload, config);
  // console.log(response.data);

  return response.data;
};

const updateStore = async (data, token) => {
  const { _id, ...payload } = data;
  // console.log('createStore', _id, '>>>>>', payload, '>>>>>', token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${apiURI}/stores/${_id}`, payload, config);
  // console.log(response.data);

  return response.data;
};

const deleteStore = async (_id, token) => {
  // console.log('deleteStore >>', _id, '>>>>>', token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${apiURI}/stores/${_id}`, config);
  // console.log(response.data);

  return response.data;
};

const storeServices = {
  getAllStore,
  getStoreById,
  createStore,
  updateStore,
  deleteStore,
};
export default storeServices;
