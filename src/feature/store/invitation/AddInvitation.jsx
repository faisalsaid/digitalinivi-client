import CloseIcon from '@mui/icons-material/Close';
import PhotoIcon from '@mui/icons-material/Photo';

// END ICONS

import React, { useState } from 'react';
import { Button, Modal, Box, Tab, Tabs, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { cloudImage } from '../../../config/cloudinary.js';
import { AdvancedImage } from '@cloudinary/react';
import { useDispatch } from 'react-redux';
import { createOrder, updateOrderById } from '../../order/config/orderSlice.js';
import { DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

const AddInvitation = ({ openModal, handleCloseModal, store, data }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('customerDetail');
  const [themeThumbnailPublicId, setThemeThumbnailPublicId] = useState('digitalinvi_avatar/userone-emial-com-avatar');

  const themeThumbnail = cloudImage.image(themeThumbnailPublicId);

  const validationSchema = Yup.object({
    customerDetail: Yup.object({
      name: Yup.string().required('Nama harus terisi').min(3, 'Minimal 3 karakter'),
      phone: Yup.string().required('No. Handphone harus terisi').min(8, 'Minimal 8 karakter'),
      email: Yup.string(),
    }),
    invitationDetail: Yup.object({
      type: Yup.string().required('Tipe harus Terisi'),
      theme: Yup.string().required('Tema harus Terisi'),
      themeColor: Yup.string().required('Warna tema harus Terisi'),
      groomDetail: Yup.object({
        fullName: Yup.string().required('Nama lengkap pria harus terisi').min(3, 'Minimal 3 karakter'),
        nickName: Yup.string().required('Nama sapaan pria harus terisi').min(3, 'Minimal 3 karakter'),
        father: Yup.string().required('Nama ayah pria harus terisi').min(3, 'Minimal 3 karakter'),
        mother: Yup.string().required('Nama ayah pria harus terisi').min(3, 'Minimal 3 karakter'),
      }),
      brideDetail: Yup.object({
        fullName: Yup.string().required('Nama lengkap wanita harus terisi').min(3, 'Minimal 3 karakter'),
        nickName: Yup.string().required('Nama sapaan wanita harus terisi').min(3, 'Minimal 3 karakter'),
        father: Yup.string().required('Nama ayah pria harus terisi').min(3, 'Minimal 3 karakter'),
        mother: Yup.string().required('Nama ayah pria harus terisi').min(3, 'Minimal 3 karakter'),
      }),
      marriageInfo: Yup.object({
        date: Yup.date().required('Tanggal harus terisi'),
        time: Yup.date().required('Waktu harus terisi'),
        location: Yup.string().required('Lokasi harus terisi'),
        maps: Yup.string(),
      }),
      receptionInfo: Yup.object({
        date: Yup.date().required('Tanggal harus terisi'),
        time: Yup.date().required('Waktu harus terisi'),
        location: Yup.string().required('Lokasi harus terisi'),
        maps: Yup.string(),
      }),
      galery: Yup.array(),
    }),
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToCloseModal = () => {
    handleCloseModal();
    // onReset();
  };

  const concateDate = (date, time) => {
    const date1 = new Date(date);
    const time2 = new Date(time);

    // Extract date from date1
    const extractedDate = date1.toISOString().split('T')[0];

    // Extract time from time2
    const extractedTime = time2.toISOString().split('T')[1];

    // Combine date and time
    const result = `${extractedDate}T${extractedTime}`;
    // console.log(result);
    return result;
  };

  const onSubmit = (value, props) => {
    console.log(value);
    const marriageTime = concateDate(value.invitationDetail.marriageInfo.date, value.invitationDetail.marriageInfo.time);
    value.invitationDetail.marriageInfo.date = marriageTime;
    if (value && value._id) {
      console.log(value);
      handleCloseModal();
      dispatch(updateOrderById(value));
    } else {
      const payload = {
        store: store._id,
        ...value,
      };
      handleCloseModal();
      dispatch(createOrder(payload));
    }
  };

  const onReset = (value, props) => {
    console.log(props);
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <div className="">
          <Typography>Data Undangan :</Typography>
          <TabContext value={value}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
              <Tab label="Pemesan" value="customerDetail" />
              <Tab label="Tema" value="theme" />
              <Tab label="Pengantin" value="brideDetail" />
              <Tab label="Waktu & Tempat" value="dateLocation" />
              <Tab label="Galeri" value="galery" />
            </Tabs>
            <Formik initialValues={data} validationSchema={validationSchema} onReset={onReset} onSubmit={onSubmit} enableReinitialize>
              {(formik) => {
                // console.log(formik);
                const { setFieldValue } = formik;
                return (
                  <Form>
                    <div className="flex flex-col justify-between h-full gap-2">
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
                                    // size="small"
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
                                    // size="small"
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
                                    // size="small"
                                    fullWidth
                                    error={meta.touched && meta.error ? true : false}
                                    helperText={meta.touched && meta.error && meta.error}
                                  />
                                );
                              }}
                            </Field>
                          </div>
                        </TabPanel>
                        <TabPanel value="theme">
                          <div className="flex flex-col gap-4">
                            <FormControl fullWidth>
                              <Field name="invitationDetail.type">
                                {({ field, form, meta }) => {
                                  // console.log(field, form, meta);
                                  return (
                                    <>
                                      <InputLabel id="invitation-type-label">Tipe</InputLabel>
                                      <Select
                                        {...field}
                                        // size="small"
                                        labelId="invitation-type-label"
                                        id="invitation-type-select"
                                        value={form.values.invitationDetail.type}
                                        label="Tipe"
                                      >
                                        <MenuItem value={'marriage'}>Nikahan</MenuItem>
                                        {/* <MenuItem value={'birthday'}>Ulang Tahun</MenuItem> */}
                                      </Select>
                                    </>
                                  );
                                }}
                              </Field>
                            </FormControl>
                            <FormControl fullWidth>
                              <Field name="invitationDetail.themeColor">
                                {({ field, form, meta }) => {
                                  // console.log(field, form, meta);
                                  return (
                                    <>
                                      <InputLabel id="invitation-themeColor-label">Warna Tema</InputLabel>
                                      <Select
                                        {...field}
                                        // size="small"
                                        labelId="invitation-themeColor-label"
                                        id="invitation-themeColor-select"
                                        value={form.values.invitationDetail.themeColor}
                                        label="Warna Tema"
                                      >
                                        <MenuItem value={'daun'}>Daun</MenuItem>
                                        <MenuItem value={'laut'}>Laut</MenuItem>
                                        <MenuItem value={'kopi'}>Kopi</MenuItem>
                                        <MenuItem value={'mawar'}>Mawar</MenuItem>
                                      </Select>
                                    </>
                                  );
                                }}
                              </Field>
                            </FormControl>
                            <FormControl fullWidth>
                              <Field name="invitationDetail.theme">
                                {({ field, form, meta }) => {
                                  // console.log(field, form, meta);
                                  return (
                                    <Autocomplete
                                      {...field}
                                      // size="small"
                                      disablePortal
                                      id="combo-box-demo"
                                      options={invitationThemes}
                                      // sx={{ width: 300 }}
                                      fullWidth
                                      defaultValue={{ value: 'nkh-001', label: 'NKH-001' }}
                                      // value={form.values.invitationDetail.theme}
                                      onChange={(e, data) => {
                                        setThemeThumbnailPublicId(data.thumbnail);
                                        setFieldValue('invitationDetail.theme', data.value);
                                      }}
                                      renderInput={(params) => <TextField {...params} label="Tema" />}
                                    />
                                  );
                                }}
                              </Field>
                            </FormControl>

                            <AdvancedImage cldImg={themeThumbnail} />
                          </div>
                        </TabPanel>
                        <TabPanel value="brideDetail">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4">
                              <p>Pengantin Pria :</p>
                              <div className="flex flex-col gap-4">
                                <Field name="invitationDetail.groomDetail.fullName">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Nama Lengkap"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.groomDetail.nickName">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Nama Sapaan"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.groomDetail.father">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Ayah"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.groomDetail.mother">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Ibu"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                              </div>
                            </div>
                            <div className="flex flex-col gap-4">
                              <p>Pengantin Wanita :</p>
                              <div className="flex flex-col gap-4">
                                <Field name="invitationDetail.brideDetail.fullName">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Nama Lengkap"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.brideDetail.nickName">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Nama Sapaan"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.brideDetail.father">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Ayah"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.brideDetail.mother">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Ibu"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel value="dateLocation">
                          <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                              <p>Akad :</p>
                              <div className="flex flex-col gap-4">
                                <Field name="invitationDetail.marriageInfo.date">
                                  {({ field, form, meta }) => {
                                    // console.log(field.value);
                                    return (
                                      <DatePicker
                                        {...field}
                                        value={dayjs(field.value)}
                                        label="Tanggal"
                                        onChange={(data, validate) => {
                                          setFieldValue('invitationDetail.marriageInfo.date', data.$d.toISOString());
                                        }}
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.marriageInfo.time">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TimePicker
                                        {...field}
                                        label="Waktu"
                                        value={dayjs(field.value)}
                                        onChange={(data, validate) => {
                                          setFieldValue('invitationDetail.marriageInfo.time', data.$d.toISOString());
                                        }}
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.marriageInfo.location">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Lokasi"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.marriageInfo.map">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Map"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                              </div>
                            </div>
                            <div className="flex flex-col gap-4">
                              <p>Resepsi :</p>
                              <div className="flex flex-col gap-4">
                                <Field name="invitationDetail.receptionInfo.date">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <DatePicker
                                        {...field}
                                        value={dayjs(field.value)}
                                        label="Tanggal"
                                        onChange={(data, validate) => {
                                          setFieldValue('invitationDetail.receptionInfo.date', data.$d.toISOString());
                                        }}
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                        // size="small"
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.receptionInfo.time">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TimePicker
                                        {...field}
                                        label="Waktu"
                                        value={dayjs(field.value)}
                                        onChange={(data, validate) => {
                                          setFieldValue('invitationDetail.receptionInfo.time', data.$d.toISOString());
                                        }}
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.receptionInfo.location">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Lokasi"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                                <Field name="invitationDetail.receptionInfo.map">
                                  {({ field, form, meta }) => {
                                    // console.log(field, form, meta);
                                    return (
                                      <TextField
                                        // disabled={isLoading}
                                        {...field}
                                        variant="outlined"
                                        label="Map"
                                        type={'text'}
                                        // size="small"
                                        fullWidth
                                        error={meta.touched && meta.error ? true : false}
                                        helperText={meta.touched && meta.error && meta.error}
                                      />
                                    );
                                  }}
                                </Field>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel value="galery">galery</TabPanel>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button type="reset" color="error" className="" variant="contained" startIcon={<CloseIcon />} onClick={handleToCloseModal}>
                          Batal
                        </Button>
                        <Button type="submit" className="" variant="contained" startIcon={<PhotoIcon />} disabled={!formik.dirty || (formik.dirty && !formik.isValid)}>
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
  width: '380px',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: 1,
  boxShadow: 24,
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const invitationThemes = [
  { value: 'nkh-001', label: 'NKH-001', thumbnail: 'digitalinvi_avatar/userone-emial-com-avatar' },
  { value: 'nkh-002', label: 'NKH-002', thumbnail: 'digitalinvi_avatar/ernsuckseed-mail-com-avatar' },
];
