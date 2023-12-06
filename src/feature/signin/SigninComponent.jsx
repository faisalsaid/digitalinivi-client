import SendIcon from '@mui/icons-material/Send';
// end Icon

import { Button, Stack, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../profile/config/userSlice';
import { toast } from 'react-toastify';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required').min(6, 'Min 6 character'),
});

const SigninComponent = () => {
  const { curentUser, isLoading, isError, isSuccess, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate('/dashboard');
    }

    dispatch(reset());
  }, [curentUser, isError, isSuccess, message, navigate, dispatch]);

  // Handle submit form
  const onSubmit = (value, props) => {
    dispatch(login(value));
    // console.log(value);
  };

  // Handle reset form
  const onReset = (value, props) => {
    props.setSubmitting(false);
    // dispatch(resetListOder());
  };
  return (
    <div className="flex w-full mx-0 h-screen justify-center items-center">
      <div className="sm:max-w-7xl w-full p-4  sm:h-[80%] sm:w-[80%] flex rounded-md overflow-hidden">
        <div className="flex-1 hidden sm:flex bg-sky-600"></div>
        <div className="sm:flex-1 w-full  flex flex-col gap-2 justify-center items-center bg-white  p-4 sm:max-w-[50%]">
          <div className="border p-4 rounded-md bg-white w-full">
            <h2 className="uppercase text-xl text-center font-semibold mb-4 text-sky-700">Sign In</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onReset={onReset} onSubmit={onSubmit} enableReinitialize>
              {(formik) => {
                return (
                  <Form>
                    <Stack gap={2}>
                      <Field name="email">
                        {({ field, form, meta }) => {
                          // console.log(field, meta);
                          return (
                            <TextField
                              disabled={isLoading}
                              {...field}
                              variant="outlined"
                              label="Email"
                              type={'email'}
                              error={meta.touched && meta.error ? true : false}
                              helperText={meta.touched && meta.error && meta.error}
                            />
                          );
                        }}
                      </Field>
                      <Field name="password">
                        {({ field, form, meta }) => {
                          // console.log(field, form, meta);
                          return (
                            <TextField
                              disabled={isLoading}
                              {...field}
                              variant="outlined"
                              label="Password"
                              type={'password'}
                              error={meta.touched && meta.error ? true : false}
                              helperText={meta.touched && meta.error && meta.error}
                            />
                          );
                        }}
                      </Field>

                      <Button type="submit" variant="contained" startIcon={<SendIcon />} disabled={isLoading}>
                        {isLoading ? '...loading' : 'register'}
                      </Button>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
            {/* <form>
              <Stack gap={2}>
                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained" startIcon={<SendIcon />}>
                  Login
                </Button>
              </Stack>
            </form> */}
          </div>
          <div className="w-full flex gap-2">
            <p className="text-sm text-slate-600">Dont have an acount?</p>{' '}
            <Link className="text-sm  underline text-sky-600" to={'/signup'}>
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninComponent;
