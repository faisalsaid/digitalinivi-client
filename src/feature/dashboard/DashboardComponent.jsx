import AddBusinessIcon from '@mui/icons-material/AddBusiness';
// Import icons END

import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

const DashboardComponent = () => {
  return (
    <Stack component={'div'}>
      <div className="flex gap-2  justify-between items-center">
        <Typography component={'h3'} variant="h5" fontWeight={400} color={'darkslategray'}>
          Dashboard
        </Typography>
        <Button variant="contained" startIcon={<AddBusinessIcon />}>
          Buat Toko
        </Button>
      </div>
    </Stack>
  );
};

export default DashboardComponent;
