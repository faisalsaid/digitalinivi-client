import React, { useEffect } from 'react';
import MasterTemplate from '../templates/invitationTemplate/MasterTemplate';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneOrder } from './config/orderSlice';

const OrderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { store, order } = useParams();
  const { theOrder, isLoading } = useSelector((state) => state.order);
  const { curentUser } = useSelector((state) => state.user);

  const invitaionTheme = {
    code: theOrder?.invitationDetail?.theme,
    type: theOrder?.invitationDetail?.type,
    color: theOrder?.invitationDetail?.themeColor,
  };
  useEffect(() => {
    const theParams = {
      store,
      order,
    };
    dispatch(getOneOrder(theParams));
  }, [store, order]);

  if (isLoading || !theOrder) {
    return <p>...Loading</p>;
  }

  // console.log(curentUser?._id, theOrder?.store?.owner, theOrder?.isPublish);
  return (
    <>
      {curentUser?._id === theOrder?.store?.owner || theOrder?.isPublish ? (
        <div>
          <MasterTemplate invitaionTheme={invitaionTheme} info={theOrder} />
        </div>
      ) : (
        <p>This Page Private, Please contact {theOrder?.store?.storeName}</p>
      )}
    </>
  );
};

export default OrderComponent;
