import CloseIcon from '@mui/icons-material/Close';
import PhotoIcon from '@mui/icons-material/Photo';

// END ICONS

import React, { useState } from 'react';
import { Button, Modal, Box, Tab, Tabs, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const AddInvitation = ({ openModal, handleCloseModal, data }) => {
  const [value, setValue] = useState('customerDetail');

  const initialValues = {
    customerDetail: {
      name: '',
      email: '',
      phone: '',
    },
    invitationDetail: {
      type: 'marriage',
      theme: 'nkh-001',
    },
    groomDetail: {
      fullName: '',
      nickname: '',
      father: '',
      mother: '',
    },
    brideDetail: {
      fullName: '',
      nickname: '',
      father: '',
      mother: '',
    },
    marriageInfo: {
      date: '',
      location: '',
      maps: '',
    },
    receptionInfo: {
      date: '',
      location: '',
      maps: '',
    },
    galery: [],
  };

  const validationSchema = Yup.object({
    customerDetail: Yup.object({
      name: Yup.string().required('Nama harus terisi').min(3, 'Minimal 3 karakter'),
      email: Yup.string(),
      phone: Yup.string(),
    }),
    invitationDetail: Yup.object({
      type: Yup.string().required('Tipe harus Terisi'),
      theme: Yup.string().required('Tema harus Terisi'),
    }),
    groomDetail: Yup.object({
      fullName: Yup.string().required('Nama lengkap harus terisi'),
      nickname: Yup.string().required('Nama panggilan harus terisi'),
      father: Yup.string(),
      mother: Yup.string(),
    }),
    brideDetail: Yup.object({
      fullName: Yup.string().required('Nama lengkap harus terisi'),
      nickname: Yup.string().required('Nama panggilan harus terisi'),
      father: Yup.string(),
      mother: Yup.string(),
    }),
    marriageInfo: Yup.object({
      date: Yup.string().required('Waktu harus terisi'),
      location: Yup.string().required('Lokasi harus terisi'),
      maps: Yup.string(),
    }),
    receptionInfo: Yup.object({
      date: Yup.string().required('Waktu harus terisi'),
      location: Yup.string().required('Lokasi harus terisi'),
      maps: Yup.string(),
    }),
    galery: Yup.array(),
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToCloseModal = () => {
    handleCloseModal();
    // onReset();
  };

  const onSubmit = (value, props) => {
    console.log(value);
  };
  const onReset = () => {};
  return (
    <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <div className="">
          <Typography>Data Undangan :</Typography>
          <TabContext value={value}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
              <Tab label="Pemesan" value="customerDetail" />
              <Tab label="Detail" value="invitationDetail" />
              <Tab label="Pengantin" value="brideDetail" />
            </Tabs>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onReset={onReset} onSubmit={onSubmit} enableReinitialize>
              {(formik) => {
                // console.log(formik);
                return (
                  <Form>
                    <div className="flex flex-col justify-between h-full">
                      <div className=" h-96 overflow-y-scroll">
                        <TabPanel value="customerDetail">
                          <div className="flex flex-col gap-4">
                            <Field name="customerDetail.name">
                              {({ field, form, meta }) => {
                                // console.log(field, form, meta);
                                return (
                                  <TextField
                                    // disabled={isLoading}
                                    {...field}
                                    variant="outlined"
                                    label="Nama"
                                    type={'text'}
                                    size="small"
                                    fullWidth
                                    error={meta.touched && meta.error ? true : false}
                                    helperText={meta.touched && meta.error && meta.error}
                                  />
                                );
                              }}
                            </Field>
                            <Field name="customerDetail.email">
                              {({ field, form, meta }) => {
                                // console.log(field, form, meta);
                                return (
                                  <TextField
                                    // disabled={isLoading}
                                    {...field}
                                    variant="outlined"
                                    label="Email"
                                    type={'text'}
                                    size="small"
                                    fullWidth
                                    error={meta.touched && meta.error ? true : false}
                                    helperText={meta.touched && meta.error && meta.error}
                                  />
                                );
                              }}
                            </Field>
                            <Field name="customerDetail.phone">
                              {({ field, form, meta }) => {
                                // console.log(field, form, meta);
                                return (
                                  <TextField
                                    // disabled={isLoading}
                                    {...field}
                                    variant="outlined"
                                    label="No Hp"
                                    type={'text'}
                                    size="small"
                                    fullWidth
                                    error={meta.touched && meta.error ? true : false}
                                    helperText={meta.touched && meta.error && meta.error}
                                  />
                                );
                              }}
                            </Field>
                          </div>
                        </TabPanel>
                        <TabPanel value="invitationDetail">
                          <div className="flex flex-col gap-4">
                            <Field name="invitationDetail.type">
                              {({ field, form, meta }) => {
                                console.log(field, form, meta);
                                return (
                                  <FormControl {...field} fullWidth>
                                    <InputLabel id="invitation-type-label">Tipe</InputLabel>
                                    <Select labelId="invitation-type" id="invitation-type-select" value={form.values.invitationDetail.type} label="Tipe">
                                      <MenuItem value={'marriage'}>Nikahan</MenuItem>
                                      <MenuItem value={'birthday'}>Ulang Tahun</MenuItem>
                                    </Select>
                                  </FormControl>
                                );
                              }}
                            </Field>
                            <Field name="customerDetail.theme">
                              {({ field, form, meta }) => {
                                // console.log(field, form, meta);
                                return (
                                  <TextField
                                    // disabled={isLoading}
                                    {...field}
                                    variant="outlined"
                                    label="Email"
                                    type={'text'}
                                    size="small"
                                    fullWidth
                                    error={meta.touched && meta.error ? true : false}
                                    helperText={meta.touched && meta.error && meta.error}
                                  />
                                );
                              }}
                            </Field>
                          </div>
                        </TabPanel>
                        <TabPanel value="brideDetail">brideDetail</TabPanel>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button type="reset" color="error" className="" variant="contained" startIcon={<CloseIcon />} onClick={handleToCloseModal}>
                          Batal
                        </Button>
                        <Button type="submit" className="" variant="contained" startIcon={<PhotoIcon />} disabled={false}>
                          Kirim
                        </Button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </TabContext>
        </div>
      </Box>
    </Modal>
  );
};

export default AddInvitation;

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
