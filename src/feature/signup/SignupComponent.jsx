import SendIcon from '@mui/icons-material/Send';
// end Icon

import { Button, Stack, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { printLog } from '../../hook/helper';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../profile/config/userSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

import * as Yup from 'yup';
import AuthPageLeftSide from '../../components/share/AuthPageLeftSide';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

// const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validationSchema = Yup.object({
  name: Yup.string().required('Name required').min(5, 'Min 5 character'),
  email: Yup.string().required('Email required').email().matches(emailRegex, 'invalid email format'),
  password: Yup.string().required('Password required').min(6, 'Min 6 character'),
});

const SignupComponent = () => {
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
    // console.log(value);
    dispatch(register(value));
  };

  // Handle reset form
  const onReset = (value, props) => {
    props.setSubmitting(false);
    // dispatch(resetListOder());
  };
  return (
    <div className="flex w-full mx-0 h-screen justify-center items-center">
      <div className="sm:max-w-7xl w-full p-4  sm:h-[80%] sm:w-[80%] flex rounded-md overflow-hidden">
        <AuthPageLeftSide />
        <div className="sm:flex-1 w-full  flex flex-col gap-2 justify-center items-center bg-white  p-4 sm:max-w-[50%]">
          <div className="border p-4 rounded-md bg-white w-full">
            <h2 className="uppercase text-xl text-center font-semibold mb-4 text-sky-700">MENDAFTAR</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onReset={onReset} onSubmit={onSubmit} enableReinitialize>
              {(formik) => {
                return (
                  <Form>
                    <Stack gap={2}>
                      <Field name="name">
                        {({ field, form, meta }) => {
                          // console.log(field, meta);
                          return (
                            <TextField
                              disabled={isLoading}
                              {...field}
                              variant="outlined"
                              label="Nama"
                              type={'text'}
                              error={meta.touched && meta.error ? true : false}
                              helperText={meta.touched && meta.error && meta.error}
                            />
                          );
                        }}
                      </Field>
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
                              label="Kata Sandi"
                              type={'password'}
                              error={meta.touched && meta.error ? true : false}
                              helperText={meta.touched && meta.error && meta.error}
                            />
                          );
                        }}
                      </Field>

                      <Button type="submit" variant="contained" startIcon={<SendIcon />} disabled={isLoading || !formik.dirty || (formik.dirty && !formik.isValid)}>
                        {isLoading ? '...loading' : 'Daftarkan Akun'}
                      </Button>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="w-full flex gap-2">
            <p className="text-sm text-slate-600">Sudah punya akun?</p>
            <Link className="text-sm  underline text-sky-600" to={'/signin'}>
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
