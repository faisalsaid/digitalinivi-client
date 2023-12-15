import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import ImageIcon from '@mui/icons-material/Image';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FaWhatsapp } from 'react-icons/fa';
import HomeIcon from '@mui/icons-material/Home';
// import icons end

import React, { useState, useRef, useEffect } from 'react';
import Cover from './section/Cover';
import Bride from './section/Bride';
import { Stack, IconButton } from '@mui/material';
import Quote from './section/Quote';
import DateLocation from './section/DateLocation';
import Galery from './section/Galery';
import Comment from './section/Comment';
import { colorTheme } from '../../../hook/static/themeDetail';

const MasterTemplate = ({ invitaionTheme, info }) => {
  const [useSection, setUseSection] = useState({ quote: true, galery: true, comment: true });
  const [theme, setTheme] = useState('');
  const [decoration, setDecoration] = useState('');

  useEffect(() => {
    if (invitaionTheme && invitaionTheme?.code && invitaionTheme?.color) {
      setDecoration(`/${invitaionTheme?.code}-${invitaionTheme?.color}.svg`);
    }
    if (invitaionTheme && invitaionTheme?.color) {
      setTheme(invitaionTheme?.color);
    }
  }, [invitaionTheme]);

  const coverSection = useRef(null);
  const brideSection = useRef(null);
  const dateSection = useRef(null);
  const galerySection = useRef(null);
  const commentsSection = useRef(null);

  const bottomMenu = [
    {
      value: 'cover',
      label: 'Cover',
      icon: <HomeIcon style={{ color: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />,
      section: coverSection,
    },
    {
      value: 'bride',
      label: 'Bride',
      icon: <FavoriteIcon style={{ color: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />,
      section: brideSection,
    },
    {
      value: 'date',
      label: 'Date',
      icon: <EventIcon style={{ color: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />,
      section: dateSection,
    },
    {
      value: 'galery',
      label: 'Galery',
      icon: <ImageIcon style={{ color: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />,
      section: galerySection,
    },
    {
      value: 'comment',
      label: 'Comment',
      icon: <CommentIcon style={{ color: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} />,
      section: commentsSection,
    },
  ];

  const scroolToSection = (section) => {
    // console.log('scrool TO Section');
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: 'smooth',
    });
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
            <div onClick={() => scroolToSection(menu.section)} key={menu.value} className="flex flex-1 flex-col justify-center items-center cursor-pointer">
              <IconButton aria-label={menu.label}>{menu.icon}</IconButton>
              <p className="text-xs uppercase">{menu.label}</p>
            </div>
          ))}
        </div>
        <div ref={coverSection}>
          <Cover theme={theme} colorTheme={colorTheme} decoration={decoration} detail={info} />
        </div>
        {useSection.quote ? (
          <Quote theme={theme} colorTheme={colorTheme} />
        ) : (
          <div style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} className="h-2"></div>
        )}
        <div ref={brideSection}>
          <Bride theme={theme} colorTheme={colorTheme} decoration={decoration} detail={info} />
        </div>
        <div style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} className="h-2"></div>
        <div ref={dateSection}>
          <DateLocation theme={theme} colorTheme={colorTheme} decoration={decoration} detail={info} />
        </div>
        <div style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} className="h-2"></div>
        {useSection?.galery && (
          <div ref={galerySection}>
            <Galery theme={theme} colorTheme={colorTheme} decoration={decoration} />
          </div>
        )}
        <div style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }} className="h-2"></div>
        {useSection.comment && (
          <div ref={commentsSection}>
            <Comment theme={theme} colorTheme={colorTheme} decoration={decoration} detail={info} />
          </div>
        )}
        <div
          className="px-4 pt-14  flex  flex-col h-80 gap-2 justify-center items-center text-white relative pb-28"
          style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}
        >
          {/* <div className="absolute -top-[70px]  scale-125">
            <img className="mx-auto" src={`/ornamen-${theme}.svg`} />
          </div> */}
          <p className="text-xl">{info?.store?.storeName}</p>
          <p className="flex gap-2 items-center">
            <FaWhatsapp /> <span>{info?.store?.phoneNumber}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MasterTemplate;
