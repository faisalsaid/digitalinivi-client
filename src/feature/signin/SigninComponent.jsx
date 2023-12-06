import SendIcon from '@mui/icons-material/Send';
// end Icon

import { Button, Stack, TextField } from '@mui/material';
import React from 'react';

const SigninComponent = () => {
  return (
    <div className="flex w-full mx-0 h-screen justify-center items-center">
      <div className="sm:max-w-7xl  sm:h-[80%] sm:w-[80%] flex rounded-md overflow-hidden">
        <div className="flex-1 hidden sm:flex bg-sky-600"></div>
        <div className="flex-1 flex justify-center items-center bg-white p-4 sm:max-w-[50%]">
          <div className="border p-4 rounded-md bg-white w-full">
            <h2 className="uppercase text-xl text-center font-semibold mb-4">Login</h2>
            <form>
              <Stack gap={2}>
                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained" startIcon={<SendIcon />}>
                  Login
                </Button>
              </Stack>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninComponent;
