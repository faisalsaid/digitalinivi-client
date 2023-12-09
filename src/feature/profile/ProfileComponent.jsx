// import { FaUserEdit } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import PhotoIcon from '@mui/icons-material/Photo';
import CloseIcon from '@mui/icons-material/Close';
// import icons end

import { Stack, Typography, Modal, Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { updateAvatar } from './config/userSlice';
import { cloudImage } from '../../config/cloudinary.js';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const imageImput = useRef();
  const { curentUser } = useSelector((state) => state.user);
  const reader = new FileReader();
  const [avatarImage, setAvatarImage] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const theImage = cloudImage.image(curentUser.avatar.publicId);
  const handleOpenModal = () => setOpenModal(true);
  theImage.resize(fill().width(250).height(250));

  const handleCloseModal = () => {
    setOpenModal(false);
    setAvatarImage('');
  };

  const renderImage = (file) => {
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatarImage(reader.result);
    };
  };

  const handleInputAvatarChange = (e) => {
    // console.log(e.target.files[0]);
    // setPayloadAvatar(e.target.files[0]);
    renderImage(e.target.files[0]);
  };

  const handleUpdateAvatar = () => {
    dispatch(updateAvatar(avatarImage));
    handleCloseModal();
  };
  // console.log(curentUser);
  return (
    <Stack direction={'column'} gap={2}>
      <div className="w-full h-52 bg-sky-400 relative">
        <div className="w-32 h-32 absolute -bottom-12 left-1/2 -translate-x-1/2 ">
          <div className="rounded-full overflow-hidden">
            <AdvancedImage cldImg={theImage} />
          </div>
          {/* <Avatar alt="Remy Sharp" src={curentUser ? curentUser?.avatar : ''} sx={{ width: '100%', height: '100%' }} /> */}

          <button onClick={handleOpenModal} className="w-10 h-10 bg-green-400 absolute right-0 bottom-0 rounded-full flex justify-center items-center text-white">
            <MdEdit className="text-xl" />
          </button>
        </div>
      </div>
      <div className="mt-12 flex gap-2 flex-col justify-center items-center">
        <Typography component={'p'} variant="h5">
          {curentUser ? curentUser?.name : 'Guest'}
        </Typography>
        <Typography>{curentUser ? curentUser?.email : ''}</Typography>
      </div>
      <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="p">
            Ubah Foto Profil
          </Typography>
          <div
            onClick={() => imageImput.current.click()}
            className="min-h-[200px] max-h-[380px] overflow-hidden bg-slate-100 border-dashed border-slate-600 border-2 rounded-xl flex justify-center items-center cursor-pointer"
          >
            <img src={avatarImage} />
            <p hidden={avatarImage}>Pilih Gambar</p>
            <input ref={imageImput} onChange={handleInputAvatarChange} type="file" accept="image/png, image/jpg, image/svg,image/jpeg" hidden />
          </div>
          <div className="flex gap-2 justify-end">
            <Button color="error" className="" variant="contained" startIcon={<CloseIcon />} onClick={handleCloseModal}>
              Batal
            </Button>
            <Button onClick={handleUpdateAvatar} className="" variant="contained" startIcon={<PhotoIcon />} disabled={!avatarImage}>
              Unggah
            </Button>
          </div>
        </Box>
      </Modal>
    </Stack>
  );
};

export default ProfileComponent;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};
