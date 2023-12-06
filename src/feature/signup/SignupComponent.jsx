import SendIcon from '@mui/icons-material/Send';
// end Icon

import { Button, Stack, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const SignupComponent = () => {
  return (
    <div className="flex w-full mx-0 h-screen justify-center items-center">
      <div className="sm:max-w-7xl w-full p-4  sm:h-[80%] sm:w-[80%] flex rounded-md overflow-hidden">
        <div className="flex-1 hidden sm:flex bg-sky-600"></div>
        <div className="sm:flex-1 w-full  flex flex-col gap-2 justify-center items-center bg-white  p-4 sm:max-w-[50%]">
          <div className="border p-4 rounded-md bg-white w-full">
            <h2 className="uppercase text-xl text-center font-semibold mb-4 text-sky-700">Sign Up</h2>
            <form>
              <Stack gap={2}>
                <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained" startIcon={<SendIcon />}>
                  signup
                </Button>
              </Stack>
            </form>
          </div>
          <div className="w-full flex gap-2">
            <p className="text-sm text-slate-600">Already have an acount?</p>
            <Link className="text-sm  underline text-sky-600" to={'/signin'}>
              Signin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
