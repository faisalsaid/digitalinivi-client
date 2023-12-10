import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
// ICONS END

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStore } from '../store/config/storeSlice';
import { useEffect, useState } from 'react';
import { Button, Stack, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Avatar } from '@mui/material';
import { useNavigate } from 'react-router';
import AddStore from './AddStore';

const StoreComponent = () => {
  const { storeList, isLoading } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    dispatch(fetchAllStore());
  }, []);

  const handleChooseStore = (storeId) => {
    navigate(`/store/${storeId}`);
    // console.log(storeId);
  };
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex justify-between items-center">
        <Typography variant="h5" component={'h4'}>
          Toko Anda :
        </Typography>
        <Button variant="contained" startIcon={<AddBusinessIcon />} onClick={() => setOpenModal(true)}>
          {storeList.length === 0 ? 'Buat Toko' : 'Tambah Toko'}
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {storeList &&
          storeList.map((data, i) => (
            <Card key={i}>
              <CardHeader
                avatar={<Avatar src={data.avatar} aria-label="recipe"></Avatar>}
                action={
                  <IconButton onClick={() => handleChooseStore(data._id)} aria-label="view_detail">
                    <VisibilityIcon />
                  </IconButton>
                }
                title={data.storeName}
                subheader={data.slug}
              />
              {/* <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="Paella dish" /> */}
              {/* <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions> */}
            </Card>
          ))}
      </div>
      <AddStore openModal={openModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default StoreComponent;
