import AddBusinessIcon from '@mui/icons-material/AddBusiness';
// Import icons END

import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

const DashboardComponent = () => {
  return (
    <Stack component={'div'}>
      <div className="flex gap-2 flex-col sm:flex-row sm:justify-between">
        <Typography component={'h3'} variant="h5" fontWeight={400} color={'darkslategray'}>
          Hi, User
        </Typography>
        <Button variant="contained" startIcon={<AddBusinessIcon />}>
          Create Store
        </Button>
      </div>
    </Stack>
  );
};

export default DashboardComponent;
