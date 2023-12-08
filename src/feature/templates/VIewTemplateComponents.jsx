import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import ImageIcon from '@mui/icons-material/Image';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MdOutlinePinDrop, MdOutlineDateRange, MdOutlineAccessTime } from 'react-icons/md';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import { GiConfirmed } from 'react-icons/gi';
import { FaWhatsapp } from 'react-icons/fa';
// import icons end

import { Stack, IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import MasterTemplate from './invitationTemplate/MasterTemplate';

const bottomMenu = [
  {
    label: 'cover',
    icon: <ArticleIcon color="success" />,
  },
  {
    label: 'bride',
    icon: <FavoriteIcon color="success" />,
  },
  {
    label: 'date',
    icon: <EventIcon color="success" />,
  },
  {
    label: 'galery',
    icon: <ImageIcon color="success" />,
  },
  {
    label: 'comment',
    icon: <CommentIcon color="success" />,
  },
];

// const colorTheme = {
//   green: {
//     bgColor: '#EEFFD2',
//     color: 'darkgreen',
//   },
//   rose: {
//     bgColor: '#EEFFD2',
//     color: 'darkgreen',
//   },
// };

const colorTheme = [
  {
    name: 'daun',
    text: '#0B4D24',
    light: '#EDFDF3',
    medium: '#C1EFD2',
    dark: '#24944D',
  },
  {
    name: 'laut',
    text: '#00575C',
    light: '#DDFDFF',
    medium: '#6CF6FF',
    dark: '#00949D',
  },
  {
    name: 'kopi',
    text: '#57350D',
    light: '#FFEFDD',
    medium: '#F3D0A7',
    dark: '#B57B38',
  },
  {
    name: 'mawar',
    text: '#67083B',
    light: '#FFECF6',
    medium: '#FFB6DD',
    dark: '#B41C6E',
  },
];

const VIewTemplateComponents = () => {
  const [colorSchema, setColorSchema] = useState('daun');
  const [invitationCode, setInvitationCode] = useState('nkh-002');
  const [category, setCategory] = useState('');

  const handleColorSchema = (value) => {
    setColorSchema(value);
  };

  return (
    <>
      <div className="p-6 flex justify-between flex-col gap-2">
        <p>
          Kode Thema : <span className="uppercase">{invitationCode}</span>
        </p>
        <div className="flex gap-1 flex-col">
          <p>Warna Tema :</p>
          <div className="flex gap-6 items-center">
            {colorTheme &&
              colorTheme.map((data, i) => (
                <div key={data.name} className="flex gap-2 items-center   px-2  rounded-md border" style={{ backgroundColor: data.light, borderColor: data.dark }}>
                  <input className="cursor-pointer" type="radio" name="theme_color" id={data.name} value={data.name} onChange={() => handleColorSchema(data.name)} />
                  <label className="cursor-pointer " htmlFor={data.name}>
                    <span className="capitalize">{data.name}</span>
                  </label>
                </div>
              ))}
            {/* <div className="flex gap-2 items-center  bg-[#EEFFD2] px-2 border-[#2F4D04] rounded-md border">
              <input className="cursor-pointer" type="radio" name="theme_color" id="daun" value="daun" onChange={() => handleColorSchema('daun')} />
              <label className="cursor-pointer " htmlFor="daun">
                Daun
              </label>
            </div>
            <div className="flex gap-2 items-center bg-[#FFDEDE] px-2 border-[#DA3434] rounded-md border">
              <input className="cursor-pointer" type="radio" name="theme_color" id="mawar" value="mawar" onChange={() => handleColorSchema('mawar')} />
              <label className="cursor-pointer" htmlFor="mawar">
                Mawar
              </label>
            </div>
            <div className="flex gap-2 items-center bg-[#FFE8C4] px-2 border-[#CF7000] rounded-md border">
              <input className="cursor-pointer" type="radio" name="theme_color" id="kopi" value="kopi" onChange={() => handleColorSchema('kopi')} />
              <label className="cursor-pointer" htmlFor="kopi">
                Kopi
              </label>
            </div> */}
          </div>
        </div>
      </div>
      <MasterTemplate themeDetail={{ invitationCode: invitationCode, themeColor: colorSchema }} />
    </>
  );
};

export default VIewTemplateComponents;

// const topDecoration = (
//   <svg xmlns="http://www.w3.org/2000/svg" width="175" height="149" viewBox="0 0 175 149" fill="none">
//     <path
//       d="M95.9614 89.2728C50.5811 62.0446 62.0776 49.3382 56.632 27.5557C69.7418 32.3962 100.318 48.6121 117.744 74.7511C135.557 101.471 137.185 118.884 137.848 125.997C139.217 129.077 138.731 130.245 138.316 129.207C138.096 128.656 137.996 127.582 137.848 125.997C135.224 120.094 125.783 107.166 95.9614 89.2728Z"
//       fill={theme.color}
//       fillOpacity="0.3"
//     />
//     <path
//       d="M125.135 43.2923C87.8657 17.2024 78.6887 29.9494 56.632 32.6152C64.5255 41.0994 87.6142 59.345 116.821 64.4535C146.676 69.6755 163.623 65.4653 170.546 63.7443C173.815 63.8245 174.802 63.0883 173.712 63.0965C173.133 63.1009 172.088 63.3608 170.546 63.7443C164.279 63.5906 149.627 60.4373 125.135 43.2923Z"
//       fill={theme.color}
//       fillOpacity="0.5"
//     />
//     <path
//       d="M55.4802 90.5432C54.5053 37.6301 71.3742 40.6405 86.9557 24.4742C89.8024 38.1561 92.265 72.6785 79.3419 101.313C66.1317 130.583 52.2306 141.195 46.551 145.529C44.6657 148.323 43.4181 148.53 44.0776 147.628C44.4281 147.149 45.2854 146.495 46.551 145.529C50.1646 140.174 56.1208 125.315 55.4802 90.5432Z"
//       fill={theme.color}
//       fillOpacity="0.8"
//     />
//   </svg>
// );
