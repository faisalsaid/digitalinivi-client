import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditNoteIcon from '@mui/icons-material/EditNote';
// ICONS END

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { getOneStore } from './config/storeSlice';
import { Button, IconButton, Tooltip } from '@mui/material';
import AddInvitation from './invitation/AddInvitation';
import { deleteOrderById, fetchAllOrder } from '../order/config/orderSlice';
import { DataGrid } from '@mui/x-data-grid';

const StoreDetails = () => {
  const navigation = useNavigate();
  const { theStore, isLoading } = useSelector((state) => state.store);
  const { listOrder } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const { storeId } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  console.log(listOrder);

  const columns = [
    { field: 'customerName', headerName: 'Pemesan', width: 200, valueGetter: (params) => params.row.customerDetail.name },
    { field: 'phone', headerName: 'No Kontak', width: 130, valueGetter: (params) => params.row.customerDetail.phone },
    { field: 'type', headerName: 'Tipe', width: 100, valueGetter: (params) => (params.row.invitationDetail.type === 'marriage' ? 'Pernikahan' : 'Ulang Tahun'), sortable: false },
    { field: 'theme', headerName: 'Tema', width: 80, valueGetter: (params) => params.row.invitationDetail.theme.toUpperCase() },
    { field: 'slug', headerName: 'Kode Undangan', width: 200, valueGetter: (params) => params.row.slug },
    { field: 'groom', headerName: 'Pria', width: 200, valueGetter: (params) => params.row.invitationDetail.groomDetail.nickName },
    { field: 'bride', headerName: 'Wanita', width: 200, valueGetter: (params) => params.row.invitationDetail.brideDetail.nickName },

    {
      field: 'action',
      headerName: 'Kelola',
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <>
          {/* {console.log(params)} */}
          <Tooltip title="Hapus">
            <IconButton onClick={() => handleDeleteOrder(params.id)} color="error" aria-label="delete">
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEditInvitation(params.row)} color="success" aria-label="delete">
              <EditNoteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton color="info" aria-label="delete">
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  // console.log(listOrder);
  useEffect(() => {
    dispatch(getOneStore(storeId));
  }, [storeId]);

  useEffect(() => {
    dispatch(fetchAllOrder(storeId));
  }, [theStore]);

  // useEffect(() => {
  //   setRows(listOrder);
  // }, [listOrder]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddInvitationModal = () => {
    setOpenModal(true);
    // setModalData(theStore);
  };

  const handleEditInvitation = (invitaion_data) => {
    setOpenModal(true);
    setModalData(invitaion_data);
    // console.log(invitaion_data);
  };

  const getRowId = (row) => {
    return row._id;
  };

  const handleDeleteOrder = (order_id) => {
    dispatch(deleteOrderById(order_id));
  };

  if (isLoading) {
    return <>...Loding</>;
  }
  return (
    <>
      {theStore.stack ? (
        <p>Toko Tidak Ditemukan</p>
      ) : (
        <div className="flex flex-col gap-2 max-w-[100vw] ">
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
          <div style={{ height: 400, width: '90%' }}>
            <DataGrid
              getRowId={getRowId}
              rows={listOrder}
              rowSelection
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
          <AddInvitation openModal={openModal} handleCloseModal={handleCloseModal} store={theStore} data={modalData} />
        </div>
      )}
    </>
  );
};

export default StoreDetails;
