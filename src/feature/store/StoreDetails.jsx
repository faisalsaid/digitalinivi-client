import PostAddIcon from '@mui/icons-material/PostAdd';
// ICONS END

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { getOneStore } from './config/storeSlice';
import { Button, Stack, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Avatar, Tooltip } from '@mui/material';
import AddInvitation from './invitation/AddInvitation';

const StoreDetails = () => {
  const navigation = useNavigate();
  const { theStore, isLoading } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const { storeId } = useParams();
  const [openModal, setOpenModal] = useState(false);

  //   console.log(theStore);
  useEffect(() => {
    dispatch(getOneStore(storeId));
  }, [storeId]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddInvitationModal = () => {
    setOpenModal(true);
  };

  if (isLoading) {
    return <>...Loding</>;
  }
  return (
    <>
      {theStore.stack ? (
        <p>Toko Tidak Ditemukan</p>
      ) : (
        <div>
          <div className="flex flex-col gap-2 sm:flex-row items-center justify-between ">
            <div className="flex gap-3 items-center ">
              <div className="h-14 w-14 rounded-full overflow-hidden ">
                <img src={theStore.avatar} />
              </div>
              <h2 className="text-2xl">{theStore && theStore?.storeName}</h2>
            </div>
            <div>
              <Button onClick={handleAddInvitationModal} variant="contained" startIcon={<PostAddIcon />}>
                Buat Undangan
              </Button>
            </div>
          </div>
          <AddInvitation openModal={openModal} handleCloseModal={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default StoreDetails;
