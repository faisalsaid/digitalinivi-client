import axios from 'axios';
import { apiURI } from '../../../config/environtment';

const createOrder = async (payload, token) => {
  //   console.log('createOrder', payload, token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${apiURI}/order`, payload, config);
  //   console.log(response.data);

  return response.data;
};

const getAllOrder = async (order_id, token) => {
  // console.log('createOrder', token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${apiURI}/order?store_id=${order_id}`, config);
  // console.log(response.data);

  return response.data;
};

const deleteOneById = async (order_id, token) => {
  console.log('deleteOneById', order_id, token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${apiURI}/order/${order_id}`, config);
  console.log(response.data);

  return response.data;
};

const updateOrderById = async (order, token) => {
  console.log('updateOrderById', order);

  const { _id, ...payload } = order;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${apiURI}/order/${_id}`, payload, config);
  // console.log(response.data);

  return response.data;
};

const orderServices = {
  createOrder,
  getAllOrder,
  deleteOneById,
  updateOrderById,
};
export default orderServices;
