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
const VIewTemplateComponents = () => {
  const [theme, setTheme] = useState('orange');
  const [category, setCategory] = useState('');

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
      <div className="p-6 flex justify-between flex-col gap-2">
        <p>Kode Thema : NKH-001</p>
        <div className="flex gap-1 flex-col">
          <p>Warna Tema :</p>
          <div className="flex gap-6 items-center">
            <div className="flex gap-2 items-center  bg-[#EEFFD2] px-2 border-[#2F4D04] rounded-md border">
              <input className="cursor-pointer" type="radio" name="theme_color" id="green" value="green" onChange={() => handleColorTheme('green')} />
              <label className="cursor-pointer " htmlFor="green">
                Daun
              </label>
            </div>
            <div className="flex gap-2 items-center bg-[#FFDEDE] px-2 border-[#DA3434] rounded-md border">
              <input className="cursor-pointer" type="radio" name="theme_color" id="rose" value="rose" onChange={() => handleColorTheme('rose')} />
              <label className="cursor-pointer" htmlFor="rose">
                Mawar
              </label>
            </div>
            <div className="flex gap-2 items-center bg-[#FFE8C4] px-2 border-[#CF7000] rounded-md border">
              <input className="cursor-pointer" type="radio" name="theme_color" id="orange" value="orange" onChange={() => handleColorTheme('orange')} />
              <label className="cursor-pointer" htmlFor="orange">
                Jeruk
              </label>
            </div>
          </div>
        </div>
      </div>
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
        <div ref={coverSection} id="cover" className={` w-full min-h-screen p-2 py-24 relative flex justify-center items-center flex-col gap-8`}>
          <div className="absolute -top-[70px]  scale-125">
            <img src={`/ornamen-${theme}.svg`} />
          </div>
          <p className={`text-lg font-semibold text-center`}>Kami Mengundang Anda ke pernikahan :</p>
          <div className={`w-52 h-52 bg-green-100 border rounded-3xl flex flex-grow overflow-hidden`}>
            <img
              className="max-h-full min-w-full object-cover align-bottom"
              src="https://images.unsplash.com/photo-1517456215183-9a2c3a748d0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <p className={`  text-center text-6xl `} style={{ fontFamily: 'Great Vibes', fontWeight: 400 }}>
            Budi & Wati
          </p>
          <p className="text-lg font-semibold  text-center">Sabtu, 29 April 2023</p>
          <div className="flex gap-4">
            {['Hari', 'Jam', 'Menit'].map((data) => (
              <div key={data} className="">
                <p
                  className={` w-16 h-16 text-white flex justify-center items-center text-3xl rounded-3xl`}
                  style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}
                >
                  99
                </p>
                <p className="text-center ">{data}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BRIDE START */}
        <div ref={brideSection} id="bride" className={` w-full min-h-screen  relative  justify-center items-center `}>
          <div className="px-6 py-14 text-white flex gap-4 flex-col" style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}>
            <p className="text-center">
              “Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Bahwa Dia Menciptakan Pasangan-Pasangan Untukmu Dari (Jenis) Dirimu Sendiri Agar Kamu Merasa Tenteram KepadaNya. Dia
              Menjadikan Di Antaramu Rasa Cinta Dan Kasih Sayang. Sesungguhnya Pada Yang Demikian Itu Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang Berpikir”
            </p>
            <p className="text-center text-xl">Q.S. Ar-Rum : 21</p>
          </div>
          <div className="px-4 py-14 flex flex-col gap-10 justify-center items-center ">
            <p className="text-center">Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud Menyelenggarakan Syukuran Pernikahan Putra Putri Kami :</p>
            <div className="flex flex-col gap-10 sm:flex-row">
              <div className="flex flex-col items-center gap-4 flex-1">
                <div className={`w-52 max-w-52 h-52 max-h-52 bg-green-100 border rounded-3xl flex flex-grow overflow-hidden`}>
                  <img
                    className="max-h-full min-w-full object-cover align-bottom"
                    src="https://images.unsplash.com/photo-1582897291228-f7676bfcd52c?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <p className="text-center text-4xl" style={{ fontFamily: 'Great Vibes', fontWeight: 400 }}>
                  Ini Budi Pratama S.Pd M.M
                </p>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <p>Putra Dari:</p>
                  <p className="font-semibold">Bpk Ini Budi & Ibu Ini Budi</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 flex-1">
                <div className={`w-52 max-w-52 h-52 max-h-52 bg-green-100 border flex rounded-3xl flex-grow overflow-hidden `}>
                  <img
                    className="max-h-full min-w-full object-cover align-bottom"
                    src="https://images.unsplash.com/photo-1517455850349-65b65b06f255?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <p className="text-center text-4xl" style={{ fontFamily: 'Great Vibes', fontWeight: 400 }}>
                  Dr. Ini Wati S.Sos
                </p>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <p>Putri Dari:</p>
                  <p className="font-semibold">Bpk Ini Wati & Ibu Ini Wati</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BRIDE END */}
        <div>
          <img className="mx-auto" src={`/ornamen-${theme}.svg`} />
        </div>
        {/* LOCATION START */}
        <div ref={dateSection} id="date" className="px-4 py-14 flex justify-center flex-col min-h-screen gap-8">
          <p className="text-center">Insya Allah Acara Akan Dilaksanakan Pada :</p>
          <div className="flex flex-col gap-8 sm:flex-row">
            <div className="flex flex-col gap-2 flex-1">
              <p className="font-medium">Akad Nikah :</p>
              <div className="flex gap-2 items-center">
                <div>
                  <MdOutlineDateRange />
                </div>
                <p>Tanggal : Jumat, 28 April 2023</p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <MdOutlineAccessTime />
                </div>
                <p>Pukul : 09.00 WIT - Selesai</p>
              </div>
              <div className="flex gap-2 items-baseline">
                <div>
                  <MdOutlinePinDrop />
                </div>
                <p>Lokasi : Rumah Mempelai Wanita, Kapaha Hotel Monalisa Rt. 001 / Rw. 005 </p>
              </div>
              <button
                className=" text-white max-w-fit self-center px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-green-600 active:bg-green-800"
                style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}
              >
                <FaMapMarkedAlt /> <span>View Location</span>
              </button>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <p className="font-medium">Resepsi :</p>
              <div className="flex gap-2 items-center">
                <div>
                  <MdOutlineDateRange />
                </div>
                <p>Tanggal : Jumat, 28 April 2023</p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <MdOutlineAccessTime />
                </div>
                <p>Pukul : 09.00 WIT - Selesai</p>
              </div>
              <div className="flex gap-2 items-baseline">
                <div>
                  <MdOutlinePinDrop />
                </div>
                <p>Lokasi : Gedung Ashari Al-Fatah </p>
              </div>
              <button
                className=" text-white max-w-fit self-center px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-green-600 active:bg-green-800"
                style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}
              >
                <FaMapMarkedAlt /> <span>View Location</span>
              </button>
            </div>
          </div>
        </div>
        {/* LOCATION END */}
        <div>
          <img className="mx-auto" src={`/ornamen-${theme}.svg`} />
        </div>
        {/* GALERY START */}
        <div ref={galerySection} id="galery" className="px-4 py-14 flex  flex-col min-h-screen gap-4 ">
          <p className="text-xl">Galeri Photo :</p>

          <div className="columns-2 sm:columns-2 md:columns-3 gap-3 ">
            <div className="w-full mb-3">
              <img
                className="max-w-full rounded-md"
                src="https://plus.unsplash.com/premium_photo-1683290222216-a9fab340cbf8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="wedding-1"
              ></img>
            </div>
            <div className="w-full mb-3">
              <img
                className="max-w-full rounded-md"
                src="https://plus.unsplash.com/premium_photo-1670430623154-24626c42fb33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="wedding-1"
              ></img>
            </div>
            <div className="w-full mb-3">
              <img
                className="max-w-full rounded-md"
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="wedding-1"
              ></img>
            </div>
            <div className="w-full mb-3">
              <img
                className="max-w-full rounded-md"
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="wedding-1"
              ></img>
            </div>
            <div className="w-full mb-3">
              <img
                className="max-w-full rounded-md"
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="wedding-1"
              ></img>
            </div>
            <div className="w-full mb-3">
              <img
                className="max-w-full rounded-md"
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="wedding-1"
              ></img>
            </div>
            <div className="w-full mb-3">
              <img
                className="max-w-full rounded-md"
                src="https://images.unsplash.com/photo-1460364157752-926555421a7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="wedding-1"
              ></img>
            </div>
            <div className="w-full mb-3">
              <img
                className="max-w-full rounded-md"
                src="https://images.unsplash.com/photo-1487621199565-dc425a60897b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="wedding-1"
              ></img>
            </div>
            <div className="w-full mb-3">
              <img
                className="max-w-full rounded-md"
                src="https://images.unsplash.com/photo-1533418466759-ac54bd32122e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="wedding-1"
              ></img>
            </div>
          </div>
        </div>
        {/* GALERY END */}
        <div>
          <img className="mx-auto" src={`/ornamen-${theme}.svg`} />
        </div>
        {/* COMENT START */}
        <div ref={commentsSection} id="comment" className="px-4 py-14 flex  flex-col min-h-screen gap-4 ">
          <p className="text-center">
            Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih Dari Hati Yang Tulus Apabila Bapak/ Ibu/ Saudara/i Berkenan Hadir Untuk Memberikan Do’a Restu Kepada Kami
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className={`w-52 h-52 bg-green-100 border rounded-3xl flex flex-grow overflow-hidden`}>
              <img
                className="max-h-full min-w-full object-cover align-bottom"
                src="https://images.unsplash.com/photo-1517456215183-9a2c3a748d0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <p className="text-4xl" style={{ fontFamily: 'Great Vibes', fontWeight: 400 }}>
              Budi & Wati
            </p>
            <p>Sabtu, 29 April 2023</p>
          </div>
          <div className="shadow-lg bg-transparent max-w-2xl mx-auto">
            <p className=" text-white p-2 rounded-t-lg" style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}>
              Beri Ucapan Spesial
            </p>
            <form action="">
              <div className="p-4  flex flex-col gap-2 text-slate-700" style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.medium) }}>
                <input className="w-full p-2 rounded-md" type="text" placeholder="Nama" />
                <textarea className="w-full p-2 rounded-md h-36" placeholder="Ketik pesan ..."></textarea>
                <select className="w-full p-2 rounded-md">
                  <option value="">Konfirmasi Kehadiran</option>
                  <option value="confirm">Hadir</option>
                  <option value="reject">Tidak Hadir</option>
                  <option value="consider">Pertimbangkan</option>
                </select>
                <button
                  className="flex gap-2  text-white items-center px-4 py-2 rounded-md justify-center"
                  type="submit"
                  style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}
                >
                  <IoIosSend /> <span>Kirim</span>
                </button>
              </div>
            </form>
            <div className="bg-slate-50 p-4 rounded-b-lg overflow-hidden flex flex-col gap-3 ">
              <div className="flex flex-col gap-1 text-slate-700 border-b pb-2">
                <div className="flex gap-2">
                  <p className="font-medium">Emmanuel Macron</p>
                  <p className="flex gap-1 items-center bg-green-200 px-2 rounded-md text-sm">
                    <GiConfirmed />
                    <span>hadir</span>
                  </p>
                </div>
                <p className="text-xs text-slate-400">Dua hari yang lalu</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptas doloremque in incidunt possimus illo ab quo sequi id natus expedita quas, hic veniam ad
                  harum provident delectus quia soluta!
                </p>
              </div>
              <div className="flex flex-col gap-1 text-slate-700">
                <div className="flex gap-2">
                  <p>Mister Puttin</p>
                  <p className="flex gap-1 items-center bg-red-300 px-2 rounded-md text-sm">
                    <GiConfirmed />
                    <span>Tidak hadir</span>
                  </p>
                </div>
                <p className="text-xs text-slate-400">Dua hari yang lalu</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. ...</p>
              </div>
            </div>
          </div>
        </div>
        {/* COMENT END */}

        <div
          className="px-4 py-14 flex  flex-col h-80 gap-2 justify-center items-center text-white relative pb-20"
          style={{ backgroundColor: colorTheme.filter((data) => data.name === theme).map((data) => data.dark) }}
        >
          <div className="absolute -top-[70px]  scale-125">
            <img className="mx-auto" src={`/ornamen-${theme}.svg`} />
          </div>
          <p className="text-xl">Vendor Name</p>
          <p className="flex gap-2 items-center">
            <FaWhatsapp /> <span>08123456789</span>
          </p>
        </div>

        {/* <div className="bg-green-800 h-[75px]"></div> */}
      </div>
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
