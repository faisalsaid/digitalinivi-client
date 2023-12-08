import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import ImageIcon from '@mui/icons-material/Image';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IoIosSend } from 'react-icons/io';
import { GiConfirmed } from 'react-icons/gi';
import { FaWhatsapp } from 'react-icons/fa';
// import icons end

import React, { useState, useRef, useEffect } from 'react';
import Cover from './section/Cover';
import Bride from './section/Bride';
import { Stack, IconButton } from '@mui/material';
import Quote from './section/Quote';
import DateLocation from './section/DateLocation';

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

const colorTheme = [
  {
    name: 'green',
    text: 'darkgreen',
    light: '#EEFFD2',
    dark: '#2F4D04',
    medium: '#D3DEBF',
  },
  {
    name: 'rose',
    text: '#DA3434',
    light: '#FFDEDE',
    dark: '#DA3434',
    medium: '#FFB2B2',
  },
  {
    name: 'orange',
    text: '#864800',
    light: '#FFE8C4',
    medium: '#FFBB6C',
    dark: '#CF7000',
  },
];

const MasterTemplate = () => {
  const [useSection, setUseSection] = useState({ quote: true, galery: true, comment: true });
  const [theme, setTheme] = useState('green');
  const [category, setCategory] = useState('');
  const [decoration, setDecoration] = useState('');

  useEffect(() => {
    setDecoration(`/nkh-001-green.svg`);
  }, []);

  const coverSection = useRef(null);
  const brideSection = useRef(null);
  const dateSection = useRef(null);
  const galerySection = useRef(null);
  const commentsSection = useRef(null);

  const bottomMenu = [
    {
      label: 'cover',
      icon: <ArticleIcon style={{ color: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />,
      section: coverSection,
    },
    {
      label: 'bride',
      icon: <FavoriteIcon style={{ color: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />,
      section: brideSection,
    },
    {
      label: 'date',
      icon: <EventIcon style={{ color: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />,
      section: dateSection,
    },
    {
      label: 'galery',
      icon: <ImageIcon style={{ color: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />,
      section: galerySection,
    },
    {
      label: 'comment',
      icon: <CommentIcon style={{ color: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />,
      section: commentsSection,
    },
  ];

  const scroolToSection = (section) => {
    console.log('scrool TO Section');
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleColorTheme = (value) => {
    setTheme(value);
  };
  return (
    <>
      <div
        className={`mx-auto max-w-7xl min-h-screen relative overflow-hidden`}
        style={{
          fontFamily: 'poppins',
          backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.light),
          color: colorTheme.filter((data) => data.name === theme).map((data) => data.text),
        }}
      >
        <div
          className={`fixed bottom-0 p-4  w-full  flex justify-around sm:max-w-lg left-1/2 -translate-x-1/2 sm:rounded-full sm:bottom-4 z-10`}
          style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.medium) }}
        >
          {bottomMenu.map((menu, i) => (
            <IconButton onClick={() => scroolToSection(menu.section)} key={menu.label} aria-label={menu.label}>
              {menu.icon}
            </IconButton>
          ))}
        </div>
        <div ref={coverSection}>
          <Cover theme={theme} colorTheme={colorTheme} decoration={decoration} />
        </div>
        <Quote theme={theme} colorTheme={colorTheme} />
        <div ref={brideSection}>
          <Bride theme={theme} colorTheme={colorTheme} decoration={decoration} />
        </div>
        <div ref={dateSection}>
          <DateLocation theme={theme} colorTheme={colorTheme} decoration={decoration} />
        </div>
        <div ref={galerySection}>
          <DateLocation theme={theme} colorTheme={colorTheme} decoration={decoration} />
        </div>
        <div ref={commentsSection}>
          <DateLocation theme={theme} colorTheme={colorTheme} decoration={decoration} />
        </div>
      </div>
    </>
  );
};

export default MasterTemplate;
