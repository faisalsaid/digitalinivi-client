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
import { colorTheme } from '../../hook/static/themeDetail';

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

const VIewTemplateComponents = () => {
  const [colorSchema, setColorSchema] = useState('daun');
  const [invitationCode, setInvitationCode] = useState('nkh-002');
  const [category, setCategory] = useState('');

  const handleColorSchema = (value) => {
    setColorSchema(value);
  };

  const invitaionTheme = {
    code: 'nkh-001',
    type: 'nikahan',
    color: 'daun',
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
          </div>
        </div>
      </div>
      <MasterTemplate
        invitaionTheme={{
          color: colorSchema,
          code: 'nkh-001',
          type: 'marriage',
        }}
        info={'theOrder'}
      />
    </>
  );
};

export default VIewTemplateComponents;
