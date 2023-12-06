import SendIcon from '@mui/icons-material/Send';
// end Icon

import { Button, Stack, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { printLog } from '../../hook/helper';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../profile/config/userSlice';

import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name required').min(5, 'Min 5 character'),
  email: Yup.string().required('Email required'),
  password: Yup.string().required('Password required').min(6, 'Min 6 character'),
});

const SignupComponent = () => {
  const { curentUser, isLoading, isError, isSuccess, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Handle submit form
  const onSubmit = (value, props) => {
    dispatch(register(value));
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
            <h2 className="uppercase text-xl text-center font-semibold mb-4 text-sky-700">Sign Up</h2>
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
                              label="Name"
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
