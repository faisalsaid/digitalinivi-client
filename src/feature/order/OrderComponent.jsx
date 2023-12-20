import React, { useEffect } from 'react';
import MasterTemplate from '../templates/invitationTemplate/MasterTemplate';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneOrder } from './config/orderSlice';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

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
    document.title = `${theOrder?.invitationDetail?.type === 'marriage' ? 'Nikahan' : ''} ${theOrder?.invitationDetail?.groomDetail?.nickName} & ${
      theOrder?.invitationDetail?.brideDetail?.nickName
    }`;
  }, [theOrder]);

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
        <MasterTemplate invitaionTheme={invitaionTheme} info={theOrder} />
      ) : (
        <div className="flex bg-sky-100 min-h-screen justify-center items-center flex-col gap-3 p-3 text-center text-slate-600 ">
          <p className="text-4xl font-semibold">Maaf, Bukan Untuk Publik! </p>
          <p>Untuk info mohon hubungi </p>
          <div className=" p-4 rounded-xl text-center bg-sky-50 flex flex-col gap-2 drop-shadow-md">
            <p className="text-2xl font-semibold">{theOrder?.store?.storeName}</p>
            <div className="flex gap-2 items-center justify-center">
              <PhoneAndroidIcon />
              <p>{theOrder?.store?.phoneNumber}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderComponent;
