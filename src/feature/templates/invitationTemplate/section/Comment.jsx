import { IoIosSend } from 'react-icons/io';
import { GiConfirmed } from 'react-icons/gi';
// import icons end

import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const Comment = ({ theme, colorTheme, decoration, detail }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <div className=" top-0   scale-x-105">
        <img src={decoration} />
      </div>
      <div id="comment" className="p-4 flex  flex-col gap-4 ">
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
          <p>{format(new Date(detail?.invitationDetail?.marriageInfo?.date), 'EEEE dd-MM-yyyy', { locale: id })}</p>
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
      <div className=" top-0  rotate-180 scale-x-105">
        <img src={decoration} />
      </div>
    </div>
  );
};

export default Comment;
