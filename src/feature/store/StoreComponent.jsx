import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// ICONS END

import { useDispatch, useSelector } from 'react-redux';
import { deleteStore, fetchAllStore } from '../store/config/storeSlice';
import { useEffect, useState } from 'react';
import { Button, Stack, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Avatar, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router';
import AddStore from './AddStore';

const StoreComponent = () => {
  const { storeList, isLoading, isSuccess, isError } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [prevData, setPrevData] = useState({});
  const [diplayStore, setDisplayStore] = useState([]);

  console.log(storeList, isLoading, isSuccess);

  const handleCloseModal = () => {
    setOpenModal(false);
    setPrevData({});
  };

  useEffect(() => {
    console.log('fet');
    dispatch(fetchAllStore());
  }, []);

  useEffect(() => {
    console.log('change');
    setDisplayStore(storeList);
  }, [storeList]);

  const handleChooseStore = (storeId) => {
    navigate(`/store/${storeId}`);
    // console.log(storeId);
  };

  const handleEditStore = (data) => {
    // console.log(data);
    setPrevData(data);
    setOpenModal(true);
  };

  const handleDeleteStore = (_id) => {
    console.log(_id);
    dispatch(deleteStore(_id));
  };

  return (
    <div className="flex gap-4 flex-col">
      <div className="flex justify-between sm:items-center flex-col gap-2">
        <Typography variant="h5" component={'h4'}>
          Toko Anda :
        </Typography>
        <Button variant="contained" startIcon={<AddBusinessIcon />} onClick={() => setOpenModal(true)}>
          {storeList.length === 0 ? 'Buat Toko' : 'Tambah Toko'}
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {diplayStore &&
          diplayStore.map((data, i) => (
            <Card key={i}>
              <CardHeader
                avatar={<Avatar src={data.avatar} aria-label="recipe"></Avatar>}
                // action={
                //   <IconButton onClick={() => handleChooseStore(data._id)} aria-label="view_detail">
                //     <VisibilityIcon />
                //   </IconButton>
                // }
                title={data.storeName}
                subheader={data.slug}
              />
              {/* <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="Paella dish" /> */}
              {/* <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent> */}
              <CardActions disableSpacing>
                <Tooltip title="Hapus">
                  <IconButton onClick={() => handleDeleteStore(data._id)} color="error" sx={{ marginRight: 'auto' }} aria-label="delete">
                    <DeleteForeverIcon />
                  </IconButton>
                </Tooltip>
                <IconButton onClick={() => handleEditStore(data)} color="success" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <Tooltip title="Lihat">
                  <IconButton onClick={() => handleChooseStore(data._id)} color="primary" aria-label="detail">
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          ))}
      </div>
      <AddStore openModal={openModal} handleCloseModal={handleCloseModal} data={prevData} />
    </div>
  );
};

export default StoreComponent;
