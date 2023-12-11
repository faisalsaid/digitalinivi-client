import axios from 'axios';
import { apiURI } from '../../../config/environtment';

const createOrder = async (payload, token) => {
  console.log('createOrder', payload, token);
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   const response = await axios.post(`${apiURI}/order`, payload, config);
  // console.log(response.data);

  return response.data;
};

const orderServices = {
  createOrder,
};
export default orderServices;
