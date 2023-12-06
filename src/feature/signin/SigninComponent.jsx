import SendIcon from '@mui/icons-material/Send';
// end Icon

import { Button, Stack, TextField } from '@mui/material';
import React from 'react';

const SigninComponent = () => {
  return (
    <div className="flex  w-full mx-0 h-[100vh] justify-center items-center p-4 ">
      <div className="border p-4 rounded-md bg-white w-full">
        <h2 className="uppercase text-center font-semibold mb-4">Login</h2>
        <form>
          <Stack gap={1}>
            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained" startIcon={<SendIcon />}>
              Login
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default SigninComponent;
