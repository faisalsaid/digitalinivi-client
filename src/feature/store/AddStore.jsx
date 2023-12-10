import { MdEdit } from 'react-icons/md';
import PhotoIcon from '@mui/icons-material/Photo';
import CloseIcon from '@mui/icons-material/Close';
// END ICONS

import React from 'react';
import { Stack, Typography, Modal, Box, Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createStore } from './config/storeSlice';

const initialValues = {
  storeName: '',
};

const validationSchema = Yup.object({
  storeName: Yup.string().required('Required').min(3, 'Min 3 character'),
});

const AddStore = ({ openModal, handleCloseModal }) => {
  const dispatch = useDispatch();
  // Handle submit form
  const onSubmit = (value, props) => {
    // console.log(value);
    dispatch(createStore(value));
    handleCloseModal();
  };

  // Handle reset form
  const onReset = (value, props) => {
    props.setSubmitting(false);
  };
  return (
    <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="p">
          Tambahkan Toko
        </Typography>
        <div>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onReset={onReset} onSubmit={onSubmit} enableReinitialize>
            {(formik) => {
              //   console.log(formik);
              return (
                <Form>
                  <Stack gap={2}>
                    <Field name="storeName">
                      {({ field, form, meta }) => {
                        // console.log(field, form, meta);
                        return (
                          <TextField
                            // disabled={isLoading}
                            {...field}
                            variant="outlined"
                            label="Nama Toko"
                            type={'storeName'}
                            error={meta.touched && meta.error ? true : false}
                            helperText={meta.touched && meta.error && meta.error}
                          />
                        );
                      }}
                    </Field>
                    <div className="flex gap-2 justify-end">
                      <Button type="button" color="error" className="" variant="contained" startIcon={<CloseIcon />} onClick={handleCloseModal}>
                        Batal
                      </Button>
                      <Button
                        type="submit"
                        onClick={() => {}}
                        className=""
                        variant="contained"
                        startIcon={<PhotoIcon />}
                        disabled={!formik.dirty || (formik.dirty && !formik.isValid)}
                      >
                        Tambah
                      </Button>
                    </div>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Box>
    </Modal>
  );
};

export default AddStore;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: 1,
  boxShadow: 24,
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};
