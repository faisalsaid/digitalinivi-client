import React, { useEffect } from 'react';
import MasterTemplate from '../templates/invitationTemplate/MasterTemplate';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneOrder } from './config/orderSlice';

const OrderComponent = () => {
  const dispatch = useDispatch();
  const { store, order } = useParams();
  const { theOrder } = useSelector((state) => state.order);
  // console.log(store, order);

  useEffect(() => {
    const theParams = {
      store,
      order,
    };
    dispatch(getOneOrder(theParams));
  }, [store, order]);
  return (
    <>
      <MasterTemplate invitaionDetail={theOrder} />
    </>
  );
};

export default OrderComponent;
