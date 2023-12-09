import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
// Import icons END

import { Button, Stack, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Avatar } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DashboardComponent = () => {
  const { storeList } = useSelector((state) => state.store);
  console.log(storeList);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllStore());
  // }, []);
  return (
    <Stack component={'div'} gap={2}>
      <div className="flex gap-2  justify-between items-center">
        <Typography component={'h3'} variant="h5" fontWeight={400} color={'darkslategray'}>
          Dashboard
        </Typography>
        <Button variant="contained" startIcon={<AddBusinessIcon />}>
          Buat Toko
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-3"></div>
    </Stack>
  );
};

export default DashboardComponent;
