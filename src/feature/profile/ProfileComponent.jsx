import { Stack, Typography } from '@mui/material';
import React from 'react';

const ProfileComponent = () => {
  return (
    <Stack direction={'column'}>
      <Stack>
        <Typography component={'h3'} variant="h5">
          Profile
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileComponent;
