import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneStore } from './config/storeSlice';

const StoreDetails = () => {
  const { theStore, isLoading } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const { storeId } = useParams();

  //   console.log(theStore);
  useEffect(() => {
    dispatch(getOneStore(storeId));
  }, [storeId]);

  if (isLoading) {
    return <>...Loding</>;
  }
  return (
    <>
      {theStore.stack ? (
        <p>Toko Tidak Ditemukan</p>
      ) : (
        <div>
          <div className="flex gap-3 items-center">
            <div className="h-14 w-14 rounded-full overflow-hidden ">
              <img src={theStore.avatar} />
            </div>
            <h2 className="text-2xl">{theStore && theStore?.storeName}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreDetails;
